"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[56],{4826:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var r=s(6070),i=s(5396);const c={description:"plugNmeet interface design customisation using external CSS",sidebar_position:3},a="Design Customisation",t={id:"developer-guide/design-customisation",title:"Design Customisation",description:"plugNmeet interface design customisation using external CSS",source:"@site/docs/developer-guide/design-customisation.md",sourceDirName:"developer-guide",slug:"/developer-guide/design-customisation",permalink:"/docs/developer-guide/design-customisation",draft:!1,unlisted:!1,editUrl:"https://github.com/mynaparrot/plugNmeet-docs/edit/main/docs/developer-guide/design-customisation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"plugNmeet interface design customisation using external CSS",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting up for development",permalink:"/docs/developer-guide/setup-development"},next:{title:"Scalable/Distributed setup",permalink:"/docs/developer-guide/scalable-setup"}},d={},o=[{value:"Using config.js",id:"using-configjs",level:2},{value:"Design parameters",id:"design-parameters",level:2},{value:"Global Changes using CSS",id:"global-changes-using-css",level:2},{value:"Header",id:"header",level:2},{value:"Participants",id:"participants",level:2},{value:"Messages",id:"messages",level:2},{value:"Start-Up Page",id:"start-up-page",level:2},{value:"Error Page",id:"error-page",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"design-customisation",children:"Design Customisation"})}),"\n",(0,r.jsx)(n.h2,{id:"using-configjs",children:"Using config.js"}),"\n",(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsx)(n.code,{children:"config.js"})," file which is located under ",(0,r.jsx)(n.code,{children:"dist/assets/config.js"})," of ",(0,r.jsx)(n.code,{children:"plugNmeet-client"}),". You'll notice one field ",(0,r.jsx)(n.code,{children:"window.DESIGN_CUSTOMIZATION"})," which accept JSON value like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'window.DESIGN_CUSTOMIZATION = `{\n  "primary_color": "#004D90",\n  "secondary_color": "#24AEF7",\n  "background_color": "#0b7db4",\n  "background_image": "https:\\/\\/mydomain.com\\/custom_bg.png",\n  "header_bg_color": "#45b3ec",\n  "footer_bg_color": "#45b3ec",\n  "left_side_bg_color": "#04a2f3",\n  "right_side_bg_color": "#04a2f3",\n  "custom_css_url": "https:\\/\\/mydomain.com\\/plugNmeet_desing.css"\n}`;\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can use custom value for any or all of above options. You can also pass the above JSON format by URL too. In that case you'll require to use ",(0,r.jsx)(n.code,{children:"custom_design"})," as URL parameter."]}),"\n",(0,r.jsx)(n.h2,{id:"design-parameters",children:"Design parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"primary_color"}),(0,r.jsx)(n.td,{children:"The primary color code in hex format"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secondary_color"}),(0,r.jsx)(n.td,{children:"The secondary color code in hex format"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"background_color"}),(0,r.jsx)(n.td,{children:"If you want to change default background color of room then you can supply color code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"background_image"}),(0,r.jsxs)(n.td,{children:["You can add custom background image. The link will require to direct https link. If you use value for ",(0,r.jsx)(n.code,{children:"background_image"})," then ",(0,r.jsx)(n.code,{children:"background_color"})," value will be ignore."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"header_bg_color"}),(0,r.jsx)(n.td,{children:"Header background color"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"footer_bg_color"}),(0,r.jsx)(n.td,{children:"Footer background color"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"left_side_bg_color"}),(0,r.jsx)(n.td,{children:"Left side panel's background color"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"right_side_bg_color"}),(0,r.jsx)(n.td,{children:"Right side panel's background color"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"custom_css_url"}),(0,r.jsx)(n.td,{children:"You also can use your own custom CSS file for further advance customization. The link should be direct https link"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"global-changes-using-css",children:"Global Changes using CSS"}),"\n",(0,r.jsx)(n.p,{children:"Primary Color"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".primaryColor {\n    color: #004D90;\n}\n.text-primaryColor {\n    color: #004D90;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"brand-color1-min.png",src:s(4300).A+"",width:"1056",height:"532"})}),"\n",(0,r.jsx)(n.p,{children:"Secondary Color"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".secondaryColor {\n    color: #24AEF7;\n}\n.text-secondaryColor {\n    color: #24AEF7;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"brand-color2-min.png",src:s(3631).A+"",width:"1054",height:"528"})}),"\n",(0,r.jsx)(n.p,{children:"Primary Background"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".bg-primaryColor {\n    background: #004D90;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"bg-brand1.png",src:s(3187).A+"",width:"1296",height:"701"})}),"\n",(0,r.jsx)(n.p,{children:"Secondary Background Color"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".bg-secondaryColor {\n    background: #24AEF7;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"bg-brand1.png",src:s(6328).A+"",width:"1311",height:"705"})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.p,{children:"For your need, You can change header Background, Logo, Color etc."}),"\n",(0,r.jsxs)(n.p,{children:["To change ",(0,r.jsx)(n.strong,{children:"Header Background Color"})," style use this class: see screenshot below."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"header#main-header {\n  background-color: azure;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"HeaderBG.png",src:s(3979).A+"",width:"1919",height:"693"})}),"\n",(0,r.jsx)("div",{style:{marginBottom:"100px"}}),"\n",(0,r.jsxs)(n.p,{children:["Change ",(0,r.jsx)(n.strong,{children:"Logo"})," using this class name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".header-logo {\n    background-image: url(./assets/imgs/app-banner.jpg) !important;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"HeaderLOGO.png",src:s(6403).A+"",width:"1913",height:"676"})}),"\n",(0,r.jsx)("div",{style:{marginBottom:"100px"}}),"\n",(0,r.jsxs)(n.p,{children:["Change ",(0,r.jsx)(n.strong,{children:"Header Start and End Shape"})," style using these class:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".header-before-start {\n    background-image: url(./assets/imgs/app-banner.jpg) !important;\n}\n.header-before-end {\n    background-image: url(./assets/imgs/app-banner.jpg) !important;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"HeaderShape.png",src:s(3195).A+"",width:"1899",height:"739"})}),"\n",(0,r.jsx)("div",{style:{marginBottom:"100px"}}),"\n",(0,r.jsxs)(n.p,{children:["Change ",(0,r.jsx)(n.strong,{children:"Header Title"})," style using these class:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"h2.header-title {\n    color: blue;\n    font-size: 20px;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"HeaderTitle.png",src:s(7846).A+"",width:"1906",height:"794"})}),"\n",(0,r.jsx)(n.h2,{id:"participants",children:"Participants"}),"\n",(0,r.jsxs)(n.p,{children:["You can change ",(0,r.jsx)(n.strong,{children:"participants Background, width, padding"})," etc. Style Using this class name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".participants-wrapper {\n    background: #fff;\n    width: 300px;\n    padding: 14px;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"participants-min.png",src:s(840).A+"",width:"1045",height:"841"})}),"\n",(0,r.jsxs)(n.p,{children:["You can change ",(0,r.jsx)(n.strong,{children:"participants Headline"})," style using this class name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".participants-wrapper .top p {\n    font-size: 20px;\n    color: grey;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"participants-headline-min.png",src:s(7069).A+"",width:"879",height:"801"})}),"\n",(0,r.jsxs)(n.p,{children:["You can change ",(0,r.jsx)(n.strong,{children:"participant name"})," style using this class name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".all-participants-wrap p {\n    font-size: 18px;\n    color: grey;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"participants-name-min.png",src:s(4204).A+"",width:"456",height:"643"})}),"\n",(0,r.jsxs)(n.p,{children:["You can change ",(0,r.jsx)(n.strong,{children:"participant thumb"})," style using this class name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".all-participants-wrap .thumb {\n    font-size: 14px;\n    color: grey;\n    background-color: antiquewhite;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"participants-thumb-min.png",src:s(1159).A+"",width:"462",height:"688"})}),"\n",(0,r.jsx)(n.h2,{id:"messages",children:"Messages"}),"\n",(0,r.jsxs)(n.p,{children:["You can change ",(0,r.jsx)(n.strong,{children:"Messages Background, width, padding"})," etc. Style Using this class name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".MessageModule-wrapper {\n    background: #fff;\n    width: 300px;\n    padding: 14px;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"messages.png",src:s(4013).A+"",width:"821",height:"932"})}),"\n",(0,r.jsx)(n.h2,{id:"start-up-page",children:"Start-Up Page"}),"\n",(0,r.jsxs)(n.p,{children:["You can change ",(0,r.jsx)(n.strong,{children:"Start-Up page"})," style using this class name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"#startupJoinModal {\n    background-color: aqua;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"startup-page.png",src:s(9656).A+"",width:"1298",height:"678"})}),"\n",(0,r.jsx)(n.h2,{id:"error-page",children:"Error Page"}),"\n",(0,r.jsxs)(n.p,{children:["You can change ",(0,r.jsx)(n.strong,{children:"Error Page"})," style using this class name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'.error-app-bg {\n    background-image: url("./assets/imgs/header-before2.png") !important;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".error-app-bg {\n    background: aliceblue !important;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"error-page.png",src:s(871).A+"",width:"1298",height:"666"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3979:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/HeaderBG-7d106985a8d4b95ac7af238f4cd96d81.png"},6403:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/HeaderLOGO-16f7a5b6e9248b38b2f9656e2a53c04a.png"},3195:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/HeaderShape-f5f7512bc8e893dea763649601ec331c.png"},7846:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/HeaderTitle-6fcc5502702bdcf4060c2a02b88f6110.png"},3187:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/bg-brand1-1c51ceaf7ec85599a109812eb8b21908.png"},6328:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/bg-brand2-1d1e629a18f9f6878bed6198905a840e.png"},4300:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/brand-color1-min-8c54ee5b7bd46cc86101019491450d98.png"},3631:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/brand-color2-min-15992e66f91ff5d085e61336ce48acbd.png"},871:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/error-page-7afc5e1910e3f9908ffc4257495336c6.png"},4013:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/messages-640d77e8c7c7dfa20e6abf17f4ed5868.png"},7069:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/participants-headline-min-81b5591abe1d2571d50785f2a1d17f78.png"},840:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/participants-min-c5f8e11d61cb6ba13e0627969e983f64.png"},4204:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/participants-name-min-0e7ccf5b381f3024a7c2df2969e55ea5.png"},1159:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/participants-thumb-min-e2ecf6175bba4d2ff769017d6dc3b6c6.png"},9656:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/startup-page-cc635d2fca1c234abc387053aeb03595.png"},5396:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>t});var r=s(758);const i={},c=r.createContext(i);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);