"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[480],{820:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var s=r(5893),d=r(1151);const n={description:"plugNmeet create room using API",sidebar_position:1},i="Create room",l={id:"api/room/create",title:"Create room",description:"plugNmeet create room using API",source:"@site/docs/api/room/create.md",sourceDirName:"api/room",slug:"/api/room/create",permalink:"/docs/api/room/create",draft:!1,unlisted:!1,editUrl:"https://github.com/mynaparrot/plugNmeet-docs/edit/main/docs/api/room/create.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"plugNmeet create room using API",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/api/intro"},next:{title:"Join room",permalink:"/docs/api/room/join"}},o={},h=[{value:"Request parameters",id:"request-parameters",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Room Features",id:"room-features",level:3},{value:"Recording features",id:"recording-features",level:3},{value:"Chat features",id:"chat-features",level:3},{value:"Shared note pad features",id:"shared-note-pad-features",level:3},{value:"Whiteboard features",id:"whiteboard-features",level:3},{value:"External media player features",id:"external-media-player-features",level:3},{value:"Waiting room features",id:"waiting-room-features",level:3},{value:"Breakout room features",id:"breakout-room-features",level:3},{value:"Display external link features",id:"display-external-link-features",level:3},{value:"Ingress features",id:"ingress-features",level:3},{value:"Speech to text/translation features",id:"speech-to-texttranslation-features",level:3},{value:"End-to-End encryption (E2EE) features",id:"end-to-end-encryption-e2ee-features",level:3},{value:"Default lock settings",id:"default-lock-settings",level:3},{value:"<strong>Example</strong>",id:"example",level:3},{value:"Response",id:"response",level:2},{value:"Room Info",id:"room-info",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-room",children:"Create room"}),"\n",(0,s.jsxs)(t.p,{children:["End point: ",(0,s.jsx)(t.code,{children:"/room/create"})]}),"\n",(0,s.jsx)(t.h2,{id:"request-parameters",children:"Request parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"room_id"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(t.td,{children:"Room Id should be unique for every room/session/meeting"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"max_participants"}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(t.td,{children:"Limit number of participants that can be join in this room."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"empty_timeout"}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,s.jsx)(t.td,{children:"Number of seconds to keep the room open if no one joins"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#metadata",children:"metadata"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"room_title"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Title of the room/meeting"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"welcome_message"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"If you want to show some message at start up."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"webhook_url"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"You can put webhook URL in where plugNmeet will send post request based on various events."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"logout_url"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"You can put logout URL in where plugNmeet will redirect the users after meeting/session ended."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#room-features",children:"room_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Various room features."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#default-lock-settings",children:"default_lock_settings"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Default lock settings"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"extra_data"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"You can store extra data."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"room-features",children:"Room Features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_webcams"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"If you want to enable webcam support."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mute_on_start"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"If you want to mute microphone automatically after share."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_screen_share"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable screen share for the meeting."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_rtmp"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable RTMP for the meeting."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"admin_only_webcams"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"If you want to allow webcams only for admin"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_view_other_webcams"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"If you want to disable to display other users camera except moderator."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_view_other_users_list"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"If you want to disable to display users list except moderator."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"enable_analytics"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["Enable/Disable to create analytics report for the session. Later can ",(0,s.jsx)(t.a,{href:"/docs/api/analytics/fetch",children:"fetch analytics"}),". Default: false"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_virtual_bg"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Enable/disable virtual background option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_raise_hand"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Enable/disable raise hand option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"room_duration"}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"If you want to set fixed room duration. Value should be in minutes. 1 hour = 60 minutes. 0 = unlimited"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#recording-features",children:"recording_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Recording Settings"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#chat-features",children:"chat_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Chat Settings"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#shared-note-pad-features",children:"shared_note_pad_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Shared note pad settings"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#whiteboard-features",children:"whiteboard_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Whiteboard settings"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#external-media-player-features",children:"external_media_player_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"External media player settings"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#waiting-room-features",children:"waiting_room_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Waiting room settings"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#breakout-room-features",children:"breakout_room_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Breakout room settings"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#display-external-link-features",children:"display_external_link_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Display external link settings"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#ingress-features",children:"ingress_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"RTMP ingress feature"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#speech-to-texttranslation-features",children:"speech_to_text_translation_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Speech to text/translation features"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#end-to-end-encryption-e2ee-features",children:"end_to_end_encryption_features"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"End-to-End encryption (E2EE)"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"recording-features",children:"Recording features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_allow"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable recording feature for the meeting."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_allow_cloud"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable cloud recording option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_allow_local"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable local recording option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"enable_auto_cloud_recording"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"If enable then recording will be starting as soon as moderator/admin join the session"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"chat-features",children:"Chat features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_chat"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable chat for the meeting."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_file_upload"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable file upload in chat for the meeting."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"shared-note-pad-features",children:"Shared note pad features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allowed_shared_note_pad"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable shared notepad for the meeting."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"whiteboard-features",children:"Whiteboard features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allowed_whiteboard"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable whiteboard for the meeting."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"preload_file"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"You can preload a remote (http/https) presentation file for the whiteboard. Ensure that it can be fetched directly without being redirected; otherwise, downloading will fail."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"external-media-player-features",children:"External media player features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allowed_external_media_player"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable to allow to play video/audio from external source. Moderator can upload local video/audio too."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"waiting-room-features",children:"Waiting room features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_active"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable if you want to activate wating room feature. User will be in waiting room until moderator allow to join."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"breakout-room-features",children:"Breakout room features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_allow"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable breakout room features."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allowed_number_rooms"}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Number of breakout rooms allowed to create at a same time. Default: 6"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"display-external-link-features",children:"Display external link features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_allow"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Enable or disable to allow to display external links inside a iframe. This feature is helpful if your session to require to display other website, quiz, games etc. The website must be allow to load inside an iframe. Moderator can pass various values like name, userId, role, meetingId etc."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"ingress-features",children:"Ingress features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_allow"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Ingress RTMP streaming right into the session. This capability is really useful if you want to display external video directly streaming in the session."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"speech-to-texttranslation-features",children:"Speech to text/translation features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_allow"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsxs)(t.td,{children:["enable/disable Speech to text feature. This feature will use ",(0,s.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/get-started-text-to-speech?pivots=programming-language-go&tabs=linux%2Cterminal#prerequisites",children:"microsoft azure"})," under the hood. Make sure that you've configured API info correctly."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_allow_translation"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"If you want to enable auto translation feature too."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"end-to-end-encryption-e2ee-features",children:"End-to-End encryption (E2EE) features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_enabled"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsxs)(t.td,{children:["enable/disable E2EE. Supported browsers: ",(0,s.jsx)(t.code,{children:"browser based on Chromium 83+, Google Chrome, Microsoft Edge, Safari."})," ",(0,s.jsx)(t.strong,{children:"Note:"})," Users will be unable to join the session if their browser does not support it."]})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"default-lock-settings",children:"Default lock settings"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lock_microphone"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Lock microphone for users."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lock_webcam"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Lock webcam for users."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lock_screen_sharing"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Lock screen share for users."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lock_chat"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Lock chat for users."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lock_chat_send_message"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Lock send message for users."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lock_chat_file_share"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Lock send file for users."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:(0,s.jsx)(t.strong,{children:"Example"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "room_id": "room01",\n  "metadata": {\n    "room_title": "Test room",\n    "welcome_message": "Welcome to room",\n    "room_features": {\n      "allow_webcams": true,\n      "mute_on_start": false,\n      "allow_screen_share": true,\n      "allow_rtmp": true,\n      "admin_only_webcams": false,\n      "allow_view_other_webcams": true,\n      "allow_view_other_users_list": true,\n      "allow_polls": true,\n      "enable_analytics": true,\n      "room_duration": 0,\n      "recording_features": {\n        "is_allow": true,\n        "is_allow_cloud": true,\n        "is_allow_local": true,\n        "enable_auto_cloud_recording": false\n      },\n      "chat_features": {\n        "allow_chat": true,\n        "allow_file_upload": true\n      },\n      "shared_note_pad_features": {\n        "allowed_shared_note_pad": true\n      },\n      "whiteboard_features": {\n        "allowed_whiteboard": true\n      },\n      "external_media_player_features": {\n        "allowed_external_media_player": true\n      },\n      "waiting_room_features": {\n        "is_active": false\n      },\n      "breakout_room_features": {\n        "is_allow": true,\n        "allowed_number_rooms": 2\n      },\n      "display_external_link_features": {\n        "is_allow": true\n      },\n      "ingress_features": {\n        "is_allow": true\n      },\n      "speech_to_text_translation_features": {\n        "is_allow": true,\n        "is_allow_translation": true\n      },\n      "end_to_end_encryption_features": {\n        "is_enabled": false\n      }\n    },\n    "default_lock_settings": {\n      "lock_microphone": false,\n      "lock_webcam": false,\n      "lock_screen_sharing": true,\n      "lock_whiteboard": true,\n      "lock_shared_notepad": true,\n      "lock_chat": false,\n      "lock_chat_send_message": false,\n      "lock_chat_file_share": false,\n      "lock_private_chat": false\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"status"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"The status of the request"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"msg"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Response message"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#room-info",children:"roomInfo"})}),(0,s.jsxs)(t.td,{children:["object<",(0,s.jsx)(t.a,{href:"#room-info",children:"roomInfo"}),">"]}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"room-info",children:"Room Info"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sid"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Room sid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Room Id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"max_participants"}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsx)(t.td,{children:"Maximum participants for this room"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"empty_timeout"}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsx)(t.td,{children:"Maximum duration before closing empty room"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"creation_time"}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsx)(t.td,{children:"Room creation time in unix time format"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"turn_password"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Turn password"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"enabled_codecs"}),(0,s.jsx)(t.td,{children:"Array"}),(0,s.jsx)(t.td,{children:"Video codecs for this room"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metadata"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Room metadata"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var s=r(7294);const d={},n=s.createContext(d);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);