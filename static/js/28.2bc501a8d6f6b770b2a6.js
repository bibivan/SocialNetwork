webpackJsonp([28],{Cnis:function(s,e){},HW6K:function(s,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),o=a.n(r),t=a("+cKO"),n=a("TYx6"),d=a("i53X"),i=a("NYxO"),w={name:"ChangePassword",components:{PasswordField:n.a,PasswordRepeatField:d.a},data:function(){return{password:"",passwordTwo:""}},methods:o()({},Object(i.b)("profile/account",["passwordSet"]),{submitHandler:function(){var s=this;this.$v.$invalid?this.$v.$touch():this.passwordSet({password:this.passwordTwo,token:this.$route.query.token}).then(function(){s.$router.push({name:"ChangePasswordSuccess"})})}}),validations:{password:{required:t.required,minLength:Object(t.minLength)(8)},passwordTwo:{required:t.required,sameAsPassword:Object(t.sameAs)("password")}},i18n:{messages:{en:{password:"New Password",send:"Send"},ru:{password:"Новый пароль",send:"Отправить"}}}},c={render:function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"change-password"},[a("h2",{staticClass:"change-password__title form__title"},[s._v(s._s(s.$t("password")))]),a("form",{staticClass:"change-password__form",on:{submit:function(e){return e.preventDefault(),s.submitHandler(e)}}},[a("password-field",{class:{checked:s.$v.password.required&&s.$v.passwordTwo.sameAsPassword},attrs:{id:"change-password",v:s.$v.password,info:"info",registration:"registration"},model:{value:s.password,callback:function(e){s.password=e},expression:"password"}}),a("password-repeat-field",{class:{checked:s.$v.password.required&&s.$v.passwordTwo.sameAsPassword},attrs:{id:"change-repeat-password",v:s.$v.passwordTwo},model:{value:s.passwordTwo,callback:function(e){s.passwordTwo=e},expression:"passwordTwo"}}),a("div",{staticClass:"change-password__action"},[a("button-hover",{attrs:{tag:"button",type:"submit",variant:"white"}},[s._v(s._s(s.$t("send")))])],1)],1)])},staticRenderFns:[]};var p=a("VU/8")(w,c,!1,function(s){a("Cnis")},null,null);e.default=p.exports}});
//# sourceMappingURL=28.2bc501a8d6f6b770b2a6.js.map