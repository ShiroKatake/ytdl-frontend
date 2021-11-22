(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(17),o=n.n(r),s=(n(23),n(3)),i=n.n(s),u=n(4),l=n(5),d=(n(25),n(0)),p=function(e){var t=e.onClick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{className:"btn-animate",onClick:t,children:"Search"})})},b=n(18),j=n.n(b),h=function(e){var t=e.title,n=e.videoId,a=(e.description,e.thumbnailUrl),c=e.handleDownload;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("a",{href:"https://youtube.com/watch?v=".concat(n),rel:"noopener noreferrer",target:"_blank",children:[Object(d.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(d.jsx)("div",{className:"title",children:j.a.decode(t)})]}),Object(d.jsx)("button",{onClick:function(){return c(n)},className:"download",children:"Download"})]})})},m=c.a.memo(h),f=n(8),v=n.n(f),O="https://shirokatake-ytdl-backend.herokuapp.com",g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mp4";return"".concat(O,"/download?v=").concat(e,"&format=").concat(t)},x=v.a.create({baseURL:O,responseType:"json"}),w=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/suggestions?search=".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/metainfo?url=".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),y=new WebSocket("ws://".concat(O.replace(/^https?:\/\//i,""))),C="";y.addEventListener("message",(function(e){C=e.data,console.log("Message from server ",C)}));var N=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{y.send(C),v()({url:t,method:"POST",responseType:"blob",data:{uid:C},onDownloadProgress:function(e){var t=Math.round(100*e.loaded/e.total);console.log(e.lengthComputable),console.log(t)}}).then((function(e){var t,n=(t=e.headers["content-disposition"],/.*filename=['"]?([^"]+)/g.exec(t)[1]),a=window.URL.createObjectURL(new Blob([e.data])),c=document.createElement("a");c.href=a,c.setAttribute("download",n),document.body.appendChild(c),c.click(),c.remove()}))}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=[{id:"mp4",name:"mp4",isChecked:!0},{id:"mp3",name:"mp3"},{id:"mov",name:"mov"},{id:"flv",name:"flv"}],F=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("mp4"),o=Object(l.a)(r,2),s=o[0],b=o[1],j=Object(a.useState)([]),h=Object(l.a)(j,2),f=h[0],v=h[1],O=Object(a.useState)(null),x=Object(l.a)(O,2),y=x[0],C=x[1],F=Object(a.useState)(!1),I=Object(l.a)(F,2),D=I[0],L=I[1],T=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(n);case 3:t=e.sent,a=t.data,t.success&&(v(a),C(void 0)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,c,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t||n){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k(a);case 5:c=e.sent,r=c.data,c.success&&(o=g(a,s),C(r.videoDetails),N(o),console.log("Starting download . . ."));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("main",{className:"container",children:[Object(d.jsxs)("section",{className:"search-section",children:[Object(d.jsx)("div",{className:"input-container ".concat(D?"animate":""),children:Object(d.jsx)("input",{type:"text",name:"input",id:"text",placeholder:"Search or paste url",spellCheck:!1,autoComplete:"off",onBlur:function(){return L(!1)},onFocus:function(){return L(!0)},value:n,onChange:function(e){return c(e.target.value)},autoFocus:!0})}),Object(d.jsx)("br",{}),Object(d.jsx)("ul",{className:"format-list",children:S.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"radio",id:e.id,name:"format",checked:s===e.id,value:e.name,onChange:function(e){return b(e.target.value)}}),Object(d.jsx)("label",{htmlFor:e.id,className:"radio-label",children:e.name})]},e.id)}))}),Object(d.jsx)(p,{onClick:function(){var e;e=n,new RegExp(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/).test(e)?U(n):T()}})]}),y&&Object(d.jsx)("section",{className:"downloading-section",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:y.title}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{src:"https://i.ytimg.com/vi/".concat(y.videoId,"/hqdefault.jpg"),alt:y.title})]})}),Object(d.jsxs)("section",{className:"suggestions-section",children:[!!f.length&&Object(d.jsx)("h1",{children:"Suggestions"}),Object(d.jsx)("div",{className:"grid",children:f.map((function(e){var t=e.snippet;return Object(d.jsx)(m,{title:t.title,videoId:e.id.videoId,description:t.description,thumbnailUrl:t.thumbnails.medium.url,handleDownload:function(){return U(e.id.videoId)}},e.id.videoId)}))})]})]}),Object(d.jsx)("footer",{className:"footer"})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),I()}},[[48,1,2]]]);
//# sourceMappingURL=main.4b70e440.chunk.js.map