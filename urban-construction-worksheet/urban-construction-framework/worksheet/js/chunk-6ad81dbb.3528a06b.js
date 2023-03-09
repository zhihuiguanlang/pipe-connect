(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ad81dbb"],{"11cf":function(t,e,i){"use strict";var s=i("5184"),a=i("d3d0"),n=i("f480");e["a"]=Object(s["a"])(a["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"3b8a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"accept"},[i("div",{staticClass:"handle"},[i("v-btn",{staticClass:"mr-3",attrs:{outlined:"",color:"light-green"},on:{click:t.look}},[i("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-code-json")}}),t._v(" 查看 ")],1),i("v-btn",{staticClass:"mr-3",attrs:{outlined:"",color:"cyan",loading:t.resolveloading},on:{click:t.resolve}},[i("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-marker")}}),t._v(" 完结 ")],1),i("v-btn",{staticClass:"mr-3",attrs:{color:"error",loading:t.rejectloading},on:{click:t.reject}},[i("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-marker-cancel")}}),t._v(" 驳回 ")],1),i("v-btn",{staticClass:"mr-3",attrs:{outlined:"",color:"cyan"},on:{click:t.deliver}},[i("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-account-convert")}}),t._v(" 转交 ")],1),i("v-btn",{staticClass:"mr-3",attrs:{outlined:"",color:"teal",loading:t.loading},on:{click:t.refresh}},[i("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-cached")}}),t._v(" 刷新 ")],1)],1),i("v-alert",{staticClass:"alert",attrs:{tile:"",light:"",dense:"",width:"150",height:"18",color:"cyan",border:"left",elevation:"0","colored-border":"",transition:"scale-transition"}},[t._v(" 工单信息列表 ")]),i("div",{staticClass:"elevation-7"},[i("v-data-table",{attrs:{light:"","show-select":"","fixed-header":"","single-select":"","calculate-width":"",height:"500","item-key":"id",items:t.accept,loading:t.table,headers:t.headers,page:t.current,"items-per-page":t.limit,"loading-text":"loading...","server-items-length":t.total,"footer-props":{itemsPerPageOptions:[5,10,15,20]}},on:{"update:page":[function(e){t.current=e},t.updatePage],"update:items-per-page":t.updateItem},scopedSlots:t._u([{key:"item.status",fn:function(e){var s=e.item;return[i("v-chip",{class:""+(4!=s.status||"error"),attrs:{label:""}},[t._v(" "+t._s(t.status[s["status"]])+" ")])]}}]),model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),i("v-dialog",{attrs:{light:"","max-width":"600px"},on:{"click:outside":t.outside},model:{value:t.lookDialog,callback:function(e){t.lookDialog=e},expression:"lookDialog"}},[i("v-card",[i("v-card-text",[i("v-container",[i("v-tabs",{attrs:{light:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tab",[t._v("详情资料")]),i("v-tab",[t._v("流程进度")]),i("v-tab",[t._v("流程图")])],1),t.select[0]?i("v-tabs-items",{attrs:{light:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tab-item",[i("div",{staticClass:"mt-4"},[i("span",{staticClass:"_dialog_title"},[t._v("工单编号 : ")]),i("v-chip",{staticClass:"ml-2",attrs:{label:""}},[t._v(" "+t._s(t.select[0].code))])],1),i("div",{staticClass:"mt-2"},[i("span",{staticClass:"_dialog_title"},[t._v("工单名称 : ")]),i("v-chip",{staticClass:"ml-2",attrs:{label:""}},[t._v(" "+t._s(t.select[0].title))])],1),i("div",{staticClass:"mt-2"},[i("span",{staticClass:"_dialog_title"},[t._v("工单类型 : ")]),i("v-chip",{staticClass:"ml-2",attrs:{label:""}},[t._v(" "+t._s(t.select[0].type))])],1),i("div",{staticClass:"mt-2"},[i("span",{staticClass:"_dialog_title"},[t._v("提交人 : ")]),i("v-chip",{staticClass:"ml-2",attrs:{label:""}},[t._v(" "+t._s(t.select[0].submitterName))])],1),i("div",{staticClass:"mt-2"},[i("span",{staticClass:"_dialog_title"},[t._v("提交时间 : ")]),i("v-chip",{staticClass:"ml-2",attrs:{label:""}},[t._v(" "+t._s(t.select[0].createTime))])],1),i("div",{staticClass:"mt-2"},[i("span",{staticClass:"_dialog_title"},[t._v("提交人电话 : ")]),i("v-chip",{staticClass:"ml-2",attrs:{label:""}},[t._v(" "+t._s(t.select[0].mobile))])],1),i("div",{staticClass:"mt-2"},[i("span",{staticClass:"_dialog_title"},[t._v("信息等级 : ")]),i("v-chip",{staticClass:"ml-2",attrs:{label:""}},[t._v(" "+t._s(t.select[0].level))])],1),i("div",{staticClass:"mt-2"},[i("span",{staticClass:"_dialog_title"},[t._v("工单状态 : ")]),i("v-chip",{staticClass:"ml-2",attrs:{label:""}},[t._v(" "+t._s(t.status[t.select[0]["status"]]))])],1)]),i("v-tab-item",[i("v-timeline",{staticClass:"mt-4"},t._l(t.process,(function(e,s){return i("v-timeline-item",{key:s,attrs:{small:"",right:"",color:e.startTime?"green":"grey"},scopedSlots:t._u([{key:"opposite",fn:function(){return[i("span",{staticClass:"font-weight-bold green--text",domProps:{textContent:t._s(e.startTime)}})]},proxy:!0}],null,!0)},[i("div",[i("h3",{staticClass:"font-weight-light mb-1 cyan--text"},[t._v(" "+t._s(e.userName)+" ")]),i("div",[t._v(t._s(e.activityName))])])])})),1)],1),i("v-tab-item",[i("v-img",{staticClass:"mt-4",attrs:{contain:"",height:"352","max-width":"528",src:t.http.system+"/api-ops/worker/getImage?processInstanceId="+t.select[0].processInstanceId,"lazy-src":t.http.system+"/api-ops/worker/getImage?processInstanceId="+t.select[0].processInstanceId},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)]},proxy:!0}],null,!1,4102361838)})],1)],1):t._e()],1)],1)],1)],1),i("v-dialog",{attrs:{light:"",persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Accept Profile")])]),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-select",{attrs:{required:"",items:t.list,"item-value":"id",label:"转交人员*","item-text":"nickname",rules:t.rule.deliverId},model:{value:t.form.deliverId,callback:function(e){t.$set(t.form,"deliverId",e)},expression:"form.deliverId"}})],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("关闭")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.saveloading},on:{click:t.save}},[t._v("保存")])],1)],1)],1)],1)},a=[],n=(i("dbb3"),i("9b6e")),o=i("4777"),r={name:"accept",data:function(){return{http:o["a"],headers:[{text:"工单编号",align:"center",value:"code",width:200},{text:"工单名称",align:"center",value:"title",width:200},{text:"工单类型",align:"center",value:"type",width:200},{text:"提交人",align:"center",value:"submitterName",width:200},{text:"提交时间",align:"center",value:"createTime",width:200},{text:"提交人电话",align:"center",value:"mobile",width:200},{text:"信息等级",align:"center",value:"level",width:200},{text:"工单状态",align:"center",value:"status",width:200}],status:{0:"已提交",1:"已审批",2:"已复核",3:"已挂起",4:"已驳回"},tab:0,page:1,total:0,limit:10,current:1,accept:[],form:{deliverId:""},rule:{deliverId:[function(t){return!!t||"必填"}]},list:[],select:[],process:[],valid:!0,table:!1,dialog:!1,loading:!1,lookDialog:!1,saveloading:!1,reviewloading:!1,rejectloading:!1,resolveloading:!1}},watch:{lookDialog:{handler:function(t){t&&this.myProcess()},immediate:!0,deep:!0}},mounted:function(){this.myAccept(),this.allUser()},methods:{myAccept:function(){var t=this;this.table=!0;var e=this.page,i=this.limit;this.$axios.post("/api-ops/worker/findTaskByAssignee",{page:e,limit:i}).then((function(e){if(e){var i=e.data,s=i.total,a=i.records,n=i.current;t.total=s,t.accept=a,t.current=n}t.table=!1,t.loading=!1}))},myProcess:function(){var t=this,e=this.select[0].processInstanceId;this.$axios.post("/api-ops/worker/findHistoryProcessInstance",{processInstanceId:e}).then((function(e){e&&(t.process=e.data)}))},allUser:function(){var t=this;this.$axios.get("/api-user/users/list").then((function(e){e&&(t.list=e.data)}))},updatePage:function(t){this.page=t,this.myAccept()},updateItem:function(t){this.limit=t,this.myAccept()},resolve:function(){var t=this;if(this.select[0]){var e=this.select[0],i=e.id,s=e.taskId;this.resolveloading=!0,this.$axios.post("/api-ops/worker/audit",{id:i,taskId:s,verify:!0}).then((function(e){e&&(t.$notice.success("工单已完结"),t.select=[],t.myAccept()),t.resolveloading=!1}))}else this.$notice.error("请选择受理项")},reject:function(){var t=this;if(this.select[0]){var e=this.select[0],i=e.id,s=e.taskId;this.rejectloading=!0,this.$axios.post("/api-ops/worker/audit",{id:i,taskId:s,verify:!1}).then((function(e){e&&(t.$notice.success("驳回成功"),t.select=[],t.myAccept()),t.rejectloading=!1}))}else this.$notice.error("请选择驳回项")},deliver:function(){this.select[0]?this.dialog=!0:this.$notice.error("请选择转交项")},refresh:function(){this.loading=!0,this.myAccept()},close:function(){this.dialog=!1,this.$refs.form.reset()},save:function(){var t=this;if(this.$refs.form.validate(),this.valid){this.saveloading=!0;var e=this.list.filter((function(e){return e.id==t.form.deliverId})),i=e[0].nickname,s=this.select[0],a=s.id,o=s.processInstanceId;this.form=Object(n["a"])({id:a,deliverName:i,processInstanceId:o},this.form),this.$axios.post("/api-ops/worker/deliver",Object(n["a"])({},this.form)).then((function(e){e&&(t.$notice.success("转交成功"),t.select=[],t.myAccept(),t.close()),t.saveloading=!1}))}},review:function(){var t=this;this.select[0]?(this.reviewloading=!0,this.$axios.post("/api-ops/worker/finish",{id:this.select[0].id}).then((function(e){e&&(t.$notice.success("复核成功"),t.select=[],t.myAccept()),t.reviewloading=!1}))):this.$notice.error("请选择复核项")},look:function(){this.select[0]?this.lookDialog=!0:this.$notice.error("请选择查看项")},outside:function(){this.select=[]}}},l=r,c=(i("9d8e"),i("9ca4")),d=i("aeb5"),h=i.n(d),u=i("075d"),v=i("6178"),m=i("1656"),p=i("818b"),g=i("b5e3"),f=i("9777"),b=i("fbb3"),_=i("c0fe"),w=i("11cf"),C=i("4dee"),y=i("e61c"),k=i("15bf"),x=i("e1b6"),I=i("ec957"),$=i("dad0"),T=i("89e1"),j=i("a1d0"),B=i("59a6"),V=i("4e8b"),O=i("875a"),D=i("c0a5"),S=Object(c["a"])(l,s,a,!1,null,"04231dae",null);e["default"]=S.exports;h()(S,{VAlert:u["a"],VBtn:v["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VChip:g["a"],VContainer:f["a"],VDataTable:b["a"],VDialog:_["a"],VForm:w["a"],VIcon:C["a"],VImg:y["a"],VProgressCircular:k["a"],VRow:x["a"],VSelect:I["a"],VSpacer:$["a"],VTab:T["a"],VTabItem:j["a"],VTabs:B["a"],VTabsItems:V["a"],VTimeline:O["a"],VTimelineItem:D["a"]})},"55a6":function(t,e,i){},"875a":function(t,e,i){"use strict";i("fc64");var s=i("5184"),a=i("3d6f");e["a"]=Object(s["a"])(a["a"]).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return{"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse,...this.themeClasses}}},render(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})},"9d8e":function(t,e,i){"use strict";var s=i("55a6"),a=i.n(s);a.a},a1d0:function(t,e,i){"use strict";var s=i("dcaa"),a=i("0c16"),n=i("a0fb"),o=i("7f0b"),r=i("5184");const l=Object(r["a"])(s["a"],Object(a["a"])("windowGroup","v-window-item","v-window"));var c=l.extend().extend().extend({name:"v-window-item",directives:{Touch:n["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(o["g"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}});e["a"]=c.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=c.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},c0a5:function(t,e,i){"use strict";var s=i("5184"),a=i("c4c7"),n=i("3d6f"),o=i("c015");const r=Object(s["a"])(o["a"],n["a"]);e["a"]=r.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(a["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){const t=this.setBackgroundColor(this.color);return this.$createElement("div",{staticClass:"v-timeline-item__inner-dot",...t},[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){const t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(t){const e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:{"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right,...this.themeClasses}},e)}})},dad0:function(t,e,i){"use strict";i("7cf3");var s=i("7f0b");e["a"]=Object(s["i"])("spacer","div","v-spacer")},e1b6:function(t,e,i){"use strict";i("6cef");var s=i("0261"),a=i("255b"),n=i("7f0b");const o=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return o.reduce((i,s)=>(i[t+Object(n["F"])(s)]=e(),i),{})}const c=t=>[...r,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),h=t=>[...r,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:h})),v=t=>[...r,"space-between","space-around","stretch"].includes(t),m=l("alignContent",()=>({type:String,default:null,validator:v})),p={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=g[t];if(null!=i){if(e){const i=e.replace(t,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const b=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:v},...m},render(t,{props:e,data:i,children:s}){let n="";for(const a in e)n+=String(e[a]);let o=b.get(n);if(!o){let t;for(t in o=[],p)p[t].forEach(i=>{const s=e[i],a=f(t,i,s);a&&o.push(a)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(n,o)}return t(e.tag,Object(a["a"])(i,{staticClass:"row",class:o}),s)}})},fc64:function(t,e,i){}}]);
//# sourceMappingURL=chunk-6ad81dbb.3528a06b.js.map