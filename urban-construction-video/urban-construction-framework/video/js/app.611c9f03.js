(function(e){function t(t){for(var r,a,c=t[0],u=t[1],d=t[2],s=0,l=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d22bd14":"b94c28fc","chunk-6050f470":"1eb11064","chunk-bbd04ab6":"fd6c0919","chunk-3a3d1815":"c87e7bfa","chunk-fe208118":"772e2cd0","chunk-2dc18350":"43210d6a","chunk-b6f606e4":"bbb975c3","chunk-2142b8d0":"b3a0b881","chunk-3774bc24":"2538e9a4","chunk-c476f85a":"a2f41d96"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-6050f470":1,"chunk-bbd04ab6":1,"chunk-fe208118":1,"chunk-2dc18350":1,"chunk-b6f606e4":1,"chunk-2142b8d0":1,"chunk-3774bc24":1,"chunk-c476f85a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22bd14":"31d6cfe0","chunk-6050f470":"7356fa4d","chunk-bbd04ab6":"c79aac6b","chunk-3a3d1815":"31d6cfe0","chunk-fe208118":"1f41f4c6","chunk-2dc18350":"0a621022","chunk-b6f606e4":"bda4ada8","chunk-2142b8d0":"9c9672ad","chunk-3774bc24":"7ea972dd","chunk-c476f85a":"26e70c8d"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var d=i[c],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],s=d.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var l=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2d3f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("5530"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("2b0e")),o=n("bc3a"),i=n.n(o),c=n("a78e"),u=n.n(c),d={system:"http://"},s=d,l={timeout:1e4,responseType:"JSON",baseURL:s.system,headers:{"Content-Type":"application/json;charset=UTF-8"}},f=i.a.create(l);f.interceptors.request.use((function(e){return e.headers.Authorization=u.a.get("token"),e.data&&"post"===e.method&&!e.data.__proto__.has&&(e.data=JSON.stringify(e.data)),e}),(function(e){return Promise.reject(e)})),f.interceptors.response.use((function(e){if(0==e.data.code)return Promise.resolve(e.data);a["a"].prototype.$notice.error(e.data.msg)}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){Object.defineProperties(e.prototype,{$axios:{get:function(){return f}}})},a["a"].use(Plugin);Plugin;var h=n("3eba");n("007d"),Plugin.install=function(e){Object.defineProperties(e.prototype,{$chart:{get:function(){return{demo:function(e){var t=h.init(document.getElementById(e)),n={};t.clear(),t.resize(),t.setOption(n)}}}}})},a["a"].use(Plugin);Plugin;var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notice"},[e.reveal?n("div",{class:["default",e.animate?"fadeInDown":"fadeOutUp"],style:"background:"+e.color,domProps:{textContent:e._s(e.matter)}}):e._e()])},m=[],b={name:"notice",data:function(){return{color:"",matter:"",value:!1,reveal:!1,animate:!1}},watch:{value:function(e){var t=this;e?(this.reveal=this.animate=!0,setTimeout((function(){return t.value=!1}),4e3)):(this.animate=!1,setTimeout((function(){return t.reveal=!1}),300))}}},v=b,y=(n("9105"),n("2877")),k=Object(y["a"])(v,p,m,!1,null,"5f4f9ac5",null),g=k.exports,w={install:function(e){var t=e.extend(g),n=(new t).$mount(document.createElement("div"));document.body.appendChild(n.$el),Object.defineProperties(e.prototype,{$notice:{get:function(){return{success:function(e){n.value=!0,n.matter=e,n.color="#4CAF50"},normal:function(e){n.value=!0,n.matter=e,n.color="#009688"},error:function(e){n.value=!0,n.matter=e,n.color="#FF5722"},info:function(e){n.value=!0,n.matter=e,n.color="#00BCD4"}}}}})}};a["a"].use(w);n("2d3f");var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"","clipped-left":""}},[n("v-helmet")],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"","hide-overlay":"",color:"#2f3c4f","expand-on-hover":"","mini-variant.sync":"","disable-route-watcher":"","disable-resize-watcher":""}},[n("v-navigation")],1),n("v-content",{staticClass:"content blue-grey lighten-5"},[n("div",{staticClass:"frame"},[n("v-card",{attrs:{light:"",tile:""}}),n("div",{staticClass:"main"},[n("v-container",{staticClass:"core white",attrs:{fluid:""}},[n("router-view")],1)],1)],1)])],1)},O=[],j={name:"App",components:{"v-helmet":function(){return Promise.all([n.e("chunk-6050f470"),n.e("chunk-bbd04ab6"),n.e("chunk-3a3d1815")]).then(n.bind(null,"9d2d"))},"v-navigation":function(){return n.e("chunk-2d22bd14").then(n.bind(null,"f11d"))}}},C=j,_=(n("ba7b"),n("6544")),x=n.n(_),E=n("7496"),T=n("40dc"),S=n("b0af"),A=n("a523"),$=n("a75b"),N=n("f774"),B=Object(y["a"])(C,P,O,!1,null,"e3fdc74c",null),K=B.exports;x()(B,{VApp:E["a"],VAppBar:T["a"],VCard:S["a"],VContainer:A["a"],VContent:$["a"],VNavigationDrawer:N["a"]});var L=n("2f62"),V=(n("45fc"),n("fe95")),D={state:function(){return{current:Object(r["a"])({},V["b"]),history:[Object(r["a"])({},V["b"])]}},mutations:{current:function(e,t){e.current=t},history:function(e,t){e.history.some((function(e){return e.key===t.key}))||e.history.push(t)}},actions:{saveCurrent:function(e,t){var n=e.commit;n("current",t),n("history",t)}},getters:{myCurrent:function(e){return e.current},myHistory:function(e){return e.history}}},F=D;a["a"].use(L["a"]);var J=new L["a"].Store({modules:{source:F}}),M=n("8c4f");a["a"].use(M["a"]);var U=[{path:"/",redirect:"video"},{path:"/video",component:function(){return Promise.all([n.e("chunk-6050f470"),n.e("chunk-bbd04ab6"),n.e("chunk-fe208118"),n.e("chunk-2dc18350")]).then(n.bind(null,"e001"))}},{path:"/back",component:function(){return Promise.all([n.e("chunk-6050f470"),n.e("chunk-bbd04ab6"),n.e("chunk-fe208118"),n.e("chunk-b6f606e4")]).then(n.bind(null,"43df"))}}],q=new M["a"]({routes:U});q.beforeEach((function(e,t,n){var r=u.a.get("token");r?n():window.open("http://114.55.245.83:4396","_self")}));var z=q,I=n("f309");a["a"].use(I["a"]);var H=new I["a"]({theme:{dark:!0}});a["a"].config.productionTip=!1;var R={store:J,router:z,vuetify:H,render:function(e){return e(K)}};new a["a"](Object(r["a"])({},R)).$mount("#app")},"5edb":function(e,t,n){},9105:function(e,t,n){"use strict";var r=n("c471"),a=n.n(r);a.a},ba7b:function(e,t,n){"use strict";var r=n("5edb"),a=n.n(r);a.a},c471:function(e,t,n){},fe95:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r={name:"智慧管廊视频监控系统",menu:[{key:1,title:"实时视频",action:"mdi-dialpad",children:[{key:1.1,parentKey:1,title:"综合舱01",action:"mdi-domain",router:"/video"},{key:1.2,parentKey:1,title:"综合舱02",action:"mdi-message-text",router:"/video"}]},{key:2,title:"历史回放",action:"mdi-dialpad",children:[{key:2.1,parentKey:2,title:"综合舱01",action:"mdi-domain",router:"/back"},{key:2.2,parentKey:2,title:"综合舱02",action:"mdi-message-text",router:"/back"}]}],init:{key:1.1,parentKey:1,title:"摄像头01",action:"mdi-domain",router:""},admin:[{key:1,router:"",title:"个人中心",action:"mdi-widgets"},{key:2,router:"",title:"财富广场",action:"mdi-gavel"},{key:3,router:"",title:"回归首页",action:"mdi-home"},{key:4,router:"http://192.168.0.110:8080/#/login",title:"安全退出",action:"mdi-logout"}]},a=r.name,o=r.menu,i=r.init,c=r.admin}});
//# sourceMappingURL=app.611c9f03.js.map