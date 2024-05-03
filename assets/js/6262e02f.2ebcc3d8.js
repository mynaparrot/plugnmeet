"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[656],{5051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(4848),o=t(8453);const s={sidebar_position:1},i="Introduction",c={id:"api/intro",title:"Introduction",description:"Default end point will be your Plug-N-Meet Server URL//plugnmeet.example.com/auth",source:"@site/docs/api/intro.md",sourceDirName:"api",slug:"/api/intro",permalink:"/docs/api/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/mynaparrot/plugNmeet-docs/edit/main/docs/api/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Migration from BigBlueButton",permalink:"/docs/tutorials/migration-from-bbb"},next:{title:"Create room",permalink:"/docs/api/room/create"}},a={},d=[{value:"SDKs",id:"sdks",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["Default end point will be your Plug-N-Meet Server URL: ",(0,r.jsx)(n.code,{children:"https://plugnmeet.example.com/auth"})]}),"\n",(0,r.jsxs)(n.p,{children:["Plug-N-Meet server accept ",(0,r.jsx)(n.code,{children:"json"})," ",(0,r.jsx)(n.strong,{children:"POST request"}),". You'll require to send 2 information in header:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"API-KEY: <Plug-N-Meet Server API Key>\nHASH-SIGNATURE: <hex value of hmac_sha256 using request body & Plug-N-Meet Server API Secret>\n"})}),"\n",(0,r.jsx)(n.p,{children:"You also require to send content type json"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Content-type: application/json\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"PHP"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:'$body = json_encode(array(\n            "room_id" => "room01",\n        ));\n$signature = hash_hmac("sha256", $body, "SECRET");\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"NodeJS"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// using CryptoJS library\nconst body = JSON.stringify({\n    room_id => "room01",\n});\nconst hash = CryptoJS.HmacSHA256(body, "SECRET");\nconst signature = CryptoJS.enc.Hex.stringify(hash);\n'})}),"\n",(0,r.jsx)(n.p,{children:"OR"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { createHmac } from \'crypto\';\n\nconst body = JSON.stringify({\n    room_id => "room01",\n});\nconst signature = createHmac("sha256", "SECRET")\n    .update(body)\n    .digest("hex");\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Go"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'const body = `{"room_id":"room01"}`\nmac := hmac.New(sha256.New, []byte("SECRET"))\nmac.Write([]byte(body))\nsignature := hex.EncodeToString(mac.Sum(nil))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsx)(n.p,{children:"You can use following ready to use SDKs:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/mynaparrot/plugNmeet-sdk-php",children:"PHP"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/mynaparrot/plugNmeet-sdk-js",children:"JavaScript"})," (",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/plugnmeet-sdk-js",children:"NodeJS"})," & ",(0,r.jsx)(n.a,{href:"https://deno.land/x/plugnmeet",children:"Deno"}),")"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);