"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={description:"plugNmeet user guide for Learning Tools Interoperability (LTI)",sidebar_position:7},a="LTI",l={unversionedId:"user-guide/lti",id:"user-guide/lti",title:"LTI",description:"plugNmeet user guide for Learning Tools Interoperability (LTI)",source:"@site/docs/user-guide/lti.md",sourceDirName:"user-guide",slug:"/user-guide/lti",permalink:"/docs/user-guide/lti",draft:!1,editUrl:"https://github.com/mynaparrot/plugNmeet-docs/docs/user-guide/lti.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"plugNmeet user guide for Learning Tools Interoperability (LTI)",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Joomla Integration",permalink:"/docs/user-guide/joomla-integration"},next:{title:"Introduction",permalink:"/docs/developer-guide/intro"}},s={},u=[{value:"<strong>Moderator/Admin view</strong>",id:"moderatoradmin-view",level:5},{value:"<strong>Student/Attendee view</strong>",id:"studentattendee-view",level:5}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lti"},"LTI"),(0,o.kt)("p",null,"plugNmeet support LTI ",(0,o.kt)("strong",{parentName:"p"},"v1.0/1.1")," as Provider. Users can join/manage sessions and download recordings from any LTI supported platform without changing any code."),(0,o.kt)("p",null,"Following information will require:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Launch URL: https://your-plug-n-meet.com/lti/v1\nConsumer key: plug-n-meet API Key\nShared secret: plug-n-meet API Secret\n")),(0,o.kt)("p",null,"For demo you can try following information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Launch URL: https://demo.plugnmeet.com/lti/v1\nConsumer key: plugnmeet\nShared secret: zumyyYWqv7KR2kUqvYdq4z4sXg7XTBD2ljT6\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Allowing ",(0,o.kt)("inlineCode",{parentName:"p"},"launcher's name")," is recommended; otherwise, the user will see an empty name."),(0,o.kt)("h5",{id:"moderatoradmin-view"},(0,o.kt)("strong",{parentName:"h5"},"Moderator/Admin view")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"lti1.png",src:n(3030).Z,width:"2146",height:"694"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"lti2.png",src:n(3660).Z,width:"2188",height:"728"})),(0,o.kt)("h5",{id:"studentattendee-view"},(0,o.kt)("strong",{parentName:"h5"},"Student/Attendee view")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"lti3.png",src:n(2644).Z,width:"2370",height:"664"})))}d.isMDXComponent=!0},3030:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lti1-b7a4d0e72148930825ae2badeffd07af.png"},3660:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lti2-16d12519c240deb8e6bcd1dd39438e40.png"},2644:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lti3-bfcb2983b668590ef6fd26f282745493.png"}}]);