(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c36d91e6"],{"0c33":function(t,e,i){t.exports=i.p+"static/img/img_login_bg_02.eb159d29.jpg"},"6c41":function(t,e,i){},"9ed6":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-container"},[a("div",{ref:"loginWrapper",staticClass:"login-bg-wrapper"},[a("img",{attrs:{src:t.$isMobile?t.ImageMobileBg1:t.ImageBg1}})]),a("div",{staticClass:"flex form-wrapper"},[a("div",{staticClass:"left"}),a("div",{staticClass:"right"},[a("div",{staticClass:"my-width flex-sub flex justify-center align-center"},[a("div",{staticClass:"logo-wrapper"},[a("img",{attrs:{src:i("be47")}})]),a("div",{staticClass:"title margin-left"},[t._v("Vue Admin Work")])]),a("div",{staticClass:"form-container"},[a("div",{staticClass:"item-wrapper"},[a("el-input",{attrs:{placeholder:"请输入用户名/手机号","prefix-icon":"el-icon-user",clearable:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("div",{staticClass:"item-wrapper margin-top-lg"},[a("el-input",{attrs:{placeholder:"请输入密码",type:"password",clearable:"","prefix-icon":"el-icon-lock"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("div",{staticClass:"flex-sub"}),a("div",{staticClass:"margin-top-lg"},[a("el-button",{staticClass:"login",attrs:{type:"primary"},on:{click:t.login}},[t._v(" 登录 ")])],1)]),a("div",{staticClass:"my-width flex-sub margin-top"},[a("div",{staticClass:"flex justify-between"},[a("el-checkbox",{model:{value:t.autoLogin,callback:function(e){t.autoLogin=e},expression:"autoLogin"}},[t._v("自动登录")]),a("el-link",{attrs:{underline:!1,type:"primary"}},[t._v("忘记密码？")])],1)])])]),a("div",{staticClass:"footer-wrapper"},[a("PageFooter")],1)])},s=[],n=i("d6d9"),r=i.n(n),o=i("0c33"),c=i.n(o),l=i("b406"),p=i.n(l),g=i("e8fb"),d=i.n(g),u=i("a78e"),m=i.n(u),f=i("fa7d"),b=i("8320"),h={name:"Login",components:{PageFooter:b["a"]},data:function(){return{username:"admin",password:"123456",ImageBg1:r.a,ImageBg2:c.a,ImageBg3:p.a,ImageMobileBg1:d.a,redirect:"",autoLogin:!0}},watch:{$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect)},immediate:!0}},methods:{login:function(){var t=this;this.username?this.password?this.$post({url:this.$urlPath.login,data:{username:this.username,password:this.password}}).then((function(e){m.a.set("admin-token",Object(f["d"])(100),{expires:1}),t.$router.push({path:t.redirect||"/index/main"})})).catch((function(t){console.log(t)})):this.$errorMsg("请输入密码"):this.$errorMsg("请输入用户名")}}},v=h,w=(i("ac8a"),i("2877")),x=Object(w["a"])(v,a,s,!1,null,"21fa4022",null);e["default"]=x.exports},ac8a:function(t,e,i){"use strict";i("6c41")},b406:function(t,e,i){t.exports=i.p+"static/img/img_login_bg_03.7cdc2699.jpg"},d6d9:function(t,e,i){t.exports=i.p+"static/img/img_login_bg_01.3e6259a7.jpg"},e8fb:function(t,e,i){t.exports=i.p+"static/img/img_login_mobile_bg_01.4e27447b.jpg"}}]);
//# sourceMappingURL=chunk-c36d91e6.e1111c4c.js.map