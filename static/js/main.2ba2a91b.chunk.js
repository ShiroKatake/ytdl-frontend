(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),o=(n(26),n(3)),i=n.n(o),u=n(5),l=n(4),d=(n(28),n(0)),b=function(e){var t=e.disabled,n=e.onClick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{disabled:t,className:"btn-animate",onClick:n,children:"Search"})})},j=n(21),h=n.n(j),p=function(e){var t=e.author,n=e.title,a=e.videoId,c=(e.description,e.thumbnailUrl),r=e.handleDownload;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("a",{href:"https://youtube.com/watch?v=".concat(a),rel:"noopener noreferrer",target:"_blank",children:[Object(d.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(d.jsx)("div",{className:"title",children:t+" - "+h.a.decode(n)})]}),Object(d.jsx)("button",{onClick:function(){return r(a)},className:"download",children:"Download"})]})})},m=c.a.memo(p),f=n(9),v=n.n(f),O="https://shirokatake-ytdl-backend.herokuapp.com",x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mp4";return"".concat(O,"/download?v=").concat(e,"&format=").concat(t)},g=function(e){try{JSON.parse(e)}catch(t){return!1}return!0},w=function(e){return new Promise((function(t,n){var a=0,c=setInterval((function(){a>9?(clearInterval(c),n(new Error("Maximum number of attempts exceeded"))):e.readyState===e.OPEN&&(clearInterval(c),t()),a++}),200)}))},k=function(e){var t=e.match(/[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}/g);return t?t[0]:null},S=function(e){return(e/1024/1024).toFixed(2)},y=v.a.create({baseURL:O,responseType:"json"}),N=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/suggestions?search=".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/metainfo?url=".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()({url:t,method:"POST",responseType:"blob",data:{uid:n}}).then((function(e){var t,n=(t=e.headers["content-disposition"],/.*filename=['"]?([^"]+)/g.exec(t)[1]),a=window.URL.createObjectURL(new Blob([e.data])),c=document.createElement("a");c.href=a,c.setAttribute("download",n),document.body.appendChild(c),c.click(),c.remove()}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),I=n(53),E=[{id:"mp4",name:"mp4",isChecked:!0},{id:"mp3",name:"mp3"},{id:"mov",name:"mov"},{id:"flv",name:"flv"}],T=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("mp4"),s=Object(l.a)(r,2),o=s[0],j=s[1],h=Object(a.useState)([]),p=Object(l.a)(h,2),f=p[0],v=p[1],y=Object(a.useState)(null),T=Object(l.a)(y,2),B=T[0],L=T[1],P=Object(a.useState)(!1),D=Object(l.a)(P,2),R=D[0],U=D[1],J=Object(a.useState)(0),M=Object(l.a)(J,2),A=M[0],z=M[1],Z=Object(a.useState)(!0),q=Object(l.a)(Z,2),H=q[0],W=q[1],$=Object(a.useState)(0),_=Object(l.a)($,2),G=_[0],K=_[1],Q=Object(a.useState)(1),V=Object(l.a)(Q,2),X=V[0],Y=V[1],ee=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(n);case 3:t=e.sent,a=t.data,t.success&&(v(a),L(void 0)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,c,r,s,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W(!1),a=t||n){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,C(a);case 6:if(c=e.sent,r=c.data,!c.success){e.next=32;break}if(s=x(a,o),u=new WebSocket("".concat(O.replace(/^https?/i,"wss"))),l="",u.addEventListener("message",(function(e){if(k(e.data)&&(l=k(e.data)),g(e.data)){var t=JSON.parse(e.data);z(t.downloaded/t.total*100),K(t.downloaded),Y(t.total)}})),u.readyState===u.OPEN){e.next=26;break}return e.prev=15,e.next=18,w(u);case 18:u.send(l),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(15),console.error(e.t0);case 24:e.next=27;break;case 26:u.send(l);case 27:return L(r.videoDetails),console.log("Starting download . . ."),e.next=31,F(s,l);case 31:setTimeout((function(){W(!0),z(0)}),4e3);case 32:case"end":return e.stop()}}),e,null,[[15,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("main",{className:"container",children:[Object(d.jsxs)("section",{className:"search-section",children:[Object(d.jsx)("div",{className:"input-container ".concat(R?"animate":""),children:Object(d.jsx)("input",{type:"text",name:"input",id:"text",placeholder:"Search or paste url",spellCheck:!1,autoComplete:"off",onBlur:function(){return U(!1)},onFocus:function(){return U(!0)},value:n,onChange:function(e){return c(e.target.value)},autoFocus:!0})}),Object(d.jsx)("br",{}),Object(d.jsx)(I.a,{hidden:H,striped:!0,variant:"success",now:A,label:"".concat(100!==A?"Fetching . . .":"Ready! "," ").concat(S(G),"MB /").concat(S(X),"MB"),style:{width:"85%",height:"30px",lineHeight:"30px"}}),Object(d.jsx)("ul",{className:"format-list",children:E.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"radio",id:e.id,name:"format",checked:o===e.id,value:e.name,onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("label",{htmlFor:e.id,className:"radio-label",children:e.name})]},e.id)}))}),Object(d.jsx)(b,{disabled:!H,onClick:function(){var e;e=n,new RegExp(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.?be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((?:\w|-){11})(?:&\S*)?(?:\?\S*)?$/).test(e)?te(n):ee()}})]}),B&&Object(d.jsx)("section",{className:"downloading-section",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:B.title}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{src:"https://i.ytimg.com/vi/".concat(B.videoId,"/hqdefault.jpg"),alt:B.title})]})}),Object(d.jsxs)("section",{className:"suggestions-section",children:[!!f.length&&Object(d.jsx)("h1",{children:"Suggestions"}),Object(d.jsx)("div",{className:"grid",children:f.map((function(e){return Object(d.jsx)(m,{author:e.author.name,title:e.title,videoId:e.id,thumbnailUrl:e.bestThumbnail.url,handleDownload:function(){return te(e.id)}},e.id)}))})]})]}),Object(d.jsx)("footer",{className:"footer"})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),B()}},[[51,1,2]]]);
//# sourceMappingURL=main.2ba2a91b.chunk.js.map