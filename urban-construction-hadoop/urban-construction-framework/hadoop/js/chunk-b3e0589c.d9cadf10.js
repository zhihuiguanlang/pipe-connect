(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3e0589c"],{"133f":function(t,e,i){},"716d":function(t,e,i){},"9d2d":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{staticClass:"helmet",attrs:{justify:"space-between"}},[s("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[s("v-img",{attrs:{src:i("9d64"),width:"40",height:"40","aspect-ratio":"1"}}),s("div",{staticClass:"font-weight-medium ml-4"},[t._v("****")]),s("v-divider",{staticClass:"ml-4",attrs:{inset:"",vertical:""}}),s("div",{staticClass:"font-weight-medium ml-4 grey--text text--lighten-1"},[t._v(t._s(t.name))])],1),s("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[s("v-btn",{attrs:{icon:"",color:"grey"}},[s("v-icon",{attrs:{size:"17"},domProps:{textContent:t._s("mdi-lock")}})],1),s("v-menu",{attrs:{bottom:"",origin:"center center",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("div",t._g({staticClass:"d-flex align-center"},i),[s("v-btn",{attrs:{text:"",color:"grey"}},[s("v-icon",{attrs:{left:"",size:"22"},domProps:{textContent:t._s("mdi-account-circle")}}),t._v(" "+t._s(t.roles)+" "),s("v-icon",{attrs:{right:"",size:"22"},domProps:{textContent:t._s("mdi-format-list-bulleted-square")}})],1)],1)]}}])},[s("v-list",[s("v-list-item-group",{model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.admin,(function(e,i){return s("v-list-item",{key:i,attrs:{value:e.key},on:{click:function(i){return t.jump(e)}}},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s(e.action)}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1)],1)],1)},n=[],o=i("e04f"),a=i.n(o),r=i("fe95"),h={name:"helmet",data:function(){return{name:r["d"],admin:r["a"],roles:"",item:0}},created:function(){this.role()},methods:{role:function(){var t=this;this.$axios.get("/api-user/users/current").then((function(e){e&&(t.roles=e.data.nickname)}))},jump:function(t){var e=this;4==t.key?this.$axios.post("/api-uaa/oauth/remove/token",{}).then((function(i){i&&(a.a.remove("token",{expires:7,path:"/"}),e.$notice.success("退出登录"),t.router&&window.open(t.router,"_self"))})):t.router&&this.$router.push(t.router)}}},c=h,l=i("4023"),d=i("2c44"),u=i.n(d),f=i("bab2"),m=i("c729"),p=(i("716d"),i("4c5e")),v=p["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}}),g=i("9bae"),b=i("ebaa"),w=i("4bd5"),x=i("351e"),y=i("9070"),T=i("89dd"),k=i("c8c9"),A=(i("133f"),i("c86c")),O=i("bbed"),C=i("745f"),I=i("de4a"),L=i("2f45"),W=i("5d0c"),$=i("b1cd"),M=i("31a4"),_=i("4260");const B=Object(M["a"])($["a"],W["a"],O["a"]);var H=B.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width);let n=0;if(n+=this.left?i-(s-t.width):i,this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));n+=this.left?-e:t.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return Object(_["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return Object(_["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),i=this.pageYOffset+e,s=this.dimensions.activator,n=this.dimensions.content.height,o=t+n,a=i<o;return a&&this.offsetOverflow&&s.top>n?t=this.pageYOffset+(s.top-n):a&&!this.allowOverflow?t=i-n-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return;let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=O["a"].options.methods.genActivatorListeners.call(this),e=t.click;return t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY},t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek(t){requestAnimationFrame(()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()})},startTransition(){return new Promise(t=>requestAnimationFrame(()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek(()=>{this.$refs.content&&(t.content=this.measure(this.$refs.content)),this.dimensions=t})}}}),Y=i("e59e"),S=i("58c7"),D=i("ef05"),F=i("674d"),N=i("fa8a");const P=Object(M["a"])(I["a"],C["a"],L["a"],H,Y["a"],S["a"],p["a"]);var j=P.extend({name:"v-menu",provide(){return{isInMenu:!0,theme:this.theme}},directives:{ClickOutside:D["a"],Resize:F["a"]},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(_["f"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":Object(_["f"])(this.maxHeight);return t||"0"},calculatedMaxWidth(){return Object(_["f"])(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return Object(_["f"])(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(_["f"])(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?Object(_["f"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find(t=>t.tabIndex>-1))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=e.offsetTop-e.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(N["d"])("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame(()=>{this.startTransition().then(()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))})})},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==_["p"].tab){if(t.keyCode===_["p"].down)this.nextTile();else if(t.keyCode===_["p"].up)this.prevTile();else{if(t.keyCode!==_["p"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=O["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=H.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:()=>{this.isActive=!1},args:{closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler(){this.runDelay("open",()=>{this.hasJustFocused||(this.hasJustFocused=!0,this.isActive=!0)})},mouseLeaveHandler(t){this.runDelay("close",()=>{this.$refs.content.contains(t.relatedTarget)||requestAnimationFrame(()=>{this.isActive=!1,this.callDeactivate()})})},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},onKeyDown(t){if(t.keyCode===_["p"].esc){setTimeout(()=>{this.isActive=!1});const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}else!this.isActive&&[_["p"].up,_["p"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick(()=>this.changeListIndex(t))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent(()=>[this.$createElement(A["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])])}}),z=i("f3e3"),X=Object(l["a"])(c,s,n,!1,null,null,null);e["default"]=X.exports;u()(X,{VBtn:f["a"],VCol:m["a"],VDivider:v,VIcon:g["a"],VImg:b["a"],VList:w["a"],VListItem:x["a"],VListItemContent:y["a"],VListItemGroup:T["a"],VListItemIcon:k["a"],VListItemTitle:y["b"],VMenu:j,VRow:z["a"]})},"9d64":function(t,e,i){t.exports=i.p+"img/logo.db666bc7.png"},fe95:function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return r}));var s={name:"智慧管廊大数据分析平台",menu:[],init:{key:1,title:"",action:"mdi-domain"},admin:[{key:1,router:"",title:"个人中心",action:"mdi-widgets"},{key:2,router:"",title:"财富广场",action:"mdi-gavel"},{key:3,router:"",title:"回归首页",action:"mdi-home"},{key:4,router:"http://192.168.0.110:8080/#/login",title:"安全退出",action:"mdi-logout"}]},n=s.name,o=s.menu,a=s.init,r=s.admin}}]);
//# sourceMappingURL=chunk-b3e0589c.d9cadf10.js.map