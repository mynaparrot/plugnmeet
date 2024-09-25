"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[230],{7025:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=s(6070),n=s(5396);const d={sidebar_position:6},i="Fetch past rooms info",l={id:"api/room/fetch-past",title:"Fetch past rooms info",description:"End point: /room/fetchPastRooms",source:"@site/docs/api/room/fetch-past.md",sourceDirName:"api/room",slug:"/api/room/fetch-past",permalink:"/docs/api/room/fetch-past",draft:!1,unlisted:!1,editUrl:"https://github.com/mynaparrot/plugNmeet-docs/edit/main/docs/api/room/fetch-past.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Get active rooms info",permalink:"/docs/api/room/rooms-info"},next:{title:"End room",permalink:"/docs/api/room/end"}},o={},c=[{value:"Response",id:"response",level:2},{value:"Result",id:"result",level:3},{value:"Past Room info",id:"past-room-info",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"fetch-past-rooms-info",children:"Fetch past rooms info"})}),"\n",(0,r.jsxs)(t.p,{children:["End point: ",(0,r.jsx)(t.code,{children:"/room/fetchPastRooms"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"room_ids"}),(0,r.jsx)(t.td,{children:"array"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Array of room Ids'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"from"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"From point. Default 0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Limit of records. Default 20"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"order_by"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Ordering DESC or ASC. Default: DESC"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "room_ids": ["room01"],\n  "from": 0,\n  "limit": 20,\n  "order_by": "DESC"\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Position"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"status"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"root"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The status of the request"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"msg"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"root"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Response message"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.a,{href:"#result",children:"result"})}),(0,r.jsxs)(t.td,{children:["object<",(0,r.jsx)(t.a,{href:"#result",children:"result"}),">"]}),(0,r.jsx)(t.td,{children:"root"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"result",children:"Result"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"total_rooms"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"Total number of rooms for the query"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"from"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"Requested from point"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"Requested limit of records"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"order_by"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Record order"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rooms_list"}),(0,r.jsxs)(t.td,{children:["Array<",(0,r.jsx)(t.a,{href:"#past-room-info",children:"past-room-info"}),">"]}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"past-room-info",children:"Past Room info"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"room_title"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Room title"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"room_id"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Room Id"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"room_sid"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Room Sid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"joined_participants"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"Number of  participants joined (may not be accurate, use analytics to get more details)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"webhook_url"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Webhook url"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"created"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Room created time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ended"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Room ended time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"analytics_file_id"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Analytics file id (if any)"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5396:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var r=s(758);const n={},d=r.createContext(n);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);