(function(e){function t(t){for(var n,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({admin:"admin",login:"login"}[e]||e)+"."+{admin:"541807fa",login:"5bb5baea"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={login:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({admin:"admin",login:"login"}[e]||e)+"."+{admin:"31d6cfe0",login:"c39a7adb"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],p.parentNode.removeChild(p),r(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0e21":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",{attrs:{view:"lHh Lpr lFf"}},[r("q-page-container",[r("router-view")],1)],1)},o=[],i={name:"LayoutDefault",components:{},data:function(){return{leftDrawerOpen:!1}}},s=i,c=r("2877"),u=Object(c["a"])(s,a,o,!1,null,null,null),l=u.exports,d=(r("d3b7"),r("96cf"),r("1da1")),p=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-splitter",{staticStyle:{height:"100vh"},attrs:{limits:[50,70]},scopedSlots:e._u([{key:"before",fn:function(){return[r("div",{staticClass:"q-pa-md"},[e.classroom?e._e():r("q-skeleton",{staticClass:"skeleton--header",attrs:{tag:"h5",width:"200px",animation:"wave"}}),r("h5",{staticClass:"text-blue-grey-8 text-center"},[e._v(" "+e._s(e.classroom&&e.classroom.cohortName)+" ")]),r("div",{staticClass:"row justify-center q-pt-lg"},[r("q-date",{staticClass:"col-sm-12 col-md-10 col-lg-6",attrs:{options:e.options,color:"deep-orange"},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1)]},proxy:!0},{key:"after",fn:function(){return[r("q-tab-panels",{attrs:{animated:"","transition-prev":"fade","transition-next":"fade"},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}},e._l(e.options,(function(t){return r("q-tab-panel",{key:t,attrs:{name:t}},[r("h2",{staticClass:"q-mb-sm text-blue-grey-10"},[e._v(" "+e._s(e.getDisplayDate(t))+" ")]),e.recordingsDisplayed.length?r("h5",{staticClass:"q-mt-none text-blue-grey-5"},[e._v(" "+e._s(e.recordingsDisplayed[0].meetingName)+" ")]):e._e(),r("q-list",{attrs:{separator:"",bordered:""}},e._l(e.recordingsDisplayed,(function(t){return r("q-item",{key:t.id},[r("q-item-section",[r("q-item-label",{staticClass:"text-deep-orange"},[e._v("Summary")]),r("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.summary||"No summary available"))]),r("q-item-label",{staticClass:"q-pt-sm"},[r("a",{attrs:{href:t.url,target:"_blank"}},[e._v(" View in Zoom ")])]),r("q-item-label",{staticClass:"q-pt-md text-deep-orange"},[e._v("Password")]),r("q-item-label",{attrs:{caption:""}},[r("p",{attrs:{href:t.url}},[e._v(e._s(t.password))])])],1),r("q-item-section",{attrs:{side:"",top:""}},[r("q-item-label",{attrs:{caption:""}},[e._v(" "+e._s(t.duration)+" minutes "),r("q-icon",{attrs:{name:"watch_later"}})],1)],1)],1)})),1)],1)})),1)]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)},f=[],h=(r("4de4"),r("d81d"),r("6062"),r("3ca3"),r("ddb0"),r("2909")),g=r("5530"),b=r("dc59"),v=r("bd4c"),y={name:"CohortRecordings",components:{},data:function(){var e=new Date;return{recordings:[],meetingName:this.$route.params.cohort,splitterModel:65,selectedDate:this.dateStr(e),classroom:null}},mounted:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=b["b"].doc(e.meetingName),r.onSnapshot((function(t){e.classroom=t.data()})),r.collection("recordings").onSnapshot((function(t){e.recordings=t.docs.map((function(e){return Object(g["a"])(Object(g["a"])({},e.data()),{},{id:e.id})}))}));case 3:case"end":return t.stop()}}),t)})))()},methods:{dateStr:function(e){return v["b"].formatDate(e,"YYYY/MM/DD")},getRecDate:function(e){return new Date(1e3*e.date.seconds)},getDisplayDate:function(e){var t="string"===typeof e?new Date(e):e;return v["b"].formatDate(t,"MMM DD, YYYY")},showAll:function(){}},computed:{options:function(){var e=this,t=this.recordings.map((function(t){var r=new Date(1e3*t.date.seconds);return e.dateStr(r)}));return Object(h["a"])(new Set(t))},recordingsDisplayed:function(){var e=this;return this.recordings.filter((function(t){var r=e.getRecDate(t);return e.selectedDate===e.dateStr(r)}))}}},w=y,x=(r("bb42"),Object(c["a"])(w,m,f,!1,null,"5e9d2930",null)),_=x.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-center q-mt-xl"},[r("div",{staticClass:"col-xs-10 col-md-6 col-lg-4 q-pt-xl"},[r("h2",{staticClass:"q-mb-sm text-blue-grey-10"},[e._v(" "+e._s(e.displayDate)+" ")]),r("h5",{staticClass:"q-mt-none text-blue-grey-5"},[e._v(" "+e._s(e.cohort.cohortName)+" ")]),r("q-form",[r("q-input",{attrs:{color:"deep-orange",label:"Summary",outlined:"",type:"textarea",placeholder:"Topics, chapters, etc..."},model:{value:e.recording.summary,callback:function(t){e.$set(e.recording,"summary",t)},expression:"recording.summary"}}),r("div",{staticClass:"row justify-end"},[r("div",{staticClass:"col q-py-md"},[r("q-btn",{attrs:{color:"deep-orange"},on:{click:function(t){return e.submit()}}},[e._v("Submit")])],1)])],1)],1)])},q=[],C={name:"RecordingSummaryForm",components:{},data:function(){var e=this.$route.params.cohort,t=this.$route.params.recording,r=Object(b["c"])(e).doc(t),n=b["b"].doc(e);return{recordingRef:r,cohortRef:n,cohort:{},recording:{}}},mounted:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRecording();case 2:return e.recording=t.sent,t.next=5,e.getCohort();case 5:e.cohort=t.sent;case 6:case"end":return t.stop()}}),t)})))()},methods:{getRecording:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.recordingRef.get();case 2:return r=t.sent,t.next=5,r.data();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},getCohort:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.cohortRef.get();case 2:return r=t.sent,t.next=5,r.data();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.recordingRef.update(e.recording);case 2:e.$q.notify({type:"positive",message:"Video summary has been updated"}),e.$router.push({path:"/".concat(e.cohortRef.id)});case 4:case"end":return t.stop()}}),t)})))()}},computed:{displayDate:function(){if(!this.recording.date)return"";var e=new Date(1e3*this.recording.date.seconds);return v["b"].formatDate(e,"MMM DD")}}},j=C,S=Object(c["a"])(j,D,q,!1,null,null,null),k=S.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"text-center text-blue-grey-8"},[e._v("Not Found")])},R=[],Q={},M=Q,P=Object(c["a"])(M,O,R,!1,null,null,null),E=P.exports;n["a"].use(p["a"]);var L=[{path:"/404",name:"NotFound",component:E},{path:"/login",name:"Login",component:function(){return r.e("login").then(r.bind(null,"a55b"))}},{path:"/users/:userId",name:"ClassroomManager",component:function(){return r.e("admin").then(r.bind(null,"0957"))},beforeEnter:N},{path:"/:cohort",name:"Recordings",component:_},{path:"/:cohort/recordings/:recording/edit",name:"SummaryForm",component:k,beforeEnter:N}],N=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(b["a"].currentUser){e.next=3;break}return n({path:"/404"}),e.abrupt("return");case 3:return a=b["a"].currentUser.uid,e.next=6,b["e"].doc(a).get();case 6:return o=e.sent,e.next=9,o.data();case 9:i=e.sent,i.isApproved?n():n({path:"/404"});case 11:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),A=new p["a"]({mode:"history",base:"/",routes:L}),T=A,I=r("2f62");n["a"].use(I["a"]);var $,Y=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}}),F=(r("0e21"),r("e54f"),r("b05d")),z=r("4d5a"),U=r("e359"),B=r("9404"),K=r("09e3"),V=r("9989"),G=r("9c40"),H=r("0016"),J=r("1c1c"),W=r("66e5"),Z=r("4074"),X=r("0170"),ee=r("8562"),te=r("adad"),re=r("823b"),ne=r("52ee"),ae=r("27f9"),oe=r("0378"),ie=r("2a19"),se=r("293e"),ce=r("24e8"),ue=r("f508");n["a"].use(F["a"],{config:{},components:{QLayout:z["a"],QHeader:U["a"],QDrawer:B["a"],QPageContainer:K["a"],QPage:V["a"],QBtn:G["a"],QIcon:H["a"],QList:J["a"],QItem:W["a"],QItemSection:Z["a"],QItemLabel:X["a"],QSplitter:ee["a"],QTabPanels:te["a"],QTabPanel:re["a"],QDate:ne["a"],QInput:ae["a"],QForm:oe["a"],QSkeleton:se["a"],QDialog:ce["a"],Loading:ue["a"]},directives:{},plugins:{Notify:ie["a"],Loading:ue["a"]}}),n["a"].config.productionTip=!1,b["a"].onAuthStateChanged((function(){$||($=new n["a"]({router:T,store:Y,render:function(e){return e(l)}}).$mount("#app"))}))},"6f5c":function(e,t,r){},bb42:function(e,t,r){"use strict";var n=r("6f5c"),a=r.n(n);a.a},dc59:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return s})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return d}));var n=r("59ca"),a=(r("ea7b"),r("e71f"),{apiKey:"AIzaSyCgfKftKx8aG5EL_OTGrPTIUVMCA7VW6Yc",authDomain:"zoombroadcast-76060.firebaseapp.com",databaseURL:"https://zoombroadcast-76060.firebaseio.com",projectId:"zoombroadcast-76060",appId:"1:988473961991:web:6dc7d148b0c7a26b7144a2"});n["initializeApp"](a);var o=n["firestore"](),i=n["auth"](),s=o.collection("users"),c=o.collection("classrooms"),u=function(e){return c.doc(e).collection("recordings")},l=new n["auth"].GoogleAuthProvider,d=function(){return n["auth"]().signInWithPopup(l)}}});
//# sourceMappingURL=app.4991917d.js.map