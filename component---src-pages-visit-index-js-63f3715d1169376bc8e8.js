(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{173:function(e,a,t){"use strict";t.r(a);t(195);var n=t(0),r=t.n(n),i=t(184),s=t(204);t(181);t(233);var o=t(234),c=t(179),l=t(215);t(235);var d=function(e){var a=e.hotelName,t=e.address,r=e.description,i=e.bookingLink,s=e.imageUrl;return n.createElement("div",{className:"HotelCard"},n.createElement("img",{className:"HotelCard-avatar",alt:"Image of the Hotel",src:s}),n.createElement("span",{className:"HotelCard-name"},a),n.createElement("div",{className:"HotelCard-infoContainer"},n.createElement("span",{className:"HotelCard-address"},t),n.createElement("p",{className:"HotelCard-description"},r)),n.createElement("a",{className:"HotelCard-bookingLink",href:i},"Book Your Stay"))};t(236);var u=function(e){var a=e.className,t=e.hotels;return n.createElement("div",{className:"HotelGrid "+a},l.a(t,function(e){return n.createElement(d,{hotelName:e.name,address:e.address,description:e.info,bookingLink:e.bookingLink,imageUrl:e.imageUrl})}))};function m(){return r.a.createElement(c.b,{query:"2597890158",render:function(e){return r.a.createElement(u,{hotels:e.allInterestsJson.hotels})},data:o})}var h=t(196),f=(t(40),t(67),t(237)),p=t(245),g=(t(243),"Venue SIX 10"),b=[41.87404,-87.6248],v="610 S Michigan Ave, Chicago, IL 60605, USA",w=function(e){var a=e.selectedMarker,t=e.latitude,i=e.longitude,s=e.name,o=e.address,c=Object(n.useState)(!1),l=(c[0],c[1]),d=o.replace(/ /g,"+"),u=t===b[0]&&i===b[1];return r.a.createElement(r.a.Fragment,null,s===a&&r.a.createElement(p.b,{latitude:t,longitude:i,offsetLeft:10,offsetTop:20,closeButton:!0,closeOnClick:!1,onClose:function(){return l(!1)},anchor:"top"},r.a.createElement("div",{className:"Map-Popover"},r.a.createElement("span",{className:"Map-Popover-Title"},s),r.a.createElement("a",{className:"Map-Popover-Directions",href:u?"https://goo.gl/maps/RhpxmpdzrRDfVQha6":"https://www.google.com/maps?saddr=610+S+Michigan+Ave,Chicago,IL+60605,USA&daddr="+d,target:"_blank"}," ",u?"Address":"Directions"," "))),r.a.createElement(p.a,{latitude:t,longitude:i},r.a.createElement("button",{className:u?"Map-marker Map-marker-venue":"Map-marker",onClick:function(){return l(!0)}},r.a.createElement("div",{className:"Map-markerInnerCircle"}))))},y=function(e){var a=e.label,t=e.category,n=e.setState,i=e.selected;return r.a.createElement("button",{className:i?"Map-LegendNavItem Map-LegendNavItem-selected":"Map-LegendNavItem",onClick:function(){return n(t)}},a)},E=function(e){var a=e.name,t=e.address,n=e.info,i=e.website,s=e.onClick,o=e.setSelectedMarkerState;return r.a.createElement("a",{className:"Map-PlaceCard",href:i,target:"_blank",onClick:function(){return s},onMouseOver:function(){return o(a)}},r.a.createElement("span",{className:"Map-PlaceCardName"},a),r.a.createElement("span",{className:"Map-PlaceCardAddress"},t),r.a.createElement("span",{className:"Map-PlaceCardType"},n))},k=function(e){var a=e.food,t=e.drink,i=e.coffee,s=e.sightseeing,o=Object(n.useState)({width:710,height:430,latitude:41.8764515,longitude:-87.6269634,zoom:13,pitch:75}),c=o[0],l=o[1],d=Object(n.useState)(a),u=d[0],m=d[1],h=Object(n.useState)(),f=h[0],k=h[1],C=u.map(function(e){return{coords:e.coords,name:e.name,address:e.address}});return r.a.createElement("div",{className:"Map-container"},r.a.createElement("div",{className:"Map-legend"},r.a.createElement("div",{className:"Map-legendNav"},r.a.createElement(y,{setState:m,label:"Food",category:a,selected:"food"===u[0].type}),r.a.createElement(y,{setState:m,label:"Drink",category:t,selected:"bar"===u[0].type}),r.a.createElement(y,{setState:m,label:"Coffee",category:i,selected:"coffee"===u[0].type}),r.a.createElement(y,{setState:m,label:"Sightseeing",category:s,selected:"sightseeing"===u[0].type})),r.a.createElement("div",{className:"Map-PlaceCardContainer"},u.map(function(e){return r.a.createElement(E,{name:e.name,address:e.address,desc:e.desc,website:e.website,onClick:function(){return k(e.coords)},setSelectedMarkerState:k})}))),r.a.createElement(p.c,Object.assign({},c,{mapStyle:"mapbox://styles/sebastiankurp/cjwr24hr8076i1cn5s5478no0",mapboxApiAccessToken:"pk.eyJ1Ijoic2ViYXN0aWFua3VycCIsImEiOiJjandwZWZ1emkxOHR1NDhwOG1lM2pmeHVmIn0.fHuAftP7b6uRy1UfWieSPQ",onViewportChange:function(e){return l(e)}}),r.a.createElement(w,{selectedMarker:f,latitude:b[0],longitude:b[1],name:g,address:v}),C.map(function(e){return r.a.createElement(w,{selectedMarker:f,latitude:e.coords[0],longitude:e.coords[1],name:e.name,address:e.address})})))};function C(){return r.a.createElement(c.b,{query:"847413740",render:function(e){var a=e.allInterestsJson.interests.map(function(e){return Object.assign({},e)}),t=a.filter(function(e){return"food"===e.type}),n=a.filter(function(e){return"bar"===e.type}),i=a.filter(function(e){return"coffee"===e.type}),s=a.filter(function(e){return"sightseeing"===e.type});return r.a.createElement(k,{food:t,drink:n,coffee:i,sightseeing:s})},data:f})}t(244);function S(e){var a=e.data,t=a&&a.site&&a.site.siteMetadata||{};return r.a.createElement(i.a,null,r.a.createElement(h.a,{title:t.visit.title,subtitle:t.venue.name,bio:t.venue.address+"\n"+t.venue.city+"\n"+t.venue.zip,graphic:r.a.createElement("img",{className:"Visit-HeroGraphic",alt:t.venue.name,src:t.venue.imageUrl}),ctaLabel:"Directions",href:t.venue.directionsLink}),r.a.createElement("br",null),r.a.createElement(s.a,{heading:"Hotels Nearby"}),r.a.createElement(m,null),r.a.createElement("br",null),r.a.createElement(s.a,{heading:"City Guide"}),r.a.createElement(C,null),r.a.createElement("br",null))}t.d(a,"default",function(){return S}),t.d(a,"query",function(){return N});var N="4259273364"},176:function(e,a,t){var n;e.exports=(n=t(182))&&n.default||n},177:function(e,a,t){e.exports=t.p+"static/logo-horizontal-white-43700b0e782a88893f09502233bb0ed2.svg"},178:function(e,a,t){"use strict";t.d(a,"a",function(){return r});t(95),t(96);var n=t(0);t(189);var r=function(e){var a,t=e.href,r=e.label,i=e.mode;switch(i){case"bare":a="Button--bare";break;case"solid":a="Button--solid";break;default:a="Button--solid"}var s=t.includes("http"),o=t.includes("mailto"),c="button"===i,l=0;if(s){if(!o&&!c)return n.createElement("a",{className:a,href:t,rel:"nofollow noreferrer",target:"_blank"},r);l=1}else if(o){if(!c)return n.createElement("a",{className:a,href:t},r);l=1}else{if(c)return n.createElement("button",{className:a,type:"submit"},r);l=1}if(1===l)return n.createElement("span",{className:a},r)}},179:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),r=t.n(n),i=t(5),s=t.n(i),o=t(39),c=t.n(o);t.d(a,"a",function(){return c.a});t(176);var l=r.a.createContext({});function d(e){var a=e.staticQueryData,t=e.data,n=e.query,i=e.render,s=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,s&&i(s),!s&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var a=e.data,t=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(d,{data:a,query:t,render:n||i,staticQueryData:e})})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},180:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(0);t(192);var r=function(e){var a=e.children;return n.createElement("div",{className:"PageContainer"},a)}},181:function(e,a,t){"use strict";var n=t(179).a;t.d(a,"a",function(){return r});var r=n},182:function(e,a,t){"use strict";t.r(a);t(40);var n=t(0),r=t.n(n),i=t(5),s=t.n(i),o=t(64),c=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=c},183:function(e){e.exports={data:{site:{siteMetadata:{title:"ETSF YRM 2020",description:"17th ETSF Young Researchers' Meeting 2020"}}}}},184:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(187),s=t.n(i),o=t(181),c=t(178);t(190);t(177);function l(e){var a=e.label,t=e.to_;return n.createElement(o.a,{className:"navbar-item",to:t,label:a,children:a})}var d=function(e){e.isMobile,n.useState(function(){return!1});var a=n.useState(function(){return""});return n.createElement("nav",{"aria-label":"main-navigation",className:"navbar",role:"navigation"},n.createElement("div",{className:"container"},n.createElement("div",{className:"navbar-menu"+a[0],id:"navMenu"},n.createElement("div",{className:"navbar-end has-text-centered"},n.createElement(l,{label:"Workshops",to_:"/workshops"}),n.createElement(l,{label:"Speakers",to_:"/speakers"}),n.createElement(l,{label:"Sponsors",to_:"/sponsors"}),n.createElement(l,{label:"Schedule",to_:"/schedule"}),n.createElement(l,{label:"Visit",to_:"/visit"}),n.createElement(l,{label:"Contact",to_:"/contact"}),n.createElement("div",{className:"navbar-item"},n.createElement(c.a,{href:"https://ti.to/chicagojs/reasonconf-us-2019",label:"Tickets",mode:"solid"}))))))};t(191);var u=t(177);var m=function(e){return n.createElement("footer",{className:"Footer"},n.createElement("img",{src:u,width:"200"}))},h=t(180),f=t(183),p=function(){return f.data.site.siteMetadata};t(193),t(194);function g(e){var a=e.children,t=p(),n=t.title,i=t.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("meta",{property:"og:type",content:"business.business"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:url",content:"/"}),r.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),r.a.createElement(d,null),r.a.createElement("div",{className:"Site-content"},r.a.createElement(h.a,null,a)),r.a.createElement(m,null))}t.d(a,"a",function(){return g})},196:function(e,a,t){"use strict";var n=t(0),r=t(178);t(197);var i=function(e){var a=e.title,t=e.subtitle,i=e.bio,s=e.ctaLabel,o=e.href,c=e.children;return n.createElement("div",{className:"HeroHeader"},n.createElement("h1",{className:"HeroHeader-title"},a),n.createElement("span",{className:"HeroHeader-subtitle"},t),n.createElement("p",{className:"HeroHeader-bio"},i),n.createElement("div",{className:"HeroHeader-linkSection"},n.createElement(r.a,{href:o,label:s,mode:"solid"}),c))};t.d(a,"a",function(){return s}),t(198);var s=function(e){var a=e.title,t=e.subtitle,r=e.bio,s=e.ctaLabel,o=e.href,c=e.graphic,l=e.children;return n.createElement("div",{className:"Hero"},n.createElement(i,{title:a,subtitle:t,bio:r,ctaLabel:s,href:o,children:l}),c)}},199:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(0),r=t(200);t(205);var i=function(e){var a=e.fontWeight,t=void 0!==a?a:"bold",i=e.className,s=e.fontSize,o=void 0!==s?s:"13px",c=e.children,l={style:{color:"#FFF",fontFamily:"Montserrat , sans-serif",fontSize:o,fontWeight:t}};return void 0!==i&&(l.className=r.b(i)),n.createElement("span",l,c)}},204:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(0),r=t(199);t(219);var i=function(e){var a=e.heading,t=e.children;return n.createElement("div",{className:"SectionHeading-container",href:"/tickets"},n.createElement(r.a,{className:"SectionHeading",fontSize:"30px",children:a}),t)}},234:function(e){e.exports={data:{allInterestsJson:{hotels:[{id:"recO60lhvLGH7FGwY",address:"720 S Michigan Ave, Chicago, IL 60605",amenities:["Paid Wi-Fi"],info:"Sleek rooms have modern decor and custom-designed beds, plus flat-screens and free Wi-Fi; some provide lake views. Executive rooms offer access to a lounge serving free breakfast and evening appetizers. Suites add separate living areas.",name:"Hilton Chicago",phone:"(312) 922-4400",imageUrl:"https://res.cloudinary.com/chicagojs/image/upload/c_fill,g_center,h_400,w_400/v1561434344/2019-reason-conf-us/website/hotel-hilton.jpg",bookingLink:"https://hilton.com"},{id:"recQkqUGllFTQOiqG",address:"24 East Congress Parkway, Chicago, IL 60605",amenities:["Laundry Service","Air-conditioned"],info:"The modern, single-sex dorms feature wooden bunk beds, shared or en suite bathrooms, and free Wi-Fi. Towels and linens are included. Private rooms are also available.",name:"HI Chicago Hostel ",phone:"(312) 360-0300",imageUrl:"https://res.cloudinary.com/chicagojs/image/upload/c_fill,g_center,h_400,w_400/v1561434344/2019-reason-conf-us/website/hotel-hostel.jpg",bookingLink:"https://hiusa.org"},{id:"recTRvZ1Oz0lTcRsa",address:"636 South Michigan Avenue, E Balbo Dr, Chicago, IL 60605",amenities:["Air-conditioned","Laundry Service"],info:"Sophisticated rooms (some with lake views) offer flat-screens TVs, iPod docks and Wi-Fi (fee), as well as minifridges and coffeemakers. Club rooms provide access to a lounge with free continental breakfast and snacks. Suites add separate living spaces, and some have fireplaces. Room service is available.",name:"The Blackstone",phone:"(312) 447-0955",imageUrl:"https://res.cloudinary.com/chicagojs/image/upload/c_fill,g_center,h_400,w_400/v1561434346/2019-reason-conf-us/website/hotel-blackstone.jpg",bookingLink:"https://theblackstonehotel.com"},{id:"reccCnCwwCwNyP5hW",address:"520 S Michigan Ave, Chicago, IL 60605",amenities:["Air-conditioned"],info:"Elegant rooms come with free Wi-Fi, coffeemakers and cable TV; suites add separate living rooms with dining tables and sitting areas. Some rooms and suites have views of Lake Michigan, and marble bathrooms with whirlpool tubs.",name:"The Congress Plaza Hotel",phone:"(312) 427-3800",imageUrl:"https://res.cloudinary.com/chicagojs/image/upload/c_fill,g_center,h_400,w_400/v1561434347/2019-reason-conf-us/website/hotel-congress.jpg",bookingLink:"https://congressplazahotel.com"}]}}}},237:function(e){e.exports={data:{allInterestsJson:{interests:[{address:"805 S State St, Chicago, IL 60605",coords:[41.8715417,-87.6271677],amenities:null,info:"Family-owned local chain for Italian classics & Chicago-style, deep-dish pizzas with butter crusts.",name:"Lou Malnati's Pizzeria",phone:"(312) 786-1000",type:"food",website:"https://www.loumalnatis.com",id:"rec79sF6ahOh38vfr"},{address:"47 W Polk St, Chicago, IL 60605",coords:[41.8718717,-87.6290977],amenities:null,info:"Upbeat grill chain with American grub, martinis & microbrews, plus happy-hour deals.",name:"Bar Louie",phone:"(312) 347-0000",type:"bar",website:"https://www.barlouie.com",id:"rec7uYW1WmagdnJED"},{address:"439 S Dearborn St, Chicago, IL 60605",coords:[41.8759712,-87.6289904],amenities:null,info:"Coffee shop with pour-over java drinks & farm-to-table sandwiches in a funky setting.",name:"HERO Coffee Bar",phone:"(312) 631-3269",type:"coffee",website:"https://www.herocoffeebars.com",id:"rec8y0ktZxl70jROU"},{address:"17 W Adams St, Chicago, IL 60603",coords:[41.879264,-87.6284211],amenities:null,info:"Institution since 1898 serving traditional German cuisine & steins of beer in an old-world setting.",name:"The Berghoff Restaurant",phone:"(312) 427-3170",type:"food",website:"https://www.theberghoff.com",id:"rec9NX6i7W7m0l3qf"},{address:"233 S Wacker Dr, Chicago, IL 60606",coords:[41.8788763,-87.6359282],amenities:null,info:"Iconic, 110-story skyscraper featuring expansive views of Chicago from its 103rd-story Skydeck.",name:"Willis Tower",phone:"(312) 875-0066",type:"sightseeing",website:"https://www.willistower.com",id:"recC7g8g9COwZFut0"},{address:"720 S Michigan Ave, Chicago, IL 60605",coords:[41.8724628,-87.6247849],amenities:["Sports","Live Music"],info:"Traditional bar featuring Irish pub fare, beer, wine & live entertainment inside the Hilton Chicago.\n",name:"Kitty O’ Sheas",phone:"(312) 294-6860",type:"bar",website:null,id:"recEj1f5iRm6Txwva"},{address:"222 S Wabash Ave, Chicago, IL 60604",coords:[41.8788515,-87.626458],amenities:["Live Music"],info:"Bourbon, craft beer & pub snacks offered in lofty, sleek digs with shuffleboard & live music.",name:"2Twenty2 Tavern",phone:"(312) 878-9994",type:"bar",website:"https://www.2twenty2tavern.com",id:"recF4EqT6UKmHx75D"},{address:"343 S Dearborn St, Chicago, IL 60604",coords:[41.8771927,-87.6289936],amenities:null,info:"Coffee drinks, sandwiches, local pies & pastries in a cozy space with bookshelves & free WiFi.",name:"Dollop Coffee Co.",phone:"(312) 846-6103",type:"coffee",website:"https://www.dollopcoffee.com/",id:"recI18YVZiXGdqCqS"},{address:"Monadnock Building, 53 W Jackson Blvd, Chicago, IL 60604",coords:[41.87816,-87.629714],amenities:null,info:"High-end coffee bar chain serving daily roasted brews in an industrial-chic setting.",name:"Intelligentsia Coffee Monadnock Coffeebar",phone:"(312) 253-0594",type:"coffee",website:null,id:"recK1WolWxv9SDqqI"},{address:"201 E Randolph St, Chicago, IL 60602",coords:[41.8841262,-87.6214286],amenities:null,info:'24.5-acre green space with a video display, the reflective "Bean" sculpture & an outdoor theater.',name:"Millennium Park",phone:null,type:"sightseeing",website:null,id:"recNnYz7MVTFNhSlZ"},{address:"730 S Clark St, Chicago, IL 60605",coords:[41.8727705,-87.6308599],amenities:null,info:"Sushi bar & Japanese standards, plus a full bar, in an airy, loftlike room. Delivery available.",name:"Umai",phone:"(312) 986-8888",type:"food",website:"https://www.umaichicago.com/",id:"recQGygwNXum26ACY"},{address:"700 S Wabash Ave, Chicago, IL 60605",coords:[41.8729564,-87.6264399],amenities:["Live Music"],info:"Classic blues club with up-and-coming & famous acts 7 nights a week plus New-Orleans-inspired grub.",name:"Buddy Guy's Legends",phone:"(312) 427-1190",type:"bar",website:"https://www.buddyguy.com",id:"recTFBnDEL3gmWqyn"},{address:"130 E Randolph St, Chicago, IL 60601",coords:[41.8849848,-87.6231119],amenities:null,info:"Pancakes & other big portions of American eats draw hungry folks to this breakfast-lunch cafe.",name:"Wildberry Pancakes & Cafe",phone:"(312) 938-9777",type:"food",website:"http://www.wildberrycafe.com",id:"recU1zzPFZR1Sv0jQ"},{address:"600 N Lake Shore Dr, Chicago, IL 60611",coords:[41.8930835,-87.6151781],amenities:null,info:"North-facing sandy public beach on Lake Michigan, a popular swimming option with city skyline views.",name:"Ohio Street Beach",phone:null,type:"sightseeing",website:null,id:"recUby6RYwQ7KpL7i"},{address:"41 E 8th St, Chicago, IL 60605",coords:[41.8715368,-87.626229],amenities:null,info:"Berkeley-born chain featuring signature coffee, tea & blended drinks alongside baked goods.",name:"Peet's Coffee",phone:"(312) 489-5097",type:"coffee",website:"https://www.peets.com",id:"recUzFA03cA5dVa0u"},{address:"111 East Wacker Drive, Chicago, IL 60601",coords:[41.8877434,-87.6236024],amenities:null,info:"The Chicago Architecture Center (CAC) is the city’s new all-in-one architecture experience: a museum with two floors of fascinating exhibits and a gateway to more than 85 awe-inspiring boat, walking, bus, bike and L tours!",name:"Chicago Architecture Center",phone:"(312) 922-3432",type:"sightseeing",website:"www.architecture.org",id:"recVOH5LCZOzR8dGJ"},{address:"111 S Michigan Ave, Chicago, IL 60603",coords:[41.8789219,-87.6217188],amenities:null,info:null,name:"The Art Institute of Chicago",phone:"(312) 443-3600",type:"sightseeing",website:"https://www.artic.edu",id:"recXkXKPpg7rj1h8o"},{address:"1120 S Michigan Ave, Chicago, IL 60605",coords:[41.8688239,-87.6246198],amenities:null,info:"Cafe chain serving creative breakfast dishes & sandwiches in a cheery, contemporary atmosphere.",name:"Yolk",phone:"(312) 789-9655",type:"food",website:"https://www.eatyolk.com",id:"recYa7fBbSbcL6bbB"},{address:"Chicago Riverwalk, Chicago, IL 60601, USA",coords:[41.8918295,-87.6041589],amenities:null,info:"Riverside pedestrian path featuring city views & dining, plus bridges, fishing piers & boat docks.",name:"Chicago Riverwalk",phone:"(877) 300-6746",type:"sightseeing",website:"https://www.chicagoriverwalk.us",id:"recealZTqfBTFfnXk"},{address:"600 E Grand Ave, Chicago, IL 60611",coords:[41.8918295,-87.6041589],amenities:null,info:"Former Navy training center draws crowds with carnival rides, restaurants, shops & fireworks.",name:"Navy Pier",phone:"(312) 595-7437",type:"sightseeing",website:"https://www.navypier.org",id:"reciCPFC3Z7nfKf9W"},{address:"555 S Dearborn St, Chicago, IL 60605",coords:[41.8747052,-87.6289204],amenities:null,info:"Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availability.",name:"Starbucks",phone:"(312) 922-8910",type:"coffee",website:null,id:"recujPxxhEUh29wyA"}]}}}}}]);
//# sourceMappingURL=component---src-pages-visit-index-js-63f3715d1169376bc8e8.js.map