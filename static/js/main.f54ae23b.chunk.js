(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),o=(n(26),n(2)),i=n.n(o),u=n(5),l=n(4),d=(n(28),n(29),n(0)),p=function(e){var t=e.main,n=e.children,a=e.isLoading,c=e.onClick;return Object(d.jsxs)("button",{disabled:a,className:"btn-animate ".concat(t?"main":""," ").concat(a?"loading":""),onClick:c,children:[Object(d.jsx)("p",{children:n}),Object(d.jsx)("div",{className:"spinner"})]})},b=n(21),j=n.n(b),f=(n(33),function(e){var t=e.suggestions,n=e.isLoading,a=e.download;return Object(d.jsx)("div",{className:"grid",children:t.map((function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("a",{href:"https://youtube.com/watch?v=".concat(e.id),rel:"noopener noreferrer",target:"_blank",children:[Object(d.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(e.bestThumbnail.url,")")}}),Object(d.jsx)("div",{className:"title",children:e.author.name+" - "+j.a.decode(e.title)})]}),Object(d.jsx)(p,{isLoading:n,onClick:function(){return a(e.id)},children:"Download"})]},e.id)}))})}),h=(n(34),[{id:"mp4",name:"mp4"},{id:"mp3",name:"mp3"},{id:"mov",name:"mov"},{id:"flv",name:"flv"}]),m=function(e){var t=e.downloadFormat,n=e.setDownloadFormat;return Object(d.jsx)("ul",{className:"format-list",children:h.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"radio",id:e.id,name:"format",checked:t===e.id,value:e.id,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("label",{htmlFor:e.id,className:"radio-label",children:e.name})]},e.id)}))})},v=(n(35),function(e){var t=e.inputText,n=e.setInputText,c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],o=r[1];return Object(d.jsx)("div",{className:"input-container ".concat(s?"shadow":""),children:Object(d.jsx)("input",{type:"text",name:"input",id:"text",placeholder:"Search or paste url",spellCheck:!1,autoComplete:"off",onBlur:function(){return o(!1)},onFocus:function(){return o(!0)},value:t,onChange:function(e){return n(e.target.value)},autoFocus:!0})})}),x=(n(36),n(9)),O=n.n(x),g="https://localhost:4000",w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mp4";return"".concat(g,"/download?v=").concat(e,"&format=").concat(t)},k=function(e){return new RegExp(/^https?:\/\/(?:music\.|www\.)?(?:youtu\.?be\/|youtube\.com\/)playlist\?list=([a-zA-Z0-9\-_]{34})$/).test(e)},y=function(e){try{JSON.parse(e)}catch(t){return!1}return!0},S=function(e){return new Promise((function(t,n){var a=0,c=setInterval((function(){a>9?(clearInterval(c),n(new Error("Maximum number of attempts exceeded"))):e.readyState===e.OPEN&&(clearInterval(c),t()),a++}),200)}))},N=function(e){var t=e.match(/[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}/g);return t?t[0]:null},F=function(e){return(e/1024/1024).toFixed(2)},C=O.a.create({baseURL:g,responseType:"json"}),L=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/suggestions?search=".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/metainfo?url=".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/playlist?pl=".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()({url:t,method:"POST",responseType:"blob",data:{uid:n},onDownloadProgress:function(e){var t=75+.25*Math.round(100*e.loaded/e.total);a(t),console.log(t)}}).then((function(e){var t,n=(t=e.headers["content-disposition"],/.*filename=['"]?([^"]+)/g.exec(t)[1]),a=window.URL.createObjectURL(new Blob([e.data])),c=document.createElement("a");c.href=a,c.setAttribute("download",n),document.body.appendChild(c),c.click(),c.remove()}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n,a){return e.apply(this,arguments)}}(),P=n(58),B=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("mp4"),s=Object(l.a)(r,2),o=s[0],b=s[1],j=Object(a.useState)([]),h=Object(l.a)(j,2),x=h[0],O=h[1],C=Object(a.useState)([]),B=Object(l.a)(C,2),D=B[0],R=B[1],M=Object(a.useState)(null),A=Object(l.a)(M,2),J=A[0],z=A[1],U=Object(a.useState)(!1),Z=Object(l.a)(U,2),$=Z[0],_=Z[1],q=Object(a.useState)(0),H=Object(l.a)(q,2),W=H[0],G=H[1],K=Object(a.useState)(!0),Q=Object(l.a)(K,2),V=Q[0],X=Q[1],Y=Object(a.useState)(0),ee=Object(l.a)(Y,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(1),ce=Object(l.a)(ae,2),re=ce[0],se=ce[1],oe=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(!0),t=n,!new RegExp(/^(?:https?:\/\/)?(?:music\.|www\.)?(?:youtu\.?be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((?:\w|-){11})(?:&\S*)?(?:\?\S*)?$/).test(t)){e.next=6;break}return e.next=4,le(n);case 4:e.next=12;break;case 6:if(!k(n)){e.next=10;break}ue(),e.next=12;break;case 10:return e.next=12,ie();case 12:_(!1);case 13:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(n);case 3:t=e.sent,a=t.data,t.success&&(O(a),R([]),z(void 0)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(n);case 3:t=e.sent,a=t.data,t.success&&(R(a.items),O([]),z(void 0)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,c,r,s,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(!0),X(!1),a=t||n){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,T(a);case 7:if(c=e.sent,r=c.data,!c.success){e.next=34;break}if(s=w(a,o),u=new WebSocket("".concat(g.replace(/^https?/i,"wss"))),l="",u.addEventListener("message",(function(e){if(N(e.data)&&(l=N(e.data)),y(e.data)){var t=JSON.parse(e.data);G(t.downloaded/t.total*75),ne(t.downloaded),se(t.total)}})),u.readyState===u.OPEN){e.next=27;break}return e.prev=16,e.next=19,S(u);case 19:u.send(l),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(16),console.error(e.t0);case 25:e.next=28;break;case 27:u.send(l);case 28:return z(r.videoDetails),console.log("Starting download . . ."),e.next=32,E(s,l,G);case 32:_(!1),setTimeout((function(){X(!0),G(0)}),5e3);case 34:case"end":return e.stop()}}),e,null,[[16,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("section",{className:"search-section",children:[Object(d.jsx)(v,{inputText:n,setInputText:c}),Object(d.jsx)(P.a,{hidden:V,striped:!0,variant:"success",now:W,label:"".concat(function(e){var t="Fetching . . .";return e>75&&(t="Preparing download . . ."),100===e&&(t="Ready!"),t}(W)," ").concat(F(te),"MB /").concat(F(re),"MB"),style:{width:"100%",height:"30px",lineHeight:"30px"}}),Object(d.jsx)(m,{downloadFormat:o,setDownloadFormat:b}),Object(d.jsx)(p,{main:!0,isLoading:$,onClick:oe,children:"Search"})]}),J&&Object(d.jsx)("section",{className:"downloading-section",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:J.title}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{src:"https://i.ytimg.com/vi/".concat(J.videoId,"/hqdefault.jpg"),alt:J.title})]})}),Object(d.jsxs)("section",{className:"suggestions-section",children:[!!x.length&&Object(d.jsx)("h1",{children:"Suggestions"}),Object(d.jsx)(f,{suggestions:x,isLoading:$,download:le})]}),Object(d.jsxs)("section",{className:"playlist-section",children:[!!D.length&&Object(d.jsx)("h1",{children:"Suggestions"}),Object(d.jsx)(f,{suggestions:D,isLoading:$,download:le})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),D()}},[[56,1,2]]]);
//# sourceMappingURL=main.f54ae23b.chunk.js.map