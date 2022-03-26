"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[658],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(r),f=a,s=m["".concat(p,".").concat(f)]||m[f]||d[f]||o;return r?n.createElement(s,i(i({ref:e},u),{},{components:r})):n.createElement(s,i({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7175:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:8},p="Fetch recordings",c={unversionedId:"api/fetch_recording",id:"api/fetch_recording",title:"Fetch recordings",description:"End point: /recording/fetch",source:"@site/docs/api/fetch_recording.md",sourceDirName:"api",slug:"/api/fetch_recording",permalink:"/docs/api/fetch_recording",editUrl:"https://github.com/mynaparrot/plugNmeet-docs/docs/api/fetch_recording.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"End room",permalink:"/docs/api/end_room"},next:{title:"Download recording (token)",permalink:"/docs/api/download_recording"}},u={},d=[],m={toc:d};function f(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fetch-recordings"},"Fetch recordings"),(0,o.kt)("p",null,"End point: ",(0,o.kt)("inlineCode",{parentName:"p"},"/recording/fetch")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Position"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"room_id"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"root"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Room Id")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"from"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"root"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"From point. Default 0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"limit"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"root"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Limit of records. Default 20")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"order_by"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"root"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Ordering. Default: DESC")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "room_ids": "room01",\n  "from": 0,\n  "limit": 20,\n  "order_by": "DESC"\n}\n')))}f.isMDXComponent=!0}}]);