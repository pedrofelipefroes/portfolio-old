(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t);a("KKXr");var n=a("/eHF"),r=a.n(n),o=a("q1tI"),l=a.n(o),i=a("8k0H"),c=a("CjrJ"),s=a("9eSz"),d=a.n(s),m=a("oBNZ"),u=a.n(m),p=(a("VgVH"),function(e){var t=e.activity,a=e.highlightColor,n=e.img,o=e.index,i=e.path,s=e.title;return l.a.createElement("section",{className:"c-project-card"},l.a.createElement(r.a,{delay:1e3,duration:2e3},l.a.createElement("span",{className:"c-project-card__highlight--S",style:{backgroundColor:a}},l.a.createElement(r.a,{delay:1e3,duration:2e3,top:!0},l.a.createElement("div",{className:"c-project-card__highlight__text"},o)))),l.a.createElement("div",{className:"c-project-card__img-and-content3"},l.a.createElement(r.a,null,l.a.createElement(d.a,{className:"c-project-card__img",fluid:n})),l.a.createElement(u.a,{left:!0},l.a.createElement("span",{className:"c-project-card__highlight--XS",style:{backgroundColor:a}},l.a.createElement("h4",{className:"c-project-card__highlight__text"},o))),l.a.createElement(r.a,null,l.a.createElement("h4",{className:"c-project-card__activity u-color-type-variant"},t),l.a.createElement("div",{className:"c-project-card__title"},l.a.createElement("h2",null,s),l.a.createElement(c.a,{className:"p-index__navigation-link",hasArrow:!0,label:"More",to:i})))))});a("ykqd");function h(e){var t=e.data.allMdx.edges.map((function(e,t){return l.a.createElement(p,{key:e.node.frontmatter.id,activity:e.node.frontmatter.activity.split(".")[0],img:e.node.frontmatter.featuredImage.childImageSharp.fluid,index:"0"+(t+1),highlightColor:"#"+e.node.frontmatter.highlightColor,path:e.node.frontmatter.path,title:e.node.frontmatter.title})}));return l.a.createElement(i.a,{navHasCompactFooter:!0,navIsOnDark:!0,className:"p-index"},l.a.createElement("div",{className:"u-content-container--L"},l.a.createElement("header",{className:"p-index__header"},l.a.createElement(r.a,null,l.a.createElement("h1",null,"Froes, from Design ",l.a.createElement("br",null),"to finish."))),l.a.createElement("section",{className:"p-index__section p-index__section--about"},l.a.createElement("h4",{className:"u-color-type-variant"},"01 — About"),l.a.createElement("h3",null,"Hello! I am Froes,",l.a.createElement("br",null),"a Designer skilled in Coding and Marketing who strives for cohesive user experiences."),l.a.createElement("p",null,l.a.createElement(c.a,{className:"p-index__navigation-link",hasArrow:!0,label:"Read full bio",to:"/about"}))),l.a.createElement("section",{className:"p-index__section"},l.a.createElement("h4",{className:"p-index__section__featured-cases-title u-color-type-variant"},"02 — Featured Cases"),t),l.a.createElement("section",{className:"p-index__section p-index__section--contact"},l.a.createElement("h4",{className:"u-color-type-variant"},"03 — Contact"),l.a.createElement("h3",null,"Like to get in touch? I would love to connect and learn more about you, too. Message me at"," ",l.a.createElement("a",{className:"p-index__navigation-link",href:"mailto:hello@froes.design"},"hello@froes.design")),l.a.createElement("h3",null,"Or reach me on",l.a.createElement("br",null),l.a.createElement("a",{className:"p-index__navigation-link",href:"https://www.linkedin.com/in/froesdesign"},"linkedin.com/in/froesdesign")))))}a.d(t,"default",(function(){return h})),a.d(t,"IndexPageQuery",(function(){return f}));var f="2852806053"},oBNZ:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e,t){var a=t.left,n=t.right,r=t.up,o=t.down,l=t.top,i=t.bottom,c=t.big,s=t.mirror,m=t.opposite,p=(a?1:0)|(n?2:0)|(l||o?4:0)|(i||r?8:0)|(s?16:0)|(m?32:0)|(e?64:0)|(c?128:0);if(u.hasOwnProperty(p))return u[p];var h=a||n||r||o||l||i,f=void 0,_=void 0;if(h){if(!s!=!(e&&m)){var v=[n,a,i,l,o,r];a=v[0],n=v[1],l=v[2],i=v[3],r=v[4],o=v[5]}var g=c?"2000px":"100%";f=a?"-"+g:n?g:"0",_=o||l?"-"+g:r||i?g:"0"}return u[p]=(0,d.animation)((e?"to":"from")+" {"+(h?" transform: translate3d("+f+", "+_+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),u[p]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,a=(e.out,e.forever),o=e.timeout,l=e.duration,i=void 0===l?d.defaults.duration:l,c=e.delay,m=void 0===c?d.defaults.delay:c,u=e.count,p=void 0===u?d.defaults.count:u,h=n(e,["children","out","forever","timeout","duration","delay","count"]),f={make:r,duration:void 0===o?i:o,delay:m,forever:a,count:p,style:{animationFillMode:"both"},reverse:h.left};return(0,s.default)(h,f,f,t)}a("HAE/"),a("nIY7"),a("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var l,i=a("17x9"),c=a("eH+L"),s=(l=c)&&l.__esModule?l:{default:l},d=a("ar19"),m={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,big:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},u={};o.propTypes=m,t.default=o,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-b0ed8c13748360c10170.js.map