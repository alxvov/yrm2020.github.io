(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"query",function(){return s});var n=a(0),r=a.n(n),l=a(182),i=a(198);a(178);function c(e){var t=e.data,a=t&&t.site&&t.site.siteMetadata||{},n=t&&t.allTalksJson&&t.allTalksJson.talks||[];return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:a.schedule.title,subtitle:a.schedule.date,bio:a.schedule.description,graphic:r.a.createElement("img",{alt:"Chicago",className:"Visit-HeroGraphic",src:a.schedule.imageUrl}),ctaLabel:"Purchase Tickets",href:a.ticketLink},r.a.createElement("div",null)),r.a.createElement("div",{style:{marginBottom:48}},n.map(function(e){return r.a.createElement("section",{key:e.id,className:"ScheduleRow"},r.a.createElement("span",{className:"ScheduleRow-time"},e.time)," ",e.photoUrl?r.a.createElement("img",{src:e.photoUrl,width:"60",height:"60",className:"ScheduleRow-image"}):r.a.createElement("span",{className:"ScheduleRow-image"}),r.a.createElement("div",null,r.a.createElement("span",{className:"ScheduleRow-name"},e.fullName),r.a.createElement("span",{className:"ScheduleRow-title"},e.talkTitle?e.talkTitle:null)))})))}var s="19859860"},176:function(e,t,a){e.exports=a.p+"static/logo-horizontal-white-43700b0e782a88893f09502233bb0ed2.svg"},177:function(e,t,a){var n;e.exports=(n=a(183))&&n.default||n},178:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(95),a(96);var n=a(0);a(191);var r=function(e){var t,a=e.href,r=e.label,l=e.mode;switch(l){case"bare":t="Button--bare";break;case"solid":t="Button--solid";break;default:t="Button--solid"}var i=a.includes("http"),c=a.includes("mailto"),s="button"===l,o=0;if(i){if(!c&&!s)return n.createElement("a",{className:t,href:a,rel:"nofollow noreferrer",target:"_blank"},r);o=1}else if(c){if(!s)return n.createElement("a",{className:t,href:a},r);o=1}else{if(s)return n.createElement("button",{className:t,type:"submit"},r);o=1}if(1===o)return n.createElement("span",{className:t},r)}},179:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(5),i=a.n(l),c=a(39),s=a.n(c);a.d(t,"a",function(){return s.a});a(177);var o=r.a.createContext({});function C(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(C,{data:t,query:a,render:n||l,staticQueryData:e})})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},180:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(0);a(194);var r=function(e){var t=e.children;return n.createElement("div",{className:"PageContainer"},t)}},181:function(e,t,a){"use strict";var n=a(179).a;a.d(t,"a",function(){return r});var r=n},182:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(189),i=a.n(l),c=a(190),s=a(181);a(176),a(184);var o=function(e){var t=e.width,a=void 0!==t?t:"200",r=e.height,l=void 0!==r?r:"103";return n.createElement("svg",{height:l,width:a,fill:"none",viewBox:"0 0 200 103",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M21.4317 101.474C20.0089 100.676 18.8528 99.5243 17.9635 98.1065C17.1631 96.6886 16.7185 95.0935 16.7185 93.3211C16.7185 91.5488 17.1631 89.9537 17.9635 88.5358C18.7639 87.1179 19.9199 85.9659 21.4317 85.1683C22.9435 84.3708 24.5442 83.9277 26.4117 83.9277C27.7456 83.9277 29.0796 84.1935 30.2356 84.6366C31.3917 85.0797 32.3699 85.7886 33.1703 86.5862L31.9253 87.8268C30.5024 86.409 28.6349 85.6114 26.5006 85.6114C25.0778 85.6114 23.7439 85.9659 22.4989 86.5862C21.3428 87.2065 20.3646 88.1813 19.6531 89.3333C18.9417 90.4854 18.6749 91.8146 18.6749 93.2325C18.6749 94.6504 19.0306 95.9796 19.6531 97.1317C20.3646 98.2837 21.2539 99.1699 22.4989 99.8788C23.6549 100.499 24.9888 100.854 26.5006 100.854C28.7238 100.854 30.5024 100.145 31.9253 98.6382L33.1703 99.8788C32.3699 100.765 31.3917 101.385 30.2356 101.917C29.0796 102.36 27.8346 102.626 26.4117 102.626C24.5442 102.715 22.8546 102.271 21.4317 101.474Z",fill:"white"}),n.createElement("path",{d:"M39.5731 101.467C38.0613 100.669 36.9053 99.5172 36.1049 98.0993C35.3046 96.6814 34.8599 95.0863 34.8599 93.314C34.8599 91.5416 35.3046 89.9465 36.1049 88.5286C36.9053 87.1108 38.0613 85.9587 39.5731 85.1612C41.0849 84.3636 42.6856 83.9205 44.5531 83.9205C46.4206 83.9205 48.0213 84.3636 49.4442 85.1612C50.867 85.9587 52.0231 87.1108 52.9124 88.5286C53.7127 89.9465 54.1574 91.5416 54.1574 93.314C54.1574 95.0863 53.7127 96.6814 52.9124 98.0993C52.112 99.5172 50.956 100.669 49.4442 101.467C48.0213 102.264 46.3317 102.707 44.5531 102.707C42.7745 102.707 41.0849 102.264 39.5731 101.467ZM48.5549 99.9603C49.711 99.34 50.6892 98.3652 51.3117 97.2131C51.9342 96.0611 52.2899 94.7319 52.2899 93.314C52.2899 91.8961 51.9342 90.5668 51.3117 89.4148C50.6892 88.2628 49.711 87.3766 48.5549 86.6677C47.3988 86.0474 46.0649 85.6929 44.642 85.6929C43.2192 85.6929 41.8853 86.0474 40.6403 86.6677C39.3953 87.288 38.506 88.2628 37.8835 89.4148C37.1721 90.5668 36.9053 91.8961 36.9053 93.314C36.9053 94.7319 37.261 96.0611 37.8835 97.2131C38.5949 98.3652 39.4842 99.2513 40.6403 99.9603C41.7963 100.669 43.1303 100.935 44.642 100.935C46.0649 100.935 47.3099 100.669 48.5549 99.9603Z",fill:"white"}),n.createElement("path",{d:"M73.6327 84.1864V102.53H72.032L60.2045 87.6425V102.53H58.2481V84.1864H59.8488L71.6763 99.0741V84.1864H73.6327Z",fill:"white"}),n.createElement("path",{d:"M81.1916 85.8701V93.0481H90.707V94.7318H81.1916V102.53H79.2352V84.1864H91.863V85.8701H81.1916Z",fill:"white"}),n.createElement("path",{d:"M103.868 100.669C102.534 99.34 101.912 97.3018 101.912 94.7319V84.1864H103.868V94.6432C103.868 96.7701 104.313 98.3652 105.291 99.4286C106.269 100.492 107.692 101.024 109.471 101.024C111.338 101.024 112.672 100.492 113.651 99.4286C114.629 98.3652 115.073 96.7701 115.073 94.6432V84.1864H116.941V94.7319C116.941 97.3018 116.318 99.34 114.984 100.669C113.651 101.998 111.783 102.707 109.382 102.707C107.07 102.707 105.202 101.998 103.868 100.669Z",fill:"white"}),n.createElement("path",{d:"M123.699 101.998C122.454 101.555 121.476 101.024 120.765 100.226L121.565 98.7196C122.188 99.34 123.077 99.9603 124.233 100.315C125.3 100.758 126.456 100.935 127.612 100.935C129.302 100.935 130.458 100.669 131.347 100.049C132.148 99.4286 132.592 98.631 132.592 97.7448C132.592 97.0359 132.325 96.4156 131.881 95.9725C131.436 95.5294 130.903 95.1749 130.28 94.9977C129.658 94.7318 128.768 94.466 127.612 94.2001C126.189 93.8457 125.122 93.4912 124.322 93.2254C123.522 92.8709 122.81 92.4278 122.188 91.7189C121.565 91.0985 121.298 90.1237 121.298 89.0603C121.298 88.1742 121.565 87.288 122.01 86.4904C122.543 85.6929 123.255 85.1612 124.233 84.6295C125.211 84.1864 126.545 83.9205 128.057 83.9205C129.124 83.9205 130.102 84.0978 131.169 84.3636C132.148 84.6295 133.037 85.0726 133.748 85.5156L133.126 87.0221C132.325 86.4904 131.525 86.136 130.636 85.8701C129.747 85.6043 128.857 85.5156 128.057 85.5156C126.456 85.5156 125.211 85.8701 124.411 86.4904C123.61 87.1108 123.166 87.9083 123.166 88.8831C123.166 89.592 123.433 90.2124 123.877 90.6555C124.322 91.0985 124.855 91.453 125.567 91.7189C126.278 91.9847 127.168 92.2506 128.324 92.5164C129.658 92.8709 130.725 93.1367 131.614 93.4912C132.414 93.8457 133.126 94.2888 133.748 94.9977C134.371 95.618 134.638 96.5042 134.638 97.6562C134.638 98.5424 134.371 99.4286 133.926 100.226C133.393 101.024 132.681 101.555 131.614 101.998C130.547 102.442 129.302 102.707 127.79 102.707C126.278 102.707 124.944 102.442 123.699 101.998Z",fill:"white"}),n.createElement("path",{d:"M156.692 99.0741V102.53H142.73V99.783L149.844 93.1367C150.556 92.4278 151.089 91.8075 151.356 91.2758C151.623 90.7441 151.712 90.2124 151.712 89.7693C151.712 89.0603 151.445 88.44 151 88.0855C150.556 87.7311 149.755 87.4652 148.777 87.4652C147.977 87.4652 147.265 87.6425 146.554 87.9083C145.931 88.1742 145.398 88.7059 144.953 89.3262L141.841 87.3766C142.552 86.3132 143.53 85.5156 144.775 84.8953C146.02 84.275 147.443 84.0092 149.133 84.0092C150.467 84.0092 151.712 84.275 152.69 84.7181C153.757 85.1612 154.558 85.7815 155.091 86.5791C155.625 87.3766 155.98 88.3514 155.98 89.4148C155.98 90.3896 155.803 91.3644 155.358 92.2506C154.913 93.1367 154.113 94.1115 152.868 95.2636L148.599 99.2513H156.692V99.0741Z",fill:"white"}),n.createElement("path",{d:"M161.85 101.733C160.694 101.024 159.715 99.8717 159.004 98.4538C158.293 97.0359 158.026 95.3522 158.026 93.314C158.026 91.3644 158.382 89.6807 159.004 88.1742C159.715 86.7563 160.605 85.6929 161.85 84.8954C163.006 84.1864 164.429 83.7433 165.94 83.7433C167.452 83.7433 168.786 84.0978 170.031 84.8954C171.187 85.6043 172.165 86.7563 172.877 88.1742C173.588 89.5921 173.855 91.2758 173.855 93.314C173.855 95.2636 173.499 96.9473 172.877 98.4538C172.165 99.8717 171.276 100.935 170.031 101.733C168.875 102.442 167.452 102.885 165.94 102.885C164.34 102.885 163.006 102.442 161.85 101.733ZM168.519 97.8335C169.142 96.8587 169.498 95.3522 169.498 93.4026C169.498 91.3644 169.142 89.9465 168.519 88.9718C167.897 87.997 167.008 87.5539 165.851 87.5539C164.784 87.5539 163.895 87.997 163.273 88.9718C162.65 89.9465 162.294 91.453 162.294 93.4026C162.294 95.4408 162.65 96.8587 163.273 97.8335C163.895 98.8083 164.784 99.2513 165.851 99.2513C167.008 99.2513 167.897 98.8083 168.519 97.8335Z",fill:"white"}),n.createElement("path",{d:"M182.481 84.1864V102.53H178.213V87.5539H174.566V84.1864H182.481Z",fill:"white"}),n.createElement("path",{d:"M197.777 86.2246C199.2 87.8197 200 90.0352 200 92.9595C200 94.9977 199.644 96.8587 198.844 98.2766C198.044 99.783 196.976 100.846 195.554 101.644C194.131 102.442 192.53 102.796 190.662 102.796C189.684 102.796 188.706 102.707 187.817 102.442C186.927 102.264 186.127 101.91 185.505 101.467L187.105 98.3652C187.995 98.9855 189.151 99.2513 190.574 99.2513C192.174 99.2513 193.33 98.8083 194.309 97.8335C195.198 96.9473 195.731 95.618 195.82 93.8457C194.753 94.9091 193.152 95.5294 191.285 95.5294C190.129 95.5294 189.062 95.2636 188.084 94.8205C187.105 94.3774 186.394 93.6685 185.771 92.7823C185.238 91.8961 184.971 90.9213 184.971 89.7693C184.971 88.5287 185.238 87.4653 185.86 86.5791C186.483 85.6929 187.283 84.984 188.35 84.4523C189.417 83.9206 190.574 83.7433 191.907 83.7433C194.309 83.832 196.354 84.6295 197.777 86.2246ZM194.397 91.7189C195.02 91.1872 195.287 90.5669 195.287 89.7693C195.287 88.9718 195.02 88.3514 194.397 87.8197C193.864 87.288 193.064 87.0222 192.085 87.0222C191.196 87.0222 190.396 87.288 189.862 87.7311C189.329 88.2628 188.973 88.8831 188.973 89.6807C188.973 90.4782 189.24 91.1872 189.862 91.7189C190.396 92.2506 191.196 92.4278 192.174 92.4278C192.975 92.5164 193.775 92.2506 194.397 91.7189Z",fill:"white"}),n.createElement("path",{d:"M0.266785 0.265869H74.6109V74.3499H0.266785V0.265869Z",fill:"black"}),n.createElement("path",{d:"M0.266785 0.265869H74.6109V74.3499H0.266785V0.265869Z",fill:"#DD4B39"}),n.createElement("path",{d:"M99.422 67.7922L97.4655 62.741H85.1045L83.1481 67.7922H75.5002L87.6834 39.4347H95.3312L107.248 67.7922H99.422ZM87.4166 57.1581H95.3312L91.4184 47.0558L87.4166 57.1581ZM130.725 48.2078C127.701 46.5241 123.877 45.1948 121.565 45.1948C119.787 45.1948 118.63 45.8151 118.63 47.1444C118.63 51.8411 133.57 49.1826 133.57 59.3736C133.57 65.1337 128.413 68.1467 122.099 68.1467C117.385 68.1467 112.406 66.3743 109.026 63.6272L111.872 57.8671C114.807 60.3484 119.253 62.1207 122.188 62.1207C124.411 62.1207 125.745 61.3231 125.745 59.8166C125.745 55.0313 110.805 57.9557 110.805 47.8533C110.805 42.5363 115.34 39.1688 122.188 39.1688C126.367 39.1688 130.636 40.4981 133.57 42.359L130.725 48.2078ZM152.245 39.2574C161.049 39.2574 167.63 45.372 167.63 53.6134C167.63 61.9435 161.049 68.1467 152.245 68.1467C143.442 68.1467 136.861 61.9435 136.861 53.6134C136.861 45.372 143.442 39.2574 152.245 39.2574ZM152.334 45.5493C148.066 45.5493 144.509 49.0053 144.509 53.6134C144.509 58.2215 148.155 61.7662 152.334 61.7662C156.603 61.7662 159.982 58.2215 159.982 53.6134C159.982 49.0053 156.603 45.5493 152.334 45.5493ZM172.699 39.4347H179.28L192.174 56.5378V39.4347H199.111V67.7922H192.619L179.724 50.7777V67.7922H172.788V39.4347H172.699Z",fill:"white"}),n.createElement("path",{d:"M44.3753 67.7922H35.9271L31.7475 59.9053H26.2339V67.7922H18.7639V39.4347H31.5696C39.1285 39.4347 43.3971 43.068 43.3971 49.3598C43.3971 53.6135 41.6185 56.8037 38.3282 58.4874L44.3753 67.7922ZM26.3228 45.372V54.0565H31.7475C34.771 54.0565 36.4607 52.55 36.4607 49.6257C36.4607 46.7899 34.6821 45.372 31.7475 45.372H26.3228ZM48.2882 39.4347H70.6981V45.372H55.6692V50.6891H69.1863V56.5378H55.6692V61.8549H71.1428V67.7922H48.2882V39.4347Z",fill:"white"}),n.createElement("path",{d:"M44.3753 67.7922H35.9271L31.7475 59.9053H26.2339V67.7922H18.7639V39.4347H31.5696C39.1285 39.4347 43.3971 43.068 43.3971 49.3598C43.3971 53.6135 41.6185 56.8037 38.3282 58.4874L44.3753 67.7922ZM26.3228 45.372V54.0565H31.7475C34.771 54.0565 36.4607 52.55 36.4607 49.6257C36.4607 46.7899 34.6821 45.372 31.7475 45.372H26.3228ZM48.2882 39.4347H70.6981V45.372H55.6692V50.6891H69.1863V56.5378H55.6692V61.8549H71.1428V67.7922H48.2882V39.4347Z",fill:"white"}))},C=a(178);a(192);var u=a(176);function m(e){var t=e.label,a=e.to_;return n.createElement(s.a,{className:"navbar-item",to:a,label:t,children:t})}var d=function(e){var t=e.isMobile,a=n.useState(function(){return!1}),r=a[1],l=a[0],i=n.useState(function(){return""}),s=i[1],d=i[0];return n.createElement("nav",{"aria-label":"main-navigation",className:"navbar",role:"navigation"},n.createElement("div",{className:"container"},n.createElement("div",{className:"navbar-brand"},n.createElement("a",{href:"/"},t?n.createElement("img",{className:"navbar-logo--small",height:"60",src:u,width:"240"}):n.createElement(o,{})),n.createElement("div",{className:"navbar-burger burger"+d,onClick:function(e){var t=!l;return c.a(r,function(e){return t}),c.a(s,function(e){return t?"is-active":""})}},n.createElement("span",void 0),n.createElement("span",void 0),n.createElement("span",void 0))),n.createElement("div",{className:"navbar-menu"+d,id:"navMenu"},n.createElement("div",{className:"navbar-end has-text-centered"},n.createElement(m,{label:"Workshops",to_:"/workshops"}),n.createElement(m,{label:"Speakers",to_:"/speakers"}),n.createElement(m,{label:"Sponsors",to_:"/sponsors"}),n.createElement(m,{label:"Schedule",to_:"/schedule"}),n.createElement(m,{label:"Visit",to_:"/visit"}),n.createElement(m,{label:"Contact",to_:"/contact"}),n.createElement("div",{className:"navbar-item"},n.createElement(C.a,{href:"https://ti.to/chicagojs/reasonconf-us-2019",label:"Tickets",mode:"solid"}))))))};a(193);var h=a(176);var f=function(e){return n.createElement("footer",{className:"Footer"},n.createElement("img",{src:h,width:"200"}))},E=a(180),p=a(185),v=function(){return p.data.site.siteMetadata};a(195),a(196);function H(e){var t=e.children,a=v(),n=a.title,l=a.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:l}),r.a.createElement("meta",{property:"og:type",content:"business.business"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:url",content:"/"}),r.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),r.a.createElement(d,null),r.a.createElement("div",{className:"Site-content"},r.a.createElement(E.a,null,t)),r.a.createElement(f,null))}a.d(t,"a",function(){return H})},183:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),l=a(5),i=a.n(l),c=a(64),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},184:function(e,t,a){e.exports=a.p+"static/logo-103769842bfaf7a103f753f10b9a2d77.svg"},185:function(e){e.exports={data:{site:{siteMetadata:{title:"ETSF YRM 2020",description:"17th ETSF Young Researchers' Meeting 2020"}}}}},198:function(e,t,a){"use strict";var n=a(0),r=a(178);a(200);var l=function(e){var t=e.title,a=e.subtitle,l=e.bio,i=e.ctaLabel,c=e.href,s=e.children;return n.createElement("div",{className:"HeroHeader"},n.createElement("h1",{className:"HeroHeader-title"},t),n.createElement("span",{className:"HeroHeader-subtitle"},a),n.createElement("p",{className:"HeroHeader-bio"},l),n.createElement("div",{className:"HeroHeader-linkSection"},n.createElement(r.a,{href:c,label:i,mode:"solid"}),s))};a.d(t,"a",function(){return i}),a(202);var i=function(e){var t=e.title,a=e.subtitle,r=e.bio,i=e.ctaLabel,c=e.href,s=e.graphic,o=e.children;return n.createElement("div",{className:"Hero"},n.createElement(l,{title:t,subtitle:a,bio:r,ctaLabel:i,href:c,children:o}),s)}}}]);
//# sourceMappingURL=component---src-pages-schedule-index-js-964714bba48b9b01e84c.js.map