(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed4d770a"],{"13d5":function(t,s,e){"use strict";var a=e("23e7"),i=e("d58f").left,n=e("a640"),o=e("2d00"),l=e("605d"),c=n("reduce"),r=!l&&o>79&&o<83;a({target:"Array",proto:!0,forced:!c||r},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"56a6":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"message-alert"},t._l(t.messages,(function(s,a){return e("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+s.status},[e("p",{staticClass:"my-0"},[e("i",{staticClass:"far",class:s.icon}),e("span",{staticClass:"ml-1"},[t._v(t._s(s.message))])]),e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(s){return t.removeMessage(a)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],n=(e("a434"),e("159b"),{data:function(){return{messages:[]}},methods:{updateMessage:function(t,s,e){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:s,icon:e,timestamp:a}),$(".message-alert").addClass("show"),this.removeMessageWithTiming(a)},removeMessage:function(t){$(".message-alert").removeClass("show"),this.messages.splice(t,1)},removeMessageWithTiming:function(t){var s=this;setTimeout((function(){s.messages.forEach((function(e,a){e.timestamp===t&&($(".message-alert").removeClass("show"),s.messages.splice(a,1))}))}),5e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning",a=arguments.length>2?arguments[2]:void 0;t.updateMessage(s,e,a)}))},beforeDestroy:function(){this.$bus.$off("message:push")}}),o=n,l=(e("70bf"),e("2877")),c=Object(l["a"])(o,a,i,!1,null,"70695e06",null);s["a"]=c.exports},"70bf":function(t,s,e){"use strict";e("aeec")},"7d03":function(t,s,e){t.exports=e.p+"img/blanco-coffee.1b618c89.png"},8418:function(t,s,e){"use strict";var a=e("c04e"),i=e("9bf2"),n=e("5c6c");t.exports=function(t,s,e){var o=a(s);o in t?i.f(t,o,n(0,e)):t[o]=e}},a434:function(t,s,e){"use strict";var a=e("23e7"),i=e("23cb"),n=e("a691"),o=e("50c4"),l=e("7b0b"),c=e("65f0"),r=e("8418"),u=e("1dde"),f=u("splice"),m=Math.max,d=Math.min,v=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f},{splice:function(t,s){var e,a,u,f,h,b,g=l(this),C=o(g.length),w=i(t,C),x=arguments.length;if(0===x?e=a=0:1===x?(e=0,a=C-w):(e=x-2,a=d(m(n(s),0),C-w)),C+e-a>v)throw TypeError(p);for(u=c(g,a),f=0;f<a;f++)h=w+f,h in g&&r(u,f,g[h]);if(u.length=a,e<a){for(f=w;f<C-a;f++)h=f+a,b=f+e,h in g?g[b]=g[h]:delete g[b];for(f=C;f>C-a+e;f--)delete g[f-1]}else if(e>a)for(f=C-a;f>w;f--)h=f+a-1,b=f+e-1,h in g?g[b]=g[h]:delete g[b];for(f=0;f<e;f++)g[f+w]=arguments[f+2];return g.length=C-a+e,u}})},aeec:function(t,s,e){},d58f:function(t,s,e){var a=e("1c0b"),i=e("7b0b"),n=e("44ad"),o=e("50c4"),l=function(t){return function(s,e,l,c){a(e);var r=i(s),u=n(r),f=o(r.length),m=t?f-1:0,d=t?-1:1;if(l<2)while(1){if(m in u){c=u[m],m+=d;break}if(m+=d,t?m<0:f<=m)throw TypeError("Reduce of empty array with no initial value")}for(;t?m>=0:f>m;m+=d)m in u&&(c=e(c,u[m],m,r));return c}};t.exports={left:l(!1),right:l(!0)}},d81d:function(t,s,e){"use strict";var a=e("23e7"),i=e("b727").map,n=e("1dde"),o=n("map");a({target:"Array",proto:!0,forced:!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},eae1:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("AlertMessage"),a("div",{staticClass:"navbar navbar-expand-sm navbar-pos align-items-center px-4 navbar-state",class:{"nav-color":t.isScroll}},[a("h1",[a("router-link",{staticClass:"navbar-brand text-white d-flex align-items-end",attrs:{to:"/"}},[a("img",{staticClass:"blancoLogo",attrs:{src:e("7d03"),alt:"Blanco Coffee"}}),a("span",{staticClass:"logo-font"},[t._v("Blanco Coffee")])])],1),t._m(0),a("div",{staticClass:"collapse navbar-collapse flex-row-reverse",class:{"nav-close":t.isClose},attrs:{id:"mainNavbar"}},[a("ul",{staticClass:"navbar-nav align-items-md-center font-weight-bold"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-white font-set line-style",class:{active:"home"===t.nowNav},attrs:{to:"/"},nativeOn:{click:function(s){t.scrollTop(),t.isClose=!t.isClose}}},[t._v(" Home ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-white font-set line-style",class:{active:"productlist"===t.nowNav},attrs:{to:"/productlist/all"},nativeOn:{click:function(s){t.scrollTop(),t.isClose=!t.isClose}}},[t._v(" Product ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-white font-set line-style",class:{active:"favor"===t.nowNav},attrs:{to:"/favor"},nativeOn:{click:function(s){t.scrollTop(),t.isClose=!t.isClose}}},[t._v(" Favor ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-white font-set line-style cart-icon",class:{active:"cart"===t.nowNav},attrs:{to:"/cart"},nativeOn:{click:function(s){t.scrollTop(),t.isClose=!t.isClose}}},[a("span",{staticClass:"d-block d-md-none"},[t._v("Cart")]),a("i",{staticClass:"fas fa-shopping-cart d-none d-md-block px-2"}),t.num>=1?a("div",{staticClass:"cart-num"},[t._v(t._s(t.num))]):t._e()])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-white font-set d-block d-md-none",attrs:{to:"/login"}},[t._v(" Login ")]),a("a",{staticClass:"nav-link text-white font-set d-none d-md-block",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.isActive=!t.isActive}}},[a("i",{staticClass:"fas fa-ellipsis-h"})])],1)])])]),a("router-view"),a("div",{staticClass:"footer"},[a("div",{staticClass:"container-fluid bg-primary text-white py-4 px-4 d-flex flex-column align-items-center"},[a("div",{staticClass:"contact w-100 d-flex flex-column align-items-center mb-3"},[a("h6",{staticClass:"mb-3"},[t._v("現在訂閱即可獲得最新資訊與享有折扣優惠")]),a("div",{staticClass:"input-group input-size"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",inputmode:"email",placeholder:"custom@gmail.com","aria-label":"custom@gmail.com","aria-describedby":"button-sub"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-sub"},on:{click:t.follow}},[t._v(" 訂閱 ")])])])]),t._m(1),a("p",{staticClass:"mb-0 text-center"},[t._v(" © 僅作為個人網頁練習，所有資料皆來自網路，無商業用途 ")])])]),a("div",{staticClass:"modal fade",attrs:{id:"subscribeModal"}},[a("div",{staticClass:"modal-dialog modal-pos"},[a("div",{staticClass:"modal-content subscribe letter-spacing bg-primary"},[a("div",{staticClass:"sub-title h5 p-3 text-white mb-0 bg-c-red"},[t._v(" 感謝您的訂閱 ")]),a("div",{staticClass:"sub-content px-3 py-3 text-white d-flex align-items-center"},[a("span",{staticClass:"mr-2"},[t._v("訂閱優惠碼 : ")]),a("span",{staticClass:"coupon-code",on:{click:t.copyCoupon}},[t._v(" followcoffee ")]),a("i",{staticClass:"fas fa-copy ml-2"})])])])]),a("div",{staticClass:"info letter-spacing",class:{active:t.isActive}},[a("button",{staticClass:"close text-white",attrs:{type:"button"},on:{click:function(s){t.isActive=!t.isActive}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),a("div",{staticClass:"detail-info text-white"},[t._m(2),t._m(3),t._m(4),a("div",{staticClass:"admin"},[a("router-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:"/login",target:"_blank"}},[t._v(" 管理員登入 ")])],1)])])],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"navbar-toggler icon-color",attrs:{type:"button","data-toggle":"collapse","data-target":"#mainNavbar"}},[e("i",{staticClass:"fas fa-bars"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"social"},[e("li",[e("a",{staticClass:"text-white",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram"})])]),e("li",[e("a",{staticClass:"text-white",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-line"})])]),e("li",[e("a",{staticClass:"text-white",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-square"})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:e("7d03"),alt:"Blanco Coffee"}}),a("p",{staticClass:"mt-2 font-weight-bold"},[t._v("Blanco Coffee")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"text-center mt-4"},[t._v("如有相關問題 "),e("br"),t._v("歡迎與我們聯絡")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"text-center"},[e("small",[e("a",{staticClass:"text-white",attrs:{href:"tel:+886-6-33xxxxx"}},[t._v("06-33xxxxx")]),e("br"),e("a",{staticClass:"text-white",attrs:{href:"mailto:blancostudio222@gmail.com"}},[t._v("blancostudio222@gmail.com")])])])}],n=(e("13d5"),e("d81d"),e("5319"),e("ac1f"),e("56a6")),o={data:function(){return{isClose:!0,isScroll:!1,email:"",customEmail:[],isActive:!1,nowNav:"home",num:0,carts:JSON.parse(localStorage.getItem("carts"))||[]}},components:{AlertMessage:n["a"]},methods:{follow:function(){var t=this,s=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,e=t.email,a=t.customEmail;s.test(e)?-1===a.indexOf(e)?(a.push(e),t.email="",$("#subscribeModal").modal("show")):t.$bus.$emit("message:push","已訂閱","danger","fa-times-circle"):t.$bus.$emit("message:push","請輸入正確的Email格式","danger","fa-times-circle")},getCartNum:function(){var t=this.carts;this.num=t.map((function(t){return t.qty})).reduce((function(t,s){return t+s}),0)},copyCoupon:function(){var t=document.createRange(),s=window.getSelection();t.selectNode(document.querySelector(".coupon-code")),s.removeAllRanges(),s.addRange(t),document.execCommand("copy"),$("#subscribeModal").modal("hide"),this.$bus.$emit("message:push","已複製優惠碼","success","fa-check-circle")},scrollTop:function(){window.scroll(0,0)},scroll:function(){var t=window.scrollY;this.isScroll=0!==t}},created:function(){var t=this,s=document.cookie.replace(/(?:(?:^|.*;\s*)blancoToken\s*\\s*([^;]*).*$)|^.*$/,"$1");t.$http.defaults.headers.common.Authorization=s,t.getCartNum(),t.$bus.$on("navActive",(function(s){t.nowNav=s,"cart"===s&&(t.num=0)})),t.$bus.$on("changeNum",(function(s){t.num=s}))},mounted:function(){window.addEventListener("scroll",this.scroll)},beforeDestroy:function(){this.$bus.$off("navActive"),this.$bus.$off("changeNum")}},l=o,c=e("2877"),r=Object(c["a"])(l,a,i,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-ed4d770a.3556d46e.js.map