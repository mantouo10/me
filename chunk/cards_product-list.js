(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"179":function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(42),r(1)),i=r(169),a=r(166),c=r(72),u=r(178),s=r(184),l=r(176),f=r(185),y=r(49),d=r(174),b=r(175),h=function pp(e){return Object(u.a)(Object(l.a)(": "),f.a,function arrayify(e,t){return function(r){return Object(u.a)(Object(s.a)(t(r)),Object(s.a)(e(r)))([])}}(y.a,d.a),Object(b.a)([e]))},P=function p(e){return n.j.createElement(a.a,{"className":"at-article_p"},e)},m=function pProp(e){return Object(u.a)(P,h(e))},_=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();var g=function(e){function ProductList(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ProductList),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ProductList.__proto__||Object.getPrototypeOf(ProductList)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ProductList,o["a"].Component),w(ProductList,[{"key":"render","value":function render(){var e=o.a.useState([]),t=_(e,2),r=t[0],u=t[1];return o.a.useEffect(function(){Object(i.a)({"url":"https://uniheart.pa-ca.me/citi-dev/onboarding/products","header":{"accept":"application/json"}}).then(function(e){return u(e.data.products)},console.error)},[]),n.j.createElement(a.a,null,n.j.createElement(a.a,{"className":"at-article_h2"},"花旗产品列表："),r.map(function(e){return n.j.createElement(c.a,{"title":e.productCode+"/"+e.productType,"extra":e.sourceCode,"note":e.agreementStartDate+" - "+e.agreementExpiryDate},m("productDescription")(e),m("minimumCreditLimitAmount")(e),m("maximumCreditLimitAmount")(e),m("annualFeeAmount")(e),m("currencyCode")(e),m("interestRate")(e),m("latePaymentFee")(e))}))}}]),ProductList}(),v=r(34);r.d(t,"default",function(){return C});var O=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),j=function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(r):void 0};var C=function(e){function ProductListPage(){!function product_list_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ProductListPage);var e=function product_list_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ProductListPage.__proto__||Object.getPrototypeOf(ProductListPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"花旗产品列表"},e}return function product_list_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ProductListPage,o["a"].Component),O(ProductListPage,[{"key":"render","value":function render(){return n.j.createElement(v.a,null,n.j.createElement(g,null))}},{"key":"componentDidMount","value":function componentDidMount(){j(ProductListPage.prototype.__proto__||Object.getPrototypeOf(ProductListPage.prototype),"componentDidMount",this)&&j(ProductListPage.prototype.__proto__||Object.getPrototypeOf(ProductListPage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){j(ProductListPage.prototype.__proto__||Object.getPrototypeOf(ProductListPage.prototype),"componentDidShow",this)&&j(ProductListPage.prototype.__proto__||Object.getPrototypeOf(ProductListPage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){j(ProductListPage.prototype.__proto__||Object.getPrototypeOf(ProductListPage.prototype),"componentDidHide",this)&&j(ProductListPage.prototype.__proto__||Object.getPrototypeOf(ProductListPage.prototype),"componentDidHide",this).call(this)}}]),ProductListPage}()},"34":function(e,t,r){"use strict";var n=r(0),o=r(1),i=r(166),a=r(167),c=r(172),u=r(171),s=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var p=new Map([["账号信息","/"],["账号绑定","/pages/accounts/bind"],["卡片信息","/pages/cards/cards"],["产品列表","/pages/cards/product-list"]]),l=function(e){function Drawer(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,o["a"].Component),s(Drawer,[{"key":"render","value":function render(){var e,t=this,r=this.props,i=(e=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function step(n,o){try{var i=t[n](o),a=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});e(a)}("next")})}}(regeneratorRuntime.mark(function _callee(e){return regeneratorRuntime.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.navigateTo({"url":[].concat(_toConsumableArray(p.values()))[e]});case 2:case"end":return t.stop()}},_callee,t)})),function onItemClick(t){return e.apply(this,arguments)});return n.j.createElement(u.a,{"show":r.show,"right":!0,"mask":!0,"onClose":r.onClose,"items":[].concat(_toConsumableArray(p.keys())),"onItemClick":i})}}]),Drawer}();r.d(t,"a",function(){return d});var f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();var d=function(e){function HardwayLayout(){return function layout_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,HardwayLayout),function layout_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(HardwayLayout.__proto__||Object.getPrototypeOf(HardwayLayout)).apply(this,arguments))}return function layout_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(HardwayLayout,o["a"].Component),y(HardwayLayout,[{"key":"render","value":function render(){var e=this.props,t=o.a.useState(!1),r=f(t,2),u=r[0],s=r[1];return n.j.createElement(i.a,{"className":"index"},n.j.createElement(a.a,null),n.j.createElement(c.a,{"onClickRgIconSt":function onOpenDrawer(){return s(!0)},"onClickRgIconNd":function onClickRgIconNd(){},"onClickLeftIcon":function onClickLeftIcon(){},"color":"#000","title":"我的个人中心","leftText":"返回","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"}),n.j.createElement(i.a,{"className":"container"},e.children),n.j.createElement(l,{"show":u,"onClose":function onCloseDrawer(){return s(!1)}}))}}]),HardwayLayout}()}}]);