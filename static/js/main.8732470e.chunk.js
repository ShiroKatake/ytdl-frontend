(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),i=n.n(r),s=(n(26),n(21)),o=n(3),u=n.n(o),l=n(5),d=n(4),j=(n(28),n(0)),b=function(e){var t=e.onClick;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:"btn-animate",onClick:t,children:"Search"})})},h=n(19),m=n.n(h),p=function(e){var t=e.title,n=e.videoId,c=(e.description,e.thumbnailUrl),a=e.handleDownload;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("a",{href:"https://youtube.com/watch?v=".concat(n),rel:"noopener noreferrer",target:"_blank",children:[Object(j.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(j.jsx)("div",{className:"title",children:m.a.decode(t)})]}),Object(j.jsx)("button",{onClick:function(){return a(n)},className:"download",children:"Download"})]})})},f=a.a.memo(p),v=n(20),O="https://shirokatake-ytdl-backend.herokuapp.com",x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mp4";return"".concat(O,"/download?v=").concat(e,"&format=").concat(t)},g=n.n(v).a.create({baseURL:O,responseType:"json"}),w=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/suggestions?search=".concat(t));case 2:return n=e.sent,c=n.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/metainfo?url=".concat(t));case 2:return n=e.sent,c=n.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=[{id:"mp4",name:"mp4",isChecked:!0},{id:"mp3",name:"mp3"},{id:"mov",name:"mov"},{id:"flv",name:"flv"}],y=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),o=i[0],h=i[1],m=Object(c.useState)("mp4"),p=Object(d.a)(m,2),v=p[0],O=p[1],g=Object(c.useState)([]),y=Object(d.a)(g,2),S=y[0],C=y[1],I=Object(c.useState)([]),F=Object(d.a)(I,2),D=F[0],R=F[1],B=Object(c.useState)(null),E=Object(d.a)(B,2),L=E[0],T=E[1],U=Object(c.useState)(!1),J=Object(d.a)(U,2),P=J[0],q=J[1],M=Object(c.useRef)(null),$=Object(c.useRef)(!0),_=function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(n);case 2:t=e.sent,c=t.data,t.success&&(C(c),T(void 0));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(u.a.mark((function e(t){var c,a,r,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t||n){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k(c);case 5:a=e.sent,r=a.data,a.success&&(i=x(c,v),o={title:r.videoDetails.title,videoId:r.videoDetails.videoId},h(i),T(r.videoDetails),R([].concat(Object(s.a)(D),[o])));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e;$.current?$.current=!1:(null===(e=M.current)||void 0===e||e.click(),console.log("download"))}),[o,D]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("main",{className:"container",children:[Object(j.jsxs)("section",{className:"search-section",children:[Object(j.jsx)("div",{className:"input-container ".concat(P?"animate":""),children:Object(j.jsx)("input",{type:"text",name:"input",id:"text",placeholder:"Search or paste url",spellCheck:!1,autoComplete:"off",onBlur:function(){return q(!1)},onFocus:function(){return q(!0)},value:n,onChange:function(e){return a(e.target.value)},autoFocus:!0})}),Object(j.jsx)("ul",{className:"format-list",children:N.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("input",{type:"radio",id:e.id,name:"format",checked:v===e.id,value:e.name,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("label",{htmlFor:e.id,className:"radio-label",children:e.name})]},e.id)}))}),Object(j.jsx)(b,{onClick:function(){var e;e=n,new RegExp(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/).test(e)?z(n):_()}})]}),L&&Object(j.jsx)("section",{className:"downloading-section",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:L.title}),Object(j.jsx)("img",{src:"https://i.ytimg.com/vi/".concat(L.videoId,"/hqdefault.jpg"),alt:L.title})]})}),Object(j.jsxs)("section",{className:"suggestions-section",children:[!!S.length&&Object(j.jsx)("h1",{children:"Suggestions"}),Object(j.jsx)("div",{className:"grid",children:S.map((function(e){var t=e.snippet;return Object(j.jsx)(f,{title:t.title,videoId:e.id.videoId,description:t.description,thumbnailUrl:t.thumbnails.medium.url,handleDownload:function(){return z(e.id.videoId)}},e.id.videoId)}))})]})]}),Object(j.jsx)("footer",{className:"footer"}),Object(j.jsx)("a",{href:o,download:!0,className:"hidden",ref:M,children:o})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),S()}},[[51,1,2]]]);
//# sourceMappingURL=main.8732470e.chunk.js.map