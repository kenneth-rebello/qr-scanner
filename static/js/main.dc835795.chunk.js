(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,n,t){e.exports=t(47)},31:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(20),c=t.n(r),i=(t(31),t(7)),l=t(5),s=t(10),d=t(21),u=t.n(d),m=function(){var e=Object(a.useState)("No image detected"),n=Object(s.a)(e,2),t=n[0],r=n[1];return o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"container"},o.a.createElement(u.a,{delay:300,onError:function(e){alert(e)},onScan:function(e){e&&r(e)},style:{width:"100%"}})),o.a.createElement("p",null,t))},f=function(){return o.a.createElement("div",{className:"home"},o.a.createElement("h1",{className:"title"},"QR Code App"),o.a.createElement("div",{className:"btn-box"},o.a.createElement("button",{className:"btn"},o.a.createElement(i.b,{to:"/scanner"},"Open QR Scanner")),o.a.createElement("button",{className:"btn"},o.a.createElement(i.b,{to:"/generator"},"Open QR Generator"))))},h=t(25),p=t.n(h),g=function(){var e=Object(a.useState)("No text entered yet"),n=Object(s.a)(e,2),t=n[0],r=n[1];return o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"input-box"},o.a.createElement("input",{type:"text",onChange:function(e){return function(e){r(e.target.value)}(e)},value:"No text entered yet"===t?"":t,placeholder:"Enter text to convert to QRCode here"})),o.a.createElement(p.a,{id:"qrcode",value:t,size:300,level:"H",includeMargin:!0}),o.a.createElement("button",{className:"btn",onClick:function(){var e=document.getElementById("qrcode").toDataURL("image/png").replace("image/png","image/octet-stream"),n=document.getElementById("download-link");n.href=e,n.download="".concat(t,".png"),n.click(),r("")}},"Download QR Code"),o.a.createElement("a",{id:"download-link",style:{display:"none"},href:"/generator"},"Hidden Anchor"))},v=function(){return o.a.createElement(i.a,{basename:"/"},o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.b,{to:"/scanner"},"QR Scanner")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/generator"},"QR Generator"))),o.a.createElement(l.a,{exact:!0,path:"/",component:f}),o.a.createElement(l.a,{exact:!0,path:"/scanner",component:m}),o.a.createElement(l.a,{exact:!0,path:"/generator",component:g})))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/qr-scanner",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/qr-scanner","/service-worker.js");E?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(n,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.dc835795.chunk.js.map