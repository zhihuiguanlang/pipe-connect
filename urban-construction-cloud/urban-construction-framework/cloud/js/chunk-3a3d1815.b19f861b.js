(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a3d1815"],{"9d2d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"helmet",attrs:{justify:"space-between"}},[n("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[n("v-img",{attrs:{src:i("9d64"),width:"40",height:"40","aspect-ratio":"1"}}),n("div",{staticClass:"font-weight-medium ml-4"},[t._v("****")]),n("v-divider",{staticClass:"ml-4",attrs:{inset:"",vertical:""}}),n("div",{staticClass:"font-weight-medium ml-4 grey--text text--lighten-1"},[t._v(t._s(t.name))])],1),n("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[n("v-btn",{attrs:{icon:"",color:"grey"}},[n("v-icon",{attrs:{size:"17"},domProps:{textContent:t._s("mdi-lock")}})],1),n("v-menu",{attrs:{bottom:"",origin:"center center",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("div",t._g({staticClass:"d-flex align-center"},i),[n("v-btn",{attrs:{text:"",color:"grey"}},[n("v-icon",{attrs:{left:"",size:"22"},domProps:{textContent:t._s("mdi-account-circle")}}),t._v(" "+t._s(t.roles)+" "),n("v-icon",{attrs:{right:"",size:"22"},domProps:{textContent:t._s("mdi-format-list-bulleted-square")}})],1)],1)]}}])},[n("v-list",[n("v-list-item-group",{model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.admin,(function(e,i){return n("v-list-item",{key:i,attrs:{value:e.key},on:{click:function(i){return t.jump(e)}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.action)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1)],1)],1)},s=[],o=i("e04f"),a=i.n(o),r=i("fe95"),c={name:"helmet",data:function(){return{name:r["d"],admin:r["a"],roles:"",item:0}},created:function(){this.role()},methods:{role:function(){var t=this;this.$axios.get("/api-user/users/current").then((function(e){e&&(t.roles=e.data.nickname)}))},jump:function(t){var e=this;4==t.key?this.$axios.post("/api-uaa/oauth/remove/token",{}).then((function(i){i&&(a.a.remove("token",{expires:7,path:"/"}),e.$notice.success("退出登录"),t.router&&window.open(t.router,"_self"))})):t.router&&this.$router.push(t.router)}}},l=c,u=i("9ca4"),m=i("7033"),d=i.n(m),v=i("9ca40"),f=i("bed8"),p=i("7260"),h=i("a7e0"),g=i("ffdf"),x=i("84b6"),_=i("a472"),b=i("e23a"),w=i("9e95"),C=i("44fd"),k=i("f9f3"),V=i("af04"),y=Object(u["a"])(l,n,s,!1,null,null,null);e["default"]=y.exports;d()(y,{VBtn:v["a"],VCol:f["a"],VDivider:p["a"],VIcon:h["a"],VImg:g["a"],VList:x["a"],VListItem:_["a"],VListItemContent:b["a"],VListItemGroup:w["a"],VListItemIcon:C["a"],VListItemTitle:b["b"],VMenu:k["a"],VRow:V["a"]})},"9d64":function(t,e,i){t.exports=i.p+"img/logo.db666bc7.png"}}]);
//# sourceMappingURL=chunk-3a3d1815.b19f861b.js.map