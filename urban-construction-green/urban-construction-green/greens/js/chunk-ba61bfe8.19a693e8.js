(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba61bfe8"],{"0fd9":function(t,e,i){"use strict";i("99af"),i("4160"),i("caad"),i("13d5"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("159b"),i("ddb0");var n=i("ade3"),o=i("5530"),a=(i("4b85"),i("2b0e")),s=i("d9f7"),r=i("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(i,n){return i[t+Object(r["r"])(n)]=e(),i}),{})}var h=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:h}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:f}})),m=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},p=u("alignContent",(function(){return{type:String,default:null,validator:m}})),g={align:Object.keys(d),justify:Object.keys(v),alignContent:Object.keys(p)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){var n=b[t];if(null!=i){if(e){var o=e.replace(t,"");n+="-".concat(o)}return n+="-".concat(i),n.toLowerCase()}}var x=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:Object(o["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d,{justify:{type:String,default:null,validator:f}},v,{alignContent:{type:String,default:null,validator:m}},p),render:function(t,e){var i=e.props,o=e.data,a=e.children,r="";for(var c in i)r+=String(i[c]);var l=x.get(r);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var n=i[t],o=y(e,t,n);o&&l.push(o)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(n["a"])(t,"align-".concat(i.align),i.align),Object(n["a"])(t,"justify-".concat(i.justify),i.justify),Object(n["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),x.set(r,l)}(),t(i.tag,Object(s["a"])(o,{staticClass:"row",class:l}),a)}})},"4ec9":function(t,e,i){"use strict";var n=i("6d61"),o=i("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},"62ad":function(t,e,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var n=i("ade3"),o=i("5530"),a=(i("4b85"),i("2b0e")),s=i("d9f7"),r=i("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(r["r"])(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return c.reduce((function(t,e){return t["order"+Object(r["r"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(h)};function f(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var v=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:Object(o["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},h,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,o=e.data,a=e.children,r=(e.parent,"");for(var c in i)r+=String(i[c]);var l=v.get(r);return l||function(){var t,e;for(e in l=[],d)d[e].forEach((function(t){var n=i[t],o=f(e,t,n);o&&l.push(o)}));var o=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!o||!i.cols},Object(n["a"])(t,"col-".concat(i.cols),i.cols),Object(n["a"])(t,"offset-".concat(i.offset),i.offset),Object(n["a"])(t,"order-".concat(i.order),i.order),Object(n["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),v.set(r,l)}(),t(i.tag,Object(s["a"])(o,{class:l}),a)}})},6566:function(t,e,i){"use strict";var n=i("9bf2").f,o=i("7c73"),a=i("e2cc"),s=i("0366"),r=i("19aa"),c=i("2266"),l=i("7dd0"),u=i("2626"),h=i("83ab"),d=i("f183").fastKey,f=i("69f3"),v=f.set,m=f.getterFor;t.exports={getConstructor:function(t,e,i,l){var u=t((function(t,n){r(t,u,e),v(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),h||(t.size=0),void 0!=n&&c(n,t[l],t,i)})),f=m(e),p=function(t,e,i){var n,o,a=f(t),s=g(t,e);return s?s.value=i:(a.last=s={index:o=d(e,!0),key:e,value:i,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=s),n&&(n.next=s),h?a.size++:t.size++,"F"!==o&&(a.index[o]=s)),t},g=function(t,e){var i,n=f(t),o=d(e);if("F"!==o)return n.index[o];for(i=n.first;i;i=i.next)if(i.key==e)return i};return a(u.prototype,{clear:function(){var t=this,e=f(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,h?e.size=0:t.size=0},delete:function(t){var e=this,i=f(e),n=g(e,t);if(n){var o=n.next,a=n.previous;delete i.index[n.index],n.removed=!0,a&&(a.next=o),o&&(o.previous=a),i.first==n&&(i.first=o),i.last==n&&(i.last=a),h?i.size--:e.size--}return!!n},forEach:function(t){var e,i=f(this),n=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),a(u.prototype,i?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),h&&n(u.prototype,"size",{get:function(){return f(this).size}}),u},setStrong:function(t,e,i){var n=e+" Iterator",o=m(e),a=m(n);l(t,e,(function(t,e){v(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),u(e)}}},"6d61":function(t,e,i){"use strict";var n=i("23e7"),o=i("da84"),a=i("94ca"),s=i("6eeb"),r=i("f183"),c=i("2266"),l=i("19aa"),u=i("861d"),h=i("d039"),d=i("1c7e"),f=i("d44e"),v=i("7156");t.exports=function(t,e,i){var m=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),g=m?"set":"add",b=o[t],y=b&&b.prototype,x=b,O={},w=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:function(t,i){return e.call(this,0===t?0:t,i),this})};if(a(t,"function"!=typeof b||!(p||y.forEach&&!h((function(){(new b).entries().next()})))))x=i.getConstructor(e,t,m,g),r.REQUIRED=!0;else if(a(t,!0)){var A=new x,k=A[g](p?{}:-0,1)!=A,T=h((function(){A.has(1)})),C=d((function(t){new b(t)})),j=!p&&h((function(){var t=new b,e=5;while(e--)t[g](e,e);return!t.has(-0)}));C||(x=e((function(e,i){l(e,x,t);var n=v(new b,e,x);return void 0!=i&&c(i,n[g],n,m),n})),x.prototype=y,y.constructor=x),(T||j)&&(w("delete"),w("has"),m&&w("get")),(j||k)&&w(g),p&&y.clear&&delete y.clear}return O[t]=x,n({global:!0,forced:x!=b},O),f(x,t),p||i.setStrong(x,t,m),x}},"8ce9":function(t,e,i){},"9d2d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"helmet",attrs:{justify:"space-between"}},[n("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[n("v-img",{attrs:{src:i("9d64"),width:"40",height:"40","aspect-ratio":"1"}}),n("div",{staticClass:"font-weight-medium ml-4"},[t._v("****")]),n("v-divider",{staticClass:"ml-4",attrs:{inset:"",vertical:""}}),n("div",{staticClass:"font-weight-medium ml-4 grey--text text--lighten-1"},[t._v(t._s(t.name))])],1),n("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[n("v-btn",{attrs:{icon:"",color:"grey"}},[n("v-icon",{attrs:{size:"17"},domProps:{textContent:t._s("mdi-lock")}})],1),n("v-menu",{attrs:{bottom:"",origin:"center center",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("div",t._g({staticClass:"d-flex align-center"},i),[n("v-btn",{attrs:{text:"",color:"grey"}},[n("v-icon",{attrs:{left:"",size:"22"},domProps:{textContent:t._s("mdi-account-circle")}}),t._v(" "+t._s(t.roles)+" "),n("v-icon",{attrs:{right:"",size:"22"},domProps:{textContent:t._s("mdi-format-list-bulleted-square")}})],1)],1)]}}])},[n("v-list",[n("v-list-item-group",{model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.admin,(function(e,i){return n("v-list-item",{key:i,attrs:{value:e.key},on:{click:function(i){return t.jump(e)}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.action)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1)],1)],1)},o=[],a=i("a78e"),s=i.n(a),r={name:"智慧管廊绿色节能系统",menu:[],init:{key:1,title:"",action:"mdi-domain",router:""},admin:[{key:1,router:"",title:"个人中心",action:"mdi-widgets"},{key:2,router:"",title:"财富广场",action:"mdi-gavel"},{key:3,router:"",title:"回归首页",action:"mdi-home"},{key:4,router:"http://192.168.0.110:8080/#/login",title:"安全退出",action:"mdi-logout"}]},c=r.name,l=(r.menu,r.init,r.admin),u={name:"helmet",data:function(){return{name:c,admin:l,roles:"",item:0}},created:function(){this.role()},methods:{role:function(){var t=this;this.$axios.get("/api-user/users/current").then((function(e){e&&(t.roles=e.data.nickname)}))},jump:function(t){var e=this;4==t.key?this.$axios.post("/api-uaa/oauth/remove/token",{}).then((function(i){i&&(s.a.remove("token",{expires:7,path:"/"}),e.$notice.success("退出登录"),t.router&&window.open(t.router,"_self"))})):t.router&&this.$router.push(t.router)}}},h=u,d=i("2877"),f=i("6544"),v=i.n(f),m=i("8336"),p=i("62ad"),g=i("5530"),b=(i("8ce9"),i("7560")),y=b["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(g["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(g["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),x=i("132d"),O=i("adda"),w=i("8860"),A=i("da13"),k=i("5d23"),T=i("1baa"),C=i("34c3"),j=(i("99af"),i("7db0"),i("a630"),i("caad"),i("c975"),i("a9e3"),i("2532"),i("3ca3"),i("498a"),i("ade3")),I=i("2909"),$=(i("ee6f"),b["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:b["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})),S=(i("45fc"),i("b0c0"),i("b64b"),i("53ca")),N=i("2b0e"),L=N["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}}),D=i("f2e7"),E=i("58df"),M=i("80d2"),B=i("d9bd"),_=Object(E["a"])(L,D["a"]),W=_.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(S["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}},watch:{activator:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(M["k"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(B["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(M["j"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive},e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var i=this.internalActivator?this.$el:document;e="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var n=this.activatorNode[0].componentInstance;e=n&&n.$options.mixins&&n.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?n.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(M["j"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}}),H=i("b848"),z=(i("4160"),i("159b"),i("9d65"));function Y(t){var e=Object(S["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var F=Object(E["a"])(z["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:Y},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(M["i"])(this.$vnode,"context.$options._scopeId");return t&&Object(j["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(B["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}}),V=(i("d3b7"),i("fe6c")),P=N["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(M["l"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(M["l"])(e)],n=[].concat(Object(I["a"])(document.getElementsByClassName("v-menu__content--active")),Object(I["a"])(document.getElementsByClassName("v-dialog__content--active"))),o=0;o<n.length;o++)t.includes(n[o])||i.push(Object(M["l"])(n[o]));return Math.max.apply(Math,i)}}}),X=Object(E["a"])(P,V["a"],W),R=X.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),o=0;if(o+=this.left?i-(n-t.width):i,this.offsetX){var a=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));o+=this.left?-a:t.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(M["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(M["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,o=this.dimensions.content.height,a=t+o,s=i<a;return s&&this.offsetOverflow&&n.top>o?t=this.pageYOffset+(n.top-o):s&&!this.allowOverflow?t=i-o-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=W.options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(g["a"])({},this.dimensions.activator),content:Object(g["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}}),q=N["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}}),J=i("a293"),Z=i("dc22"),K=Object(E["a"])(H["a"],L,F,R,q,D["a"],b["a"]),G=K.extend({name:"v-menu",provide:function(){return{isInMenu:!0,theme:this.theme}},directives:{ClickOutside:J["a"],Resize:Z["a"]},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(M["f"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(M["f"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(M["f"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(M["f"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(M["f"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(M["f"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(B["d"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==M["m"].tab){if(t.keyCode===M["m"].down)this.nextTile();else if(t.keyCode===M["m"].up)this.prevTile();else{if(t.keyCode!==M["m"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=W.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(g["a"])({},t,{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=R.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:function(){t.isActive=!1},args:{closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(I["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(g["a"])({},this.getScopeIdAttrs(),{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(g["a"])({},this.rootThemeClasses,Object(j["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0,t.isActive=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},onKeyDown:function(t){var e=this;if(t.keyCode===M["m"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[M["m"].up,M["m"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement($,{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}}),U=i("0fd9"),Q=Object(d["a"])(h,n,o,!1,null,null,null);e["default"]=Q.exports;v()(Q,{VBtn:m["a"],VCol:p["a"],VDivider:y,VIcon:x["a"],VImg:O["a"],VList:w["a"],VListItem:A["a"],VListItemContent:k["a"],VListItemGroup:T["a"],VListItemIcon:C["a"],VListItemTitle:k["b"],VMenu:G,VRow:U["a"]})},"9d64":function(t,e,i){t.exports=i.p+"img/logo.db666bc7.png"},ee6f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-ba61bfe8.19a693e8.js.map