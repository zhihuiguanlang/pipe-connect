(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21c865ba"],{"0791":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"norm"},[i("div",{staticClass:"handle"},[i("v-select",{staticClass:"select",attrs:{light:"",dense:"",outlined:"",items:t.branch,label:"选择部门","item-value":"id","item-text":"deptName",loading:t.filterloading},on:{input:t.filter},model:{value:t.deptId,callback:function(e){t.deptId=e},expression:"deptId"}}),i("v-btn",{staticClass:"mr-3",attrs:{outlined:"",color:"light-green"},on:{click:t.addNorm}},[i("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-plus")}}),t._v(" 添加考核项目 ")],1),i("v-btn",{staticClass:"mr-3",attrs:{outlined:"",color:"cyan"},on:{click:t.amendNorm}},[i("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-pencil")}}),t._v(" 编辑 ")],1),i("v-btn",{staticClass:"mr-3",attrs:{color:"error",loading:t.deleteloading},on:{click:t.deleted}},[i("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-delete")}}),t._v(" 删除 ")],1),i("v-btn",{staticClass:"mr-3",attrs:{outlined:"",color:"teal",loading:t.loading},on:{click:t.refresh}},[i("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-cached")}}),t._v(" 刷新 ")],1)],1),i("v-alert",{staticClass:"alert",attrs:{tile:"",light:"",dense:"",width:"150",height:"18",color:"cyan",border:"left",elevation:"0","colored-border":"",transition:"scale-transition"}},[t._v(" 考核项目列表 ")]),i("div",{staticClass:"elevation-7"},[i("el-table",{attrs:{"span-method":t.concordance,data:t.norm,"show-summary":"","row-key":"id",border:""}},[i("el-table-column",{attrs:{width:"100",align:"center",label:"考核项目"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"assess"},[t._v(" "+t._s(e.row.assess)+" ")])]}}])}),i("el-table-column",{attrs:{prop:"name",align:"center","min-width":"200",label:"评分标准"}}),i("el-table-column",{attrs:{prop:"score",align:"center","min-width":"200",label:"标准分"}}),i("el-table-column",{attrs:{width:"45",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("v-checkbox",{staticClass:"my-2",staticStyle:{height:"30px"},attrs:{light:"",dense:"",multiple:"",color:"rgba(0, 0, 0, 0.54)",value:JSON.stringify(e.row)},on:{click:function(i){return t.choice(e.row)}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})]}}])})],1)],1),i("v-dialog",{attrs:{light:"",persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Norm Profile")])]),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-select",{attrs:{rules:t.rule.parentId,label:"上级考核项目*","item-text":"name","item-value":"id",items:t.boss,required:""},model:{value:t.form.parentId,callback:function(e){t.$set(t.form,"parentId",e)},expression:"form.parentId"}}),i("v-text-field",{attrs:{label:"项目名称/评分标准*",rules:t.rule.name,required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),i("v-text-field",{attrs:{rules:t.rule.score,label:"标准分*",required:""},model:{value:t.form.score,callback:function(e){t.$set(t.form,"score",e)},expression:"form.score"}})],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("关闭")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.saveloading},on:{click:t.save}},[t._v("保存")])],1)],1)],1)],1)},n=[],a=(i("b4fb"),i("fe59"),i("053b"),i("08ba"),i("9b6e")),o=i("33dc"),r=i("ad0a"),l={name:"norm",data:function(){return{boss:[],norm:[],form:{name:"",score:"",parentId:""},rule:{name:[function(t){return!!t||"必填"}],score:[function(t){return!!t||"必填"}],parentId:[function(t){return!!t||"必填"}]},deptId:"",branch:[],select:[],valid:!0,dialog:!1,loading:!1,saveloading:!1,filterloading:!1,deleteloading:!1}},watch:{deptId:{handler:function(t){t&&this.myNorm()}}},mounted:function(){this.myBranch()},methods:{myBranch:function(){var t=this;this.$axios.get("/api-user/dept/list").then((function(e){e&&(t.branch=e.data,t.$nextTick((function(){t.branch[0]&&(t.deptId=t.branch[0].id)})))}))},myNorm:function(){var t=this;this.$axios.post("/api-ops/EvaluationStandard/list",{deptId:this.deptId}).then((function(e){if(e){t.boss=[{id:-1,name:"顶级考核项目"}].concat(Object(r["a"])(JSON.parse(JSON.stringify(e.data)))),t.norm=[];var i,s=Object(o["a"])(e.data);try{var n=function(){var e=i.value,s=e.subEvaluationStandards.length;if(s)e.subEvaluationStandards.forEach((function(i,n){t.norm=[].concat(Object(r["a"])(t.norm),[Object(a["a"])(Object(a["a"])({},i),{},{assess:e.name,allscore:e.score,gather:0==n&&s})])}));else{var n=e.name;delete e["name"],t.norm=[].concat(Object(r["a"])(t.norm),[Object(a["a"])(Object(a["a"])({},e),{},{assess:n,gather:0,allscore:e.score})])}};for(s.s();!(i=s.n()).done;)n()}catch(l){s.e(l)}finally{s.f()}}t.loading=!1,t.filterloading=!1}))},deleted:function(){var t=this;if(this.select[0]){this.deleteloading=!0;var e=this.deptId,i=JSON.parse(this.select[0]),s=i.id;this.$axios.post("/api-ops/EvaluationStandard/delete",{id:s,deptId:e}).then((function(e){e&&(t.$notice.success("删除成功"),t.select=[],t.myNorm()),t.deleteloading=!1}))}else this.$notice.error("请选择删除项")},refresh:function(){this.loading=!0,this.myNorm()},close:function(){this.dialog=!1,this.$refs.form.reset()},addNorm:function(){delete this.form["id"],this.dialog=!0},amendNorm:function(){if(this.select[0]){var t=JSON.parse(this.select[0]);this.form=Object(a["a"])(Object(a["a"])({},t),{},{name:-1===t.parentId?t.assess:t.name}),this.dialog=!0}else this.$notice.error("请选择编辑项")},filter:function(){this.filterloading=!0},save:function(){var t=this;this.$refs.form.validate(),this.valid&&(this.saveloading=!0,this.form["deptId"]=this.deptId,this.$axios.post("/ops-center/EvaluationStandard/saveOrUpdate",this.form).then((function(e){e&&(t.$notice.success("操作成功"),t.select=[],t.myNorm(),t.close()),t.saveloading=!1})))},choice:function(t){this.select=[JSON.stringify(t)]},concordance:function(t){var e=t.row,i=t.columnIndex;if(0===i){var s=e.gather,n=void 0===s?null:s;if(n)return{rowspan:n,colspan:1};if(!n&&0!==n)return{rowspan:0,colspan:0}}}}},c=l,d=(i("926c"),i("9ca4")),h=i("aeb5"),u=i.n(h),m=i("85b6"),p=i("acf8"),v=i("526c"),f=i("d0d5"),g=(i("8ad0"),i("07e4"),i("5888")),b=i("e77e"),y=i("736c"),x=i("0261"),C=x["default"].extend({name:"rippleable",directives:{ripple:y["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}}),w=i("8f9d"),k=i("5a16"),I=Object(k["a"])(b["a"],C,w["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=b["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}}),$=I.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...b["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(g["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),_=i("a38c"),O=(i("433b"),i("c525")),V=i("99e8"),S=i("d5bb"),A=i("20cc"),B=i("3d9f"),j=i("795b"),E=i("26b1"),N=i("d10e"),T=i("3964"),D=i("02d4"),F=i("df65");const J=Object(k["a"])(V["a"],S["a"],A["a"],B["a"],j["a"],E["a"],N["a"]);var P=J.extend({name:"v-dialog",directives:{ClickOutside:T["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(D["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):B["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===F["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(O["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(F["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(F["f"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),z=i("912c"),L=i("2bb0"),M=Object(k["a"])(z["a"],Object(L["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),Z=i("4e25"),q=i("e4d7"),K=(i("0ba4"),Object(F["g"])("spacer","div","v-spacer")),W=i("8c3e"),R=Object(d["a"])(c,s,n,!1,null,"0ba61b9c",null);e["default"]=R.exports;u()(R,{VAlert:m["a"],VBtn:p["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCheckbox:$,VContainer:_["a"],VDialog:P,VForm:M,VIcon:Z["a"],VSelect:q["a"],VSpacer:K,VTextField:W["a"]})},"07e4":function(t,e,i){},"433b":function(t,e,i){},"8ad0":function(t,e,i){},"926c":function(t,e,i){"use strict";var s=i("d16b"),n=i.n(s);n.a},d0d5:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return l}));var s=i("526c"),n=i("df65");const a=Object(n["g"])("v-card__actions"),o=Object(n["g"])("v-card__subtitle"),r=Object(n["g"])("v-card__text"),l=Object(n["g"])("v-card__title");s["a"]},d16b:function(t,e,i){}}]);
//# sourceMappingURL=chunk-21c865ba.751dfc68.js.map