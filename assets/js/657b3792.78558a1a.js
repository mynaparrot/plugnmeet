"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={description:"plugNmeet join room using API",sidebar_position:3},o="Join room",i={unversionedId:"api/join_room",id:"api/join_room",title:"Join room",description:"plugNmeet join room using API",source:"@site/docs/api/join_room.md",sourceDirName:"api",slug:"/api/join_room",permalink:"/docs/api/join_room",draft:!1,editUrl:"https://github.com/mynaparrot/plugNmeet-docs/docs/api/join_room.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"plugNmeet join room using API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create room",permalink:"/docs/api/create_room"},next:{title:"Room Status (active/inactive)",permalink:"/docs/api/is_room_active"}},p={},m=[{value:"Request parameters",id:"request-parameters",level:2},{value:"User info",id:"user-info",level:3},{value:"User metadata",id:"user-metadata",level:3},{value:"<strong>Example</strong>",id:"example",level:3},{value:"Response",id:"response",level:2},{value:"Custom design",id:"custom-design",level:2}],s={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"join-room"},"Join room"),(0,r.kt)("p",null,"End point: ",(0,r.kt)("inlineCode",{parentName:"p"},"/room/getJoinToken")),(0,r.kt)("h2",{id:"request-parameters"},"Request parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"room_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Room Id that you created before to join.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#user-info"},"user_info")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"user-info"},"User info"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"User full name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"User unique ID. Should be unquie for every user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_admin"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"If true then user will be treated as an admin for this room.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"If true then user will be invisible in the room.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#user-metadata"},"user_metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"user-metadata"},"User metadata"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"profile_pic"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Profile avatar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/create_room#default-lock-settings"},"lock_settings")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Lock settings")))),(0,r.kt)("h3",{id:"example"},(0,r.kt)("strong",{parentName:"h3"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "room_id": "room01",\n  "user_info": {\n    "name": "Your name",\n    "user_id": "Your-Unique-User-Id",\n    "is_admin": true,\n    "is_hidden": false,\n    "user_metadata": {\n      "profile_pic": "https://profile.pic/im.jpg",\n      "lock_settings": {\n        "lock_microphone": false,\n        "lock_webcam": false,\n        "lock_screen_sharing": true,\n        "lock_chat": false,\n        "lock_chat_send_message": false,\n        "lock_chat_file_share": false\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Position"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"root"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The status of the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"root"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Response message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"root"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Join token")))),(0,r.kt)("p",null,"When you'll receive token during that time you can pass that token to plugNmeet-client. If you've setup it with plugNmeet-server then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://Your-Plug-N-Meet-Server.com/?access_token=<TOKEN HERE>\n")),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mynaparrot/plugNmeet-client"},"plugNmeet-client")," build static files in somewhere else then you'll require to pass token like that too. For example you've uploaded build static files inside ",(0,r.kt)("inlineCode",{parentName:"p"},"conference")," directory. In this case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://Your-Domain.com/conference/?access_token=<TOKEN HERE>\n")),(0,r.kt)("h2",{id:"custom-design"},"Custom design"),(0,r.kt)("p",null,"It's possible to add extra query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_design")," with the join link. This way you can use seperate design for indivisual user. The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_design")," will need to be ",(0,r.kt)("strong",{parentName:"p"},"url encoded json value"),". You can view supported parameters from ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/design-customisation#design-parameters"},"design-parameters"),". Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://Your-Domain.com/conference/?access_token=<TOKEN HERE>&custom_design=%7B%22primary_color%22%3A%22%23004D90%22%2C%22secondary_color%22%3A%22%2324AEF7%22%7D\n")))}d.isMDXComponent=!0}}]);