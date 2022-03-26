"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[817],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=m(n),k=a,c=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(c,o(o({ref:e},u),{},{components:n})):r.createElement(c,o({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},767:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:3},p="Join room",m={unversionedId:"api/join_room",id:"api/join_room",title:"Join room",description:"End point: /room/getJoinToken",source:"@site/docs/api/join_room.md",sourceDirName:"api",slug:"/api/join_room",permalink:"/docs/api/join_room",editUrl:"https://github.com/mynaparrot/plugNmeet-docs/docs/api/join_room.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create room",permalink:"/docs/api/create_room"},next:{title:"Room Status (active/inactive)",permalink:"/docs/api/is_room_active"}},u={},d=[],s={toc:d};function k(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"join-room"},"Join room"),(0,l.kt)("p",null,"End point: ",(0,l.kt)("inlineCode",{parentName:"p"},"/room/getJoinToken")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Position"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"room_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Room Id that you created before to join.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user_info"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"user_info"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"User name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"user_info"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"User unique ID. Should be unquie for every user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_admin"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"user_info"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"If true then user will be treated as an admin for this room.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"user_info"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"If true then user will be invisible in the room.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user_metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"user_info"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profile_pic"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"user_metadata"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"If you want to set user's avatar. Should be https URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock_settings"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"user_metadata"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock_microphone"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"lock_settings"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Lock microphone for users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock_webcam"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"lock_settings"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Lock webcam for users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock_screen_sharing"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"lock_settings"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Lock screen share for users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock_chat"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"lock_settings"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Lock chat for users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock_chat_send_message"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"lock_settings"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Lock send message for users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock_chat_file_share"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"lock_settings"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Lock send file for users.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "room_id": "room01",\n  "user_info": {\n    "name": "Your name",\n    "user_id": "Your-Unique-User-Id",\n    "is_admin": true,\n    "is_hidden": false,\n    "user_metadata": {\n      "profile_pic": "https://profile.pic/im.jpg",\n      "lock_settings": {\n        "lock_microphone": false,\n        "lock_webcam": false,\n        "lock_screen_sharing": true,\n        "lock_chat": false,\n        "lock_chat_send_message": false,\n        "lock_chat_file_share": false\n      }\n    }\n  }\n}\n')))}k.isMDXComponent=!0}}]);