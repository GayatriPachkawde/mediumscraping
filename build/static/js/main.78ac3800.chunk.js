(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,c,t){},34:function(e,c,t){},53:function(e,c,t){},59:function(e,c,t){},61:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t(0),s=t.n(n),i=t(26),l=t.n(i),r=(t(33),t(10)),o=(t(34),t(12)),j=t.n(o),h=t(2),b=t(9),d=(t(53),function(e){return console.log(e.blog),Object(a.jsxs)("div",{className:"article-container",children:[Object(a.jsx)("h2",{className:"article-title",children:e.blog.title}),Object(a.jsx)("div",{className:"para-container",children:Object(a.jsx)("p",{className:"para",children:e.blog.para})}),Object(a.jsxs)("div",{className:"response",children:[e.blog.response," Claps"]})]})}),g=function(e){var c=Object(h.e)();return Object(a.jsx)(b.a,{children:Object(a.jsx)("div",{className:"blog-container",children:Object(a.jsxs)("div",{onClick:function(){return t=e.blog.article.slice(19),console.log("asjfjghfhjg"),j.a.get("https://scrapingass.herokuapp.com/article?path=".concat(e.blog.article)).then((function(c){console.log(c.data),e.updateBlog(c.data)})).catch((function(e){console.log(e.message)})),void c.push("/search/".concat(e.tag,"/path/").concat(t));var t},children:[Object(a.jsxs)("div",{className:"preview-content author",children:[Object(a.jsx)("i",{class:"fa fa-user","aria-hidden":"true"}),e.blog.author]}),e.blog.src?Object(a.jsx)("div",{className:"preview-image-container",children:Object(a.jsx)("img",{className:"preview-content preview-image",src:e.blog.src,alt:"preview image"})}):null,Object(a.jsx)("h2",{className:"preview-content blog-title",children:e.blog.title}),Object(a.jsxs)("div",{className:"preview-content details",children:[e.blog.details,"read more"]}),Object(a.jsx)("div",{className:"preview-content response",children:e.blog.responses})]})})})};t(59),t(60);var u=function(){var e=Object(n.useState)([]),c=Object(r.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)(""),l=Object(r.a)(i,2),o=l[0],u=l[1],O=Object(n.useState)(0),p=Object(r.a)(O,2),x=p[0],m=p[1],v=Object(n.useState)(""),f=Object(r.a)(v,2),N=f[0],w=f[1],S=Object(n.useState)(!1),C=Object(r.a)(S,2),k=C[0],B=C[1],F=function(e){w(e)};Object(n.useEffect)((function(){s(["crawling","crawling","crawling","crawling","crawling","crawling","crawling","crawling","crawling","crawling"]),j.a.get("https://scrapingass.herokuapp.com/search?tag=".concat(o,"&count=").concat(x)).then((function(e){s(e.data)})).catch((function(e){console.log(e.message)})),B(!1)}),[x,k]);var E=function(e){e&&(m(10),B(!0))};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(b.a,{children:[Object(a.jsxs)(h.a,{exact:!0,path:"/",children:[Object(a.jsx)("h1",{className:"medium",children:"Search on Medium"}),Object(a.jsxs)("div",{className:"search-container",children:[Object(a.jsx)("input",{type:"search",className:"search",placeholder:" Search tags...",value:o,onChange:function(e){return u(e.target.value)}}),Object(a.jsx)(b.b,{to:"/search/".concat(o,"/").concat(x),children:Object(a.jsx)("button",{className:"search-btn",onClick:function(){return E(10)},children:"Search"})})]})]}),Object(a.jsx)(h.a,{exact:!0,path:"/search/:tag/:count",children:Object(a.jsx)("div",{className:"app-container",children:Object(a.jsxs)("div",{className:"blogs-container",children:[Object(a.jsx)(b.b,{to:"/search/".concat(o,"/").concat(x),children:Object(a.jsxs)("div",{className:"heading",children:[Object(a.jsx)("h1",{className:"blogs-title ",children:o}),Object(a.jsx)("i",{class:"fa fa-angle-double-right fa-2x","aria-hidden":"true",onClick:function(){m(x+10),E(),B(!0)}})]})}),Object(a.jsx)("div",{className:"blogs-title",children:"STORIES"}),t.length>0?t.map((function(e){return"crawling"===e?Object(a.jsx)("h1",{children:e}):Object(a.jsx)(g,{tag:o,blog:e,updateBlog:F})})):null]})})}),Object(a.jsx)(h.a,{path:"/search/:tag/path/:path",children:Object(a.jsx)(d,{blog:N})})]})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,s=c.getLCP,i=c.getTTFB;t(e),a(e),n(e),s(e),i(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),O()}},[[61,1,2]]]);
//# sourceMappingURL=main.78ac3800.chunk.js.map