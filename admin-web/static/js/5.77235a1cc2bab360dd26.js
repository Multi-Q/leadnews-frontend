webpackJsonp([5],{J03X:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Xxa5"),n=e.n(s),r=e("exGp"),c=e.n(r),i=e("xT6B"),o=e("No1E"),u={name:"ContentDetail",data:function(){return{detail:{content:"[]"}}},created:function(){this.loadData(this.$route.query.id)},methods:{loadData:function(t){var a=this;return c()(n.a.mark(function e(){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)(t);case 2:s=e.sent,a.detail=s.data;case 4:case"end":return e.stop()}},e,a)}))()},goBack:function(){this.$router.go(-1)},dateFormat:function(t){return i.a.format13HH(t)},operateForPass:function(){var t=this;return c()(n.a.mark(function a(){var e,s;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e={id:t.detail.id,status:4},a.next=3,Object(o.d)(e);case 3:200===(s=a.sent).code?(t.submitSuccess(),t.$message({type:"success",message:"操作成功！"})):t.$message({type:"error",message:s.errorMessage});case 5:case"end":return a.stop()}},a,t)}))()},operateForFail:function(){var t={id:this.detail.id,status:2};this.open("请输入驳回理由",t)},open:function(t,a){var e,s=this;this.$prompt(void 0,"驳回理由",{confirmButtonText:"提交",confirmButtonClass:"el-button--success",cancelButtonText:"取消",cancelButtonClass:"el-button--warning",inputPlaceholder:t,inputType:"textarea"}).then((e=c()(n.a.mark(function t(e){var r,c=e.value;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.title=c,t.next=3,Object(o.a)(a);case 3:200===(r=t.sent).code?(s.submitSuccess(),s.$message({type:"success",message:"操作成功！"})):s.$message({type:"error",message:r.errorMessage});case 5:case"end":return t.stop()}},t,s)})),function(t){return e.apply(this,arguments)})).catch(function(){s.$message({type:"info",message:"已取消驳回"})})}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("el-page-header",{attrs:{content:"文章详情"},on:{back:t.goBack}}),t._v(" "),3===t.detail.status?e("div",[e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.operateForPass()}}},[e("svg",{staticClass:"icon svg-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#iconicon_btn_pass"}})]),t._v("\n        通过\n      ")]),t._v(" "),e("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.operateForFail()}}},[e("svg",{staticClass:"icon svg-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#iconicon_btn_reject"}})]),t._v("\n        驳回\n      ")])],1):4===t.detail.status?e("div",{staticClass:"operate"},[e("span",{staticClass:"status"},[t._v("状态：")]),t._v(" "),e("span",{staticClass:"pass"},[t._v("审核通过")])]):2===t.detail.status?e("div",{staticClass:"operate"},[e("span",{staticClass:"status"},[t._v("状态：")]),t._v(" "),e("span",{staticClass:"fail"},[t._v("已驳回")]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"reason"},[t._v("理由："+t._s(t.detail.reason))])]):t._e()],1),t._v(" "),e("div",{staticClass:"main"},[e("el-row",{attrs:{gutter:30}},[e("el-col",{attrs:{span:5}},[e("span",{staticClass:"name"},[t._v("文章标题")])]),t._v(" "),e("el-col",{attrs:{span:5}},[e("span",{staticClass:"name"},[t._v("作者")])]),t._v(" "),e("el-col",{attrs:{span:5}},[e("span",{staticClass:"name"},[t._v("更新时间")])])],1),t._v(" "),e("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:30}},[e("el-col",{attrs:{span:5}},[e("span",{staticClass:"value"},[t._v(t._s(t.detail.title))])]),t._v(" "),e("el-col",{attrs:{span:5}},[e("span",{staticClass:"value"},[t._v(t._s(t.detail.authorName))])]),t._v(" "),e("el-col",{attrs:{span:5}},[e("span",{staticClass:"value"},[t._v(t._s(t.dateFormat(t.detail.submitedTime)))])])],1),t._v(" "),e("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:30}},[e("el-col",{attrs:{span:5}},[e("span",{staticClass:"name"},[t._v("正文信息")])])],1),t._v(" "),t._l(JSON.parse(t.detail.content),function(a,s){return e("p",{key:s},["text"===a.type?e("span",{staticStyle:{color:"#17233e"}},[t._v(t._s(a.value))]):e("img",{attrs:{src:a.value}})])})],2)])},staticRenderFns:[]};var p=e("VU/8")(u,l,!1,function(t){e("rB8Z")},"data-v-059cc2ad",null);a.default=p.exports},No1E:function(t,a,e){"use strict";a.b=function(t){return new s.a({url:n.n,method:"post",data:t})},a.c=function(t){return new s.a({url:n.o+t,method:"get"})},a.d=function(t){return new s.a({url:n.p,method:"post",data:t})},a.a=function(t){return new s.a({url:n.m,method:"post",data:t})};var s=e("vLgD"),n=e("2EN7")},rB8Z:function(t,a){}});
//# sourceMappingURL=5.77235a1cc2bab360dd26.js.map