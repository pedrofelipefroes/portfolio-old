(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(e,t,a){"use strict";a.r(t);var n=a(226),r=a(202),l=a.n(r),i=a(0),s=a.n(i),c=a(197),o=a(199),m=a(195),d=function(e){var t=e.label,a=e.to;return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{className:"c-navigation-link",to:a},s.a.createElement("span",{className:"c-navigation-link__label"},t),s.a.createElement("svg",{className:"c-navigation-link__arrow",width:"48px",height:"24px ",viewBox:"0 0 48 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("rect",{id:"line",width:"16",height:"2",x:"2",y:"11.5"}),s.a.createElement("g",{id:"beak"},s.a.createElement("rect",{width:"8",height:"2",x:"0",y:"0",transform:"translate(13, 12.5) rotate(45) translate(-13, -12.5) translate(10, 7.5)"}),s.a.createElement("rect",{width:"2",height:"8",x:"6",y:"0",transform:"translate(13, 12.5) rotate(45) translate(-13, -12.5) translate(10, 7.5)"})))))};d.defautProps={label:"Label",to:""};var h=d,u=a(234),p=a.n(u),g=function(e){var t=e.id,a=e.title,n=e.subtitle,r=e.img,i=e.url;return s.a.createElement("section",{id:"work-"+t,className:"c-project-card"},s.a.createElement(p.a,{offset:100},s.a.createElement(l.a,{duration:2e3},s.a.createElement(m.a,{className:"c-project-card__img",to:i},s.a.createElement("img",{src:r,alt:"Featured Project: "+a})))),s.a.createElement(l.a,{cascade:!0},s.a.createElement("div",{className:"c-project-card__info"},s.a.createElement("h2",{className:"l-container__text--S"},a),s.a.createElement("p",{className:"l-container__text--S"},n),s.a.createElement(h,{label:"More",to:i}))))};a(239),t.default=function(){return s.a.createElement(o.a,{hasNav:!1,className:"p-index"},s.a.createElement(c.a,{title:""}),s.a.createElement("header",{className:"p-index__header"},s.a.createElement("section",{className:"p-index__header__title"},s.a.createElement(l.a,{cascade:!0},s.a.createElement("h1",null,"Designer",s.a.createElement("span",{className:"highlighted-type"},"+")),s.a.createElement("h1",null,"Developer",s.a.createElement("span",{className:"highlighted-type"},"+")),s.a.createElement("h1",null,"Marketer"))),s.a.createElement("section",{className:"p-index__header__headline"},s.a.createElement(l.a,{top:!0,delay:1500,duration:2e3,distance:"24px"},s.a.createElement("h1",null,s.a.createElement("span",{className:"highlighted-type"},"I am "),"Froes")),s.a.createElement(l.a,{top:!0,delay:2e3,duration:2400,distance:"24px"},s.a.createElement("h3",null,"and I love to develop cohesive user experiences through comprehensive design systems."))),s.a.createElement("section",{className:"p-index__header__links"},s.a.createElement(l.a,{delay:2500,duration:2e3},s.a.createElement(h,{label:"About",to:"/about"})),s.a.createElement(l.a,{delay:2750,duration:2e3},s.a.createElement(h,{label:"Showcase",to:"/showcase"})),s.a.createElement(l.a,{delay:3e3,duration:2e3},s.a.createElement(n.Link,{to:"work-0",smooth:!0,className:"p-index__header__links__featured c-navigation-link highlighted-type"},s.a.createElement("strong",{className:"c-navigation-link__label"},"Featured Work"),s.a.createElement("svg",{className:"p-index__header__links__featured__arrow",width:"16px",height:"32px ",viewBox:"0 0 24 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("rect",{id:"line",width:"2",height:"16",x:"11.5",y:"4"}),s.a.createElement("g",{id:"beak"},s.a.createElement("rect",{width:"8",height:"2",x:"0",y:"0",transform:"translate(12.5, 18) rotate(135) translate(-12.5, -13) translate(7.5, 10)"}),s.a.createElement("rect",{width:"2",height:"8",x:"6",y:"0",transform:"translate(12.5, 18) rotate(135) translate(-12.5, -13) translate(7.5, 10)"}))))))),s.a.createElement("div",{className:"p-index__featured l-container__content--L"},[{title:"Rebranding Avenue Code",subtitle:"A new identify for the global technology consulting company.",img:"/rebranding-avenue-code/header.jpg",url:"/rebranding-avenue-code"}].map(function(e,t){return s.a.createElement(g,{id:t,title:e.title,subtitle:e.subtitle,img:e.img,url:e.url})})))}},194:function(e,t,a){var n;e.exports=(n=a(196))&&n.default||n},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(66),i=a.n(l);a.d(t,"a",function(){return i.a});a(194),a(9).default.enqueue,r.a.createContext({})},196:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},197:function(e,t,a){"use strict";var n=a(198),r=a(0),l=a.n(r),i=a(201),s=a.n(i);function c(e){var t=e.description,a=e.lang,r=e.image,i=e.meta,c=e.pathname,o=e.title,m=n.data.site,d={title:o||m.siteMetadata.defaultTitle,description:t||m.siteMetadata.defaultDescription,image:""+m.siteMetadata.siteUrl+(r||m.siteMetadata.defaultImage),url:""+m.siteMetadata.siteUrl+(c||"/")};return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:d.title,titleTemplate:m.siteMetadata.titleTemplate,meta:[{name:"description",content:d.description},{property:"og:title",content:d.title},{property:"og:description",content:d.description},{name:"og:image",content:d.image},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"628"},{property:"og:type",content:"website"},{property:"og:url",content:d.url},{name:"twitter:title",content:d.title},{name:"twitter:description",content:d.description},{name:"twitter:image",content:d.image},{name:"twitter:card",content:"summary_large_image"}].concat(i)})}c.defaultProps={description:null,lang:"en",image:null,meta:[],pathname:null,title:null},t.a=c},198:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Froes — Designer, Developer & Marketer",titleTemplate:"%s — Froes — Designer, Developer & Marketer",defaultDescription:"This is the portfolio of a Designer, Developer, and Marketer who loves to work developing cohesive user experiences through comprehensive design systems.",siteUrl:"https://froes.design",defaultImage:"/froes-og-image.png"}}}}},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=function(){return r.a.createElement("footer",{className:"c-footer"},r.a.createElement("div",{className:"l-container__content--S"},r.a.createElement("section",{className:"c-footer__links"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/froesdesign"},"LinkedIn")),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:hello@froes.design"},"Work Inquiries"))),r.a.createElement("section",{className:"c-footer__disclaimer"},r.a.createElement("small",null,"This site was fully designed and developed by me. Check out its"," ",r.a.createElement("a",{href:"https://github.com/pedrofelipefroes/portfolio"},"GitHub repo"),"."),r.a.createElement("small",null,"© 2019 Froes."))))},i=a(195),s=function(e){var t=e.hasShowcase,a=e.hasAbout;return r.a.createElement("nav",{className:"c-nav"},r.a.createElement("div",{className:"l-container__content--L"},r.a.createElement(i.a,{className:"c-nav__home",to:"/"},r.a.createElement("svg",{className:"c-nav__home__arrow",width:"48px",height:"24px ",viewBox:"0 0 48 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{id:"line",width:"16",height:"2",x:"2",y:"11.5"}),r.a.createElement("g",{id:"beak"},r.a.createElement("rect",{width:"8",height:"2",x:"0",y:"0",transform:"translate(13, 12.5) rotate(45) translate(-13, -12.5) translate(10, 7.5)"}),r.a.createElement("rect",{width:"2",height:"8",x:"6",y:"0",transform:"translate(13, 12.5) rotate(45) translate(-13, -12.5) translate(10, 7.5)"}))),r.a.createElement("span",{className:"c-nav__items__link"},"Froes.Design")),r.a.createElement("div",{className:"c-nav__items"},t?r.a.createElement(i.a,{to:"/showcase",className:"c-nav__items__link"},"Showcase"):null,a?r.a.createElement(i.a,{to:"/about",className:"c-nav__items__link"},"About"):null)))};s.defaultProps={hasShowcase:!0,hasAbout:!0};var c=s,o=function(e){var t=e.children,a=e.className,n=e.hasNav,i=e.navHasShowcase,s=e.navHasAbout;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(c,{hasShowcase:i,hasAbout:s}):null,r.a.createElement("main",{className:a},t),r.a.createElement(l,null))};o.defaultProps={hasNav:!0,navHasShowcase:!0,navHasAbout:!0};t.a=o}}]);
//# sourceMappingURL=component---src-pages-index-js-59bd288c88b1eca811c5.js.map