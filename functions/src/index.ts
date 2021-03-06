import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";
import axios from "axios";
import config from "./config";
import { SlackOptions } from "./SlackOptions";
import { User } from "./User";
import {
  buildApprovalRequestMessage,
  buildApprovalSuccessMessage,
  buildChannelSlackMessage,
  buildInstructorDm,
} from "./slackBuilder";

const corsHandler = cors({ origin: true });

admin.initializeApp();

export const zoomRecordingReady = functions.https.onRequest(
  async (request, response) => {
    // Check auth header to confirm Zoom is making the request
    if (request.headers.authorization !== config.env.zoom.verificationToken) {
      console.log("Could not validate the zoom verification token");
      response.status(401).send("Unauthorized");
      return;
    }

    if (request.method !== "POST") {
      response.status(405).send("Method Not Allowed");
      return;
    }

    const classroomsRef = admin.firestore().collection("classrooms");
    const { payload } = request.body;
    const {
      id,
      topic,
      password,
      share_url,
      start_time,
      duration,
    } = payload.object;

    const recording = {
      password: password || null,
      meetingName: topic,
      url: share_url,
      date: new Date(start_time),
      duration,
      zoomId: id,
    };

    console.log(
      `Handling Zoom request for ${recording.meetingName} with ID ${recording.zoomId} starting at ${recording.date}`
    );

    console.log(JSON.stringify(payload.object));

    let classRef: FirebaseFirestore.DocumentReference;
    let classroomHasBeenClaimed = false;
    const query = await classroomsRef
      .where("meetingName", "==", recording.meetingName)
      .get();

    if (query.empty) {
      classRef = await classroomsRef.add({
        meetingName: recording.meetingName,
      });
    } else {
      classroomHasBeenClaimed = true;
      classRef = query.docs[0].ref;
    }

    const alreadySaved = await isAlreadySaved(classRef, recording.url);

    if (alreadySaved) {
      console.log(
        `Duplicate recording. Ignoring Zoom request for ID ${recording.zoomId}`
      );
      response.status(200).send();
      return;
    }

    const newRecordingRef = await classRef
      .collection("recordings")
      .add(recording);

    // If classroom has been claimed by an instructor and has slack details, send notification
    if (classroomHasBeenClaimed) {
      const classSnap = await classRef.get();
      const classData = await classSnap.data();

      if (classData && classData.instructorId) {
        const slackOptions: SlackOptions = {
          cohortId: classRef.id,
          channel: `#${classData?.slackChannel}`,
          instructorEmail: classData?.instructorSlackEmail,
          instructorSlackId: classData?.instructorSlackId,
          zoomLink: recording.url,
          zoomPassword: recording.password,
          recordingDate: recording.date,
          recordingId: newRecordingRef.id,
        };

        await sendSlackMessages(slackOptions, config.env.app.url);
      }
    }

    response.status(200).send();
    return;
  }
);

export const searchSlackUser = functions.https.onRequest(
  (request, response) => {
    corsHandler(request, response, async () => {
      const { email } = request.query;
      if (!email) {
        response.status(400).send();
        return;
      }

      const { botAccessToken } = config.env.slack;
      const slackUrl = `https://slack.com/api/users.lookupByEmail?email=${email}`;

      console.log(`searching slack for email: ${email}`);

      const { data } = await axios.get(slackUrl, {
        headers: {
          Authorization: `Bearer ${botAccessToken}`,
        },
      });

      response.status(200).send(data);
    });
  }
);

export const userAdded = functions.firestore
  .document("users/{userId}")
  .onCreate(async (userSnapshot, _event) => {
    const user: User = userSnapshot.data() as User;
    const url = `${config.env.app.url}/approval_request?uid=${user.uid}`;
    await sendApprovalRequestMessage(user, url);
  });

export const approveRequest = functions.https.onRequest((request, response) =>
  corsHandler(request, response, async () => {
    const userId = request.query.uid;

    const snapshot = await admin.firestore().doc(`/users/${userId}`).get();
    if (!snapshot.exists) {
      console.log("Tried approving user but none with matching ID exists");
      response.status(404).send();
      return;
    }

    const user = snapshot.data() as User;

    if (user.isApproved) {
      console.log("Tried approving user that's already approved. Exiting...");
      response.status(200).send();
      return;
    }

    await snapshot.ref.update({ isApproved: true });

    console.log(`${user.displayName} has been successfully approved`);

    await sendApprovalSuccessMessage(user);

    response.status(200).send();
    return;
  })
);

// If Zoom doesn't receive a 2xx response within 3 seconds
// they will retry the request up to 3 times.
// This doesn't necessarily mean that it failed, so check if
// the recording is already saved before trying to save it again
const isAlreadySaved = async (
  classRef: FirebaseFirestore.DocumentReference,
  shareUrl: string
): Promise<Boolean> => {
  const query = await classRef
    .collection("recordings")
    .where("url", "==", shareUrl)
    .get();
  return !query.empty;
};

const sendApprovalRequestMessage = async (
  user: User,
  appUrl: string
): Promise<void> => {
  const targetSlackChannel = "#learning-team";
  const { botAccessToken } = config.env.slack;
  const slackUrl = "https://slack.com/api/chat.postMessage";

  const channelPayload = {
    channel: targetSlackChannel,
    ...buildApprovalRequestMessage(user.displayName, appUrl),
  };

  console.log("Sending approval request to #learning-team channel");

  const channelResponse = await axios.post(slackUrl, channelPayload, {
    headers: {
      Authorization: `Bearer ${botAccessToken}`,
    },
  });

  console.log(channelResponse.data.error || "Approval link sent to channel");
};

const sendApprovalSuccessMessage = async (user: User): Promise<void> => {
  const targetSlackChannel = "#learning-team";
  const { botAccessToken } = config.env.slack;
  const slackUrl = "https://slack.com/api/chat.postMessage";

  const channelPayload = {
    channel: targetSlackChannel,
    ...buildApprovalSuccessMessage(user.displayName),
  };

  const channelResponse = await axios.post(slackUrl, channelPayload, {
    headers: {
      Authorization: `Bearer ${botAccessToken}`,
    },
  });

  console.log(channelResponse.data.error || "Message sent to channel");
};

const sendSlackMessages = async (
  options: SlackOptions,
  appUrl: string
): Promise<void> => {
  const { botAccessToken } = config.env.slack;
  const slackUrl = "https://slack.com/api/chat.postMessage";

  const channelPayload = {
    channel: options.channel,
    ...buildChannelSlackMessage(options, appUrl),
  };

  console.log("Sending zoom link");
  const channelResponse = await axios.post(slackUrl, channelPayload, {
    headers: {
      Authorization: `Bearer ${botAccessToken}`,
    },
  });

  console.log(channelResponse.data.error || "Zoom link sent to channel");

  const instructorPayload = buildInstructorDm(options, appUrl);
  const instructorResponse = await axios.post(slackUrl, instructorPayload, {
    headers: {
      Authorization: `Bearer ${botAccessToken}`,
    },
  });

  console.log(instructorResponse.data.error || "Zoom link sent to instructor");
};
