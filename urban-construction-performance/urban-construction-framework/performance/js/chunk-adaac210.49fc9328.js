(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-adaac210"],{"14f2":function(t,e,a){},"2eeb":function(t,e,a){"use strict";var n=a("1c8b"),s=a("5dfd").map,i=a("1ea7"),r=a("ff9c"),o=i("map"),c=r("map");n({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"52f98":function(t,e,a){"use strict";var n=a("14f2"),s=a.n(n);s.a},ec50:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"score"},[a("div",{staticClass:"handle"},[a("v-select",{staticClass:"select",attrs:{light:"",dense:"",outlined:"",items:t.branch,label:"选择部门","item-value":"id","item-text":"deptName",loading:t.branchloading},on:{input:t.branchFilter},model:{value:t.deptId,callback:function(e){t.deptId=e},expression:"deptId"}}),a("v-select",{staticClass:"select",attrs:{light:"",dense:"",outlined:"",items:t.user,label:"选择人员","item-value":"id","item-text":"nickname",loading:t.userloading},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),a("v-btn",{staticClass:"mr-3",attrs:{outlined:"",color:"teal",loading:t.loading},on:{click:t.refresh}},[a("v-icon",{attrs:{left:""},domProps:{textContent:t._s("mdi-cached")}}),t._v(" 刷新 ")],1),a("v-btn",{staticClass:"white--text",attrs:{light:"",color:"blue-grey",disabled:!t.disable,loading:t.submitloading},on:{click:t.submit}},[a("v-icon",{attrs:{left:"",dark:""},domProps:{textContent:t._s("mdi-cloud-upload")}}),t._v(" 提交绩效考核评分 ")],1)],1),a("v-alert",{staticClass:"alert",attrs:{tile:"",light:"",dense:"",width:"150",height:"18",color:"cyan",border:"left",elevation:"0","colored-border":"",transition:"scale-transition"}},[t._v(" 绩效评分列表 ")]),a("div",{staticClass:"elevation-7"},[a("el-table",{attrs:{"span-method":t.concordance,data:t.norm,"show-summary":"","row-key":"id",border:""}},[a("el-table-column",{attrs:{width:"100",align:"center",label:"考核项目"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"assess"},[t._v(" "+t._s(e.row.assess)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"name",align:"center","min-width":"200",label:"评分标准"}}),a("el-table-column",{attrs:{prop:"score",align:"center","min-width":"200",label:"标准分"}}),a("el-table-column",{attrs:{label:"评分",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-text-field",{attrs:{id:"field",light:"",dense:""},model:{value:e.row.actualScore,callback:function(a){t.$set(e.row,"actualScore",a)},expression:"scope.row.actualScore"}})]}}])})],1)],1)],1)},s=[],i=(a("b4fb"),a("dbb3"),a("fe59"),a("2eeb"),a("053b"),a("08ba"),a("9b6e")),r=a("ad0a"),o=a("33dc"),c={name:"score",data:function(){return{user:[],norm:[],userId:"",deptId:"",branch:[],loading:!1,disable:!1,userloading:!1,branchloading:!1,submitloading:!1}},watch:{norm:{handler:function(t){this.disable=Boolean(t[0])},immediate:!0,deep:!0},user:{handler:function(t){t[0]||(this.userId="")},immediate:!0,deep:!0},deptId:{handler:function(t){t&&this.myUser()}},userId:{handler:function(t){t&&this.myNorm()}}},mounted:function(){this.myBranch()},methods:{myBranch:function(){var t=this;this.branchloading=!0,this.$axios.get("/api-user/dept/list").then((function(e){e&&(t.branch=e.data,t.$nextTick((function(){t.branch[0]&&(t.deptId=t.branch[0].id)}))),t.branchloading=!1}))},myUser:function(){var t=this;this.userloading=!0,this.$axios.get("/api-user/userBydeptId",{params:{deptId:this.deptId}}).then((function(e){e&&(t.user=e.data,t.$nextTick((function(){t.user[0]&&(t.userId=t.user[0].id)}))),t.userloading=!1}))},myNorm:function(){var t=this;this.userloading=!0,this.$axios.post("/api-ops/EvaluationScore/list",{userId:this.userId,deptId:this.deptId}).then((function(e){if(e){t.norm=[];var a,n=Object(o["a"])(e.data);try{var s=function(){var e=a.value,n=e.subEvaluationStandards.length;if(n)e.subEvaluationStandards.forEach((function(a,s){t.norm=[].concat(Object(r["a"])(t.norm),[Object(i["a"])(Object(i["a"])({},a),{},{assess:e.name,allscore:e.score,gather:0==s&&n})])}));else{var s=e.name;delete e["name"],t.norm=[].concat(Object(r["a"])(t.norm),[Object(i["a"])(Object(i["a"])({},e),{},{assess:s,gather:0,allscore:e.score})])}};for(n.s();!(a=n.n()).done;)s()}catch(c){n.e(c)}finally{n.f()}}t.loading=!1,t.userloading=!1}))},refresh:function(){this.loading=!0,this.myNorm()},branchFilter:function(){this.norm=[],this.userloading=!0},submit:function(){var t=this;this.submitloading=!0;var e=this.user.filter((function(e){return e.id==t.userId})),a=this.norm.map((function(a){return Object(i["a"])(Object(i["a"])({},a),{},{userId:t.userId,userName:e[0].nickname,evaluationStandardId:a.id})}));this.$axios.post("/api-ops/EvaluationScore/saveOrUpdateBatch",a).then((function(e){e&&(t.myNorm(),t.$notice.success("提交成功")),t.submitloading=!1}))},concordance:function(t){var e=t.row,a=t.columnIndex;if(0===a){var n=e.gather,s=void 0===n?null:n;if(s)return{rowspan:s,colspan:1};if(!s&&0!==s)return{rowspan:0,colspan:0}}}}},l=c,d=(a("52f98"),a("9ca4")),u=a("aeb5"),h=a.n(u),m=a("85b6"),f=a("acf8"),b=a("4e25"),p=a("e4d7"),v=a("8c3e"),g=Object(d["a"])(l,n,s,!1,null,"87fde8fc",null);e["default"]=g.exports;h()(g,{VAlert:m["a"],VBtn:f["a"],VIcon:b["a"],VSelect:p["a"],VTextField:v["a"]})}}]);
//# sourceMappingURL=chunk-adaac210.49fc9328.js.map