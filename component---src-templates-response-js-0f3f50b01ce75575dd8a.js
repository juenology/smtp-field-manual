(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0bhs":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("TSYQ"),l=a.n(s),i={1:"Low",2:"Medium",3:"High",4:"Critical"};t.a=function(e){var t=e.ranking;if(!t)return r.a.createElement("p",null);var a=i[t],n=l()("severity","severity--"+a.toLowerCase());return r.a.createElement("p",{className:n},a," severity")}},UsfP:function(e,t,a){"use strict";a.r(t);a("pJf4");var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),l=a("Bl7J"),i=a("vrFN"),c=a("YI4w"),o=a("0bhs");t.default=function(e){var t=e.pageContext.responsePageData,a=t.response,n=a.description,m=a.links,u=a.response,d=a.severity;return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:t.provider.name+": "+u,description:n||u}),r.a.createElement("div",{className:"masthead"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"masthead_subtitle"},r.a.createElement(s.Link,{to:"/"+t.type+"/"+t.provider.id},t.provider.name)," ",r.a.createElement("span",{className:"masthead_slash"},"/")," SMTP error code ",r.a.createElement(s.Link,{to:"/code/"+t.code.reply},t.code.reply)),r.a.createElement("h1",{className:"masthead_title"},u),r.a.createElement(o.a,{ranking:d}),function(){if(""!==n)return r.a.createElement("p",{className:"masthead_description",dangerouslySetInnerHTML:{__html:n}})}(),function(){if(m.length>0)return r.a.createElement("div",{className:"doc-list"},r.a.createElement("h4",null,"Documentation"),r.a.createElement("ul",null,m.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e))}))))}(),function(){if(!n&&0===m.length)return r.a.createElement("p",{className:"masthead_description"},"This SMTP response doesn’t have any information yet. Be the first to ",r.a.createElement(s.Link,{to:"/contribute"},"contribute"),"!")}())),r.a.createElement(c.a,{updateOnScroll:!0}))}}}]);
//# sourceMappingURL=component---src-templates-response-js-0f3f50b01ce75575dd8a.js.map