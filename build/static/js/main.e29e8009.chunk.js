(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,n,t){e.exports=t(37)},26:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(15),c=t.n(r),i=(t(26),t(9)),l=t(5),s=t(20),u=t(16),d=t.n(u),f=function(){var e=Object(a.useState)("No image detected"),n=Object(s.a)(e,2),t=n[0],r=n[1];return o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"container"},o.a.createElement(d.a,{delay:300,onError:function(e){alert(e)},onScan:function(e){e&&r(e)},style:{width:"100%"}})),o.a.createElement("p",null,t))},m=function(){return o.a.createElement("div",{className:"home"},o.a.createElement("h1",{className:"title"},"QR Scanner"),o.a.createElement("button",{className:"btn"},o.a.createElement(i.b,{to:"/scanner"},"Open QR Scanner")))},h=function(){return o.a.createElement(i.a,{basename:"/"},o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.b,{to:"/scanner"},"Open Scanner"))),o.a.createElement(l.a,{exact:!0,path:"/",component:m}),o.a.createElement(l.a,{exact:!0,path:"/scanner",component:f})))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-qr-scanner",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-qr-scanner","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(n,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.e29e8009.chunk.js.map