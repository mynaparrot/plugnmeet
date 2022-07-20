"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[217],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,s(s({ref:e},u),{},{components:n})):a.createElement(f,s({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9803:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},s="Installation",i={unversionedId:"installation",id:"installation",title:"Installation",description:"Using docker you can install plugNmeet into any platform. We've created an easy to install script which can be used to install all the necessary components in few minutes. Please check plugNmeet-install repo.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:"https://github.com/mynaparrot/plugNmeet-docs/docs/installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Ports & firewall",permalink:"/docs/firewall"},next:{title:"Overview",permalink:"/docs/user-guide/overview"}},l={},p=[{value:"Requirements (using automatic script)",id:"requirements-using-automatic-script",level:2},{value:"Install (using automatic script)",id:"install-using-automatic-script",level:2},{value:"Fonts installation (optional)",id:"fonts-installation-optional",level:2},{value:"Update",id:"update",level:2}],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker")," you can install plugNmeet into any platform. We've created an easy to install script which can be used to install all the necessary components in few minutes. Please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mynaparrot/plugNmeet-install"},"plugNmeet-install")," repo."),(0,r.kt)("h2",{id:"requirements-using-automatic-script"},"Requirements (using automatic script)"),(0,r.kt)("p",null,"You'll need a clean ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu or Debian")," server with a ",(0,r.kt)("strong",{parentName:"p"},"public IP address"),". If your infrastructure is protected by a ",(0,r.kt)("strong",{parentName:"p"},"firewall"),", please first ",(0,r.kt)("a",{parentName:"p",href:"/docs/firewall"},"configure ports & firewall")," before proceeding."),(0,r.kt)("p",null,"Make sure your Ubuntu/Debian server does not come pre-installed with apache or nginx, or else the installation will fail."),(0,r.kt)("p",null,"You'll need 2 subdomains that point to the public IP address of this Ubuntu/Debian server.\nExample: ",(0,r.kt)("inlineCode",{parentName:"p"},"plugnmeet.example.com, turn.example.com"),". A valid email address is also required to\ngenerate a ",(0,r.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," SSL certificate."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))," If DNS fails for those three domains, the installation will be aborted."),(0,r.kt)("h2",{id:"install-using-automatic-script"},"Install (using automatic script)"),(0,r.kt)("p",null,"Using SSH, connect to your Ubuntu/Debian server. Download and run the installation script as the root user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wget https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/install.sh\nsudo bash install.sh\n\nOR\n\nsudo su -c "bash <(wget -qO- https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/install.sh)" root\n')),(0,r.kt)("p",null,"Now, follow the steps in terminal. It will ask you to enter information when necessary. You'll receive the relevant\ninformation at the end of the installation."),(0,r.kt)("p",null,"To manage services:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# to start\nsystemctl start plugnmeet\nsystemctl start plugnmeet-recorder\n\n# to restart\nsystemctl restart plugnmeet\nsystemctl restart plugnmeet-recorder\n\n# to stop\nsystemctl stop plugnmeet\nsystemctl stop plugnmeet-recorder\n")),(0,r.kt)("h2",{id:"fonts-installation-optional"},"Fonts installation (optional)"),(0,r.kt)("p",null,"When exporting or importing Microsoft Word files that contain characters other than English, you may run into issues because of font missing. You may install additional fonts in the Ubuntu/Debian server using the commands below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt update && sudo apt -y install --no-install-recommends \\\nculmus \\\nfonts-beng \\\nfonts-hosny-amiri \\\nfonts-lklug-sinhala \\\nfonts-lohit-guru \\\nfonts-lohit-knda \\\nfonts-samyak-gujr \\\nfonts-samyak-mlym \\\nfonts-samyak-taml \\\nfonts-sarai \\\nfonts-sil-abyssinica \\\nfonts-sil-padauk \\\nfonts-telu \\\nfonts-thai-tlwg \\\nttf-wqy-zenhei \\\nfonts-arphic-ukai \\\nfonts-arphic-uming \\\nfonts-ipafont-mincho \\\nfonts-ipafont-gothic \\\nfonts-unfonts-core \\\nttf-mscorefonts-installer\n")),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("p",null,"To update you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"update.sh")," script. This will update all the docker images, client & recorder (if installed)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wget https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/update.sh\nsudo bash update.sh\n\nOR\n\nsudo su -c "bash <(wget -qO- https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/update.sh)" root\n')))}c.isMDXComponent=!0}}]);