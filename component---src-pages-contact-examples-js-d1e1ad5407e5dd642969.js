(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(8),r=a.n(n),l=a(0),c=a.n(l),i=a(39),o=a.n(i),s=a(184),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(s.a,null,c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Hi people"),c.a.createElement("p",null,"This is an example site integrating Netlify’s form handling with Gatsby"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.a,{to:"/contact"},"Basic contact form")),c.a.createElement("li",null,c.a.createElement(o.a,{to:"/contact/file-upload/"},"Form with file upload"))),c.a.createElement("h2",null,"Troubleshooting"),c.a.createElement("h3",null,"Forms stop working after upgrading to Gatsby v2"),c.a.createElement("p",null,"This can be caused by the offline-plugin."," ",c.a.createElement("a",{href:"https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232"},"Workaround")," ","is to use ",c.a.createElement("code",null,"?no-cache=1")," in the POST url to prevent the service worker from handling form submissions"),c.a.createElement("h3",null,"Adding reCAPTCHA"),c.a.createElement("p",null,"If you are planning to add reCAPTCHA please go to"," ",c.a.createElement("a",{href:"https://github.com/imorente/gatsby-netlify-form-example"},"imorente/gatsby-netlify-form-example")," ","for a working example.")))))},t}(c.a.Component)},176:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},177:function(e,t,a){e.exports=a.p+"static/logo-horizontal-white-43700b0e782a88893f09502233bb0ed2.svg"},178:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(95),a(96);var n=a(0);a(189);var r=function(e){var t,a=e.href,r=e.label,l=e.mode;switch(l){case"bare":t="Button--bare";break;case"solid":t="Button--solid";break;default:t="Button--solid"}var c=a.includes("http"),i=a.includes("mailto"),o="button"===l,s=0;if(c){if(!i&&!o)return n.createElement("a",{className:t,href:a,rel:"nofollow noreferrer",target:"_blank"},r);s=1}else if(i){if(!o)return n.createElement("a",{className:t,href:a},r);s=1}else{if(o)return n.createElement("button",{className:t,type:"submit"},r);s=1}if(1===s)return n.createElement("span",{className:t},r)}},179:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(5),c=a.n(l),i=a(39),o=a.n(i);a.d(t,"a",function(){return o.a});a(176);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||l,staticQueryData:e})})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},180:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(0);a(192);var r=function(e){var t=e.children;return n.createElement("div",{className:"PageContainer"},t)}},181:function(e,t,a){"use strict";var n=a(179).a;a.d(t,"a",function(){return r});var r=n},182:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),i=a(64),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},183:function(e){e.exports={data:{site:{siteMetadata:{title:"ETSF YRM 2020",description:"17th ETSF Young Researchers' Meeting 2020"}}}}},184:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(187),c=a.n(l),i=a(181),o=a(178);a(190);a(177);function s(e){var t=e.label,a=e.to_;return n.createElement(i.a,{className:"navbar-item",to:a,label:t,children:t})}var u=function(e){e.isMobile,n.useState(function(){return!1});var t=n.useState(function(){return""});return n.createElement("nav",{"aria-label":"main-navigation",className:"navbar",role:"navigation"},n.createElement("div",{className:"container"},n.createElement("div",{className:"navbar-menu"+t[0],id:"navMenu"},n.createElement("div",{className:"navbar-end has-text-centered"},n.createElement(s,{label:"Workshops",to_:"/workshops"}),n.createElement(s,{label:"Speakers",to_:"/speakers"}),n.createElement(s,{label:"Sponsors",to_:"/sponsors"}),n.createElement(s,{label:"Schedule",to_:"/schedule"}),n.createElement(s,{label:"Visit",to_:"/visit"}),n.createElement(s,{label:"Contact",to_:"/contact"}),n.createElement("div",{className:"navbar-item"},n.createElement(o.a,{href:"https://ti.to/chicagojs/reasonconf-us-2019",label:"Tickets",mode:"solid"}))))))};a(191);var m=a(177);var d=function(e){return n.createElement("footer",{className:"Footer"},n.createElement("img",{src:m,width:"200"}))},f=a(180),p=a(183),E=function(){return p.data.site.siteMetadata};a(193),a(194);function h(e){var t=e.children,a=E(),n=a.title,l=a.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:l}),r.a.createElement("meta",{property:"og:type",content:"business.business"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:url",content:"/"}),r.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),r.a.createElement(u,null),r.a.createElement("div",{className:"Site-content"},r.a.createElement(f.a,null,t)),r.a.createElement(d,null))}a.d(t,"a",function(){return h})}}]);
//# sourceMappingURL=component---src-pages-contact-examples-js-d1e1ad5407e5dd642969.js.map