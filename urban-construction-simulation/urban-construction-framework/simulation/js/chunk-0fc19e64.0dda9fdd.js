(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fc19e64"],{2661:function(t,e,s){},3245:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"history"},[s("v-btn",{attrs:{icon:"",color:"grey"}},[s("v-icon",{attrs:{size:"24"},domProps:{textContent:t._s("mdi-home")}})],1),s("v-tabs",{staticClass:"content",attrs:{grow:"",light:"","show-arrows":"",color:"teal","center-active":"",value:t.current,"slider-color":"teal lighten-3","prev-icon":"mdi-arrow-left-bold-box-outline","next-icon":"mdi-arrow-right-bold-box-outline"}},t._l(t.myHistory,(function(e){return s("v-tab",{key:e.id,attrs:{light:""},on:{click:function(s){return t.jump(e)}}},[s("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-dialpad")}}),t._v(" "+t._s(e.name)+" ")],1)})),1)],1)},r=[],n=(s("3466"),s("0eaa")),o=s("ae8c"),a={name:"history",computed:Object(n["a"])({current:function(){var t=this;return this.myHistory.findIndex((function(e){return e.id==t.myCurrent.id}))}},Object(o["c"])(["myCurrent","myHistory"])),methods:Object(n["a"])({jump:function(t){this.saveCurrent(t),t.router&&this.$router.push(t.router)}},Object(o["b"])(["saveCurrent"]))},l=a,h=(s("fe0b"),s("4023")),c=s("aeb5"),d=s.n(c),u=s("b2a6"),f=s("f809"),v=s("6c31"),p=s("952d"),m=s("cb4d"),g=s("9a53"),w=s("601e");const b=Object(w["a"])(p["a"],Object(v["a"])("tabsBar"),m["a"]);var x=b.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...p["a"].options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted(){this.onRouteChange()},methods:{click(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.attrs={...s.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:0},s.on={...s.on,keydown:t=>{t.keyCode===g["p"].enter&&this.click(t),this.$emit("keydown",t)}},t(e,s,this.$slots.default)}}),y=(s("bc49"),s("51f5"),s("e16b")),$=s("945d"),C=s("e9e0"),O=s("9fe8"),I=s("65bb"),S=s("f0d2"),k=s("552c");const B=Object(w["a"])(C["a"],O["a"]).extend({name:"base-slide-group",directives:{Resize:I["a"],Touch:S["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...C["a"].options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:Object(k["d"])("true","mobile",this);case"mobile":return this.isMobile||this.isOverflowing;default:return!this.isMobile&&this.isOverflowing}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,i=this["has"+s];return this.showArrows||i?this.$createElement(y["a"],{props:{disabled:!i}},this[e+"Icon"]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement($["b"],[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,s,i){const r=s?-1:1,n=r*i+("prev"===t?-1:1)*e.wrapper;return r*Math.max(Math.min(n,e.content-e.wrapper),0)},onAffixClick(t){this.$emit("click:"+t),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,s,i){const r=t.clientWidth,n=s?e.content-t.offsetLeft-r:t.offsetLeft;s&&(i=-i);const o=e.wrapper+i,a=r+n,l=.4*r;return n<i?i=Math.max(n-l,0):o<a&&(i=Math.min(i-(o-a-l),e.content-e.wrapper)),s?-i:i},calculateCenteredOffset(t,e,s){const{offsetLeft:i,clientWidth:r}=t;if(s){const t=e.content-i-r/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+r/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});B.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var A=s("530d"),_=Object(w["a"])(B,A["a"],m["a"]).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...B.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=B.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const s=this.items,i=t.path,r=e.path;let n=!1,o=!1;for(const a of s)if(a.to===i?n=!0:a.to===r&&(o=!0),n&&o)break;!n&&o&&(this.internalValue=void 0)}},render(t){const e=B.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),T=(s("4a3e"),s("3f61")),R=C["a"].extend({name:"v-window",provide(){return{windowGroup:this}},directives:{Touch:S["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...C["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,s=e?"-reverse":"";return`v-window-${t}${s}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,s){return this.$createElement("div",{staticClass:"v-window__"+t},[this.$createElement(T["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel."+t)},on:{click:()=>{this.changedByDelimiters=!0,s()}}},[this.$createElement(y["a"],{props:{large:!0}},e)])])},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const s=this.genIcon("prev",e,this.prev);s&&t.push(s)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){const e=this.genIcon("next",s,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,s=this.items[e];return s.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,s=this.items[e];return s.disabled?this.getPrevIndex(e):e},next(){if(this.isReverse=this.$vuetify.rtl,!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(this.isReverse=!this.$vuetify.rtl,!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),j=R.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...R.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||C["a"].options.methods.getValue.call(this,t,e)}}}),N=s("31ce"),P=Object(w["a"])(N["a"]).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),V=s("9078");const W=Object(w["a"])(N["a"],V["a"],m["a"]);var z=W.extend().extend({name:"v-tabs",directives:{Resize:I["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:Object(g["f"])(this.slider.height),left:this.isReversed?void 0:Object(g["f"])(this.slider.left),right:this.isReversed?Object(g["f"])(this.slider.right):void 0,top:this.vertical?Object(g["f"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(g["f"])(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(t,e){const s={style:{height:Object(g["f"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(_,s,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(j,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(P,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const s=[],i=[],r=this.$slots.default||[],n=r.length;for(let o=0;o<n;o++){const n=r[o];if(n.componentOptions)switch(n.componentOptions.Ctor.options.name){case"v-tabs-slider":e=n;break;case"v-tabs-items":t=n;break;case"v-tab-item":s.push(n);break;default:i.push(n)}else i.push(n)}return{tab:i,slider:e,items:t,item:s}}},render(t){const{tab:e,slider:s,items:i,item:r}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,s),this.genItems(i,r)])}}),E=Object(h["a"])(l,i,r,!1,null,"4414f5e0",null);e["default"]=E.exports;d()(E,{VBtn:u["a"],VIcon:f["a"],VTab:x,VTabs:z})},3466:function(t,e,s){"use strict";var i=s("1c8b"),r=s("5dfd").findIndex,n=s("258f"),o=s("ff9c"),a="findIndex",l=!0,h=o(a);a in[]&&Array(1)[a]((function(){l=!1})),i({target:"Array",proto:!0,forced:l||!h},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(a)},"3f61":function(t,e,s){"use strict";var i=s("b2a6");e["a"]=i["a"]},"4a3e":function(t,e,s){},"51f5":function(t,e,s){},bc49:function(t,e,s){},fe0b:function(t,e,s){"use strict";var i=s("2661"),r=s.n(i);r.a}}]);
//# sourceMappingURL=chunk-0fc19e64.0dda9fdd.js.map