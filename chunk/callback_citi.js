(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"124":function(e,n,t){"use strict";t.r(n);var o=t(2),r=t.n(o),i=t(28),c=t(1),u=t.n(c),a=t(130),l=t(6),s=t(125),f=(t(49),t(55)),p=t.n(f),d=t(37),h=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}();var y=function(e){function Citi(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Citi);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(Citi.__proto__||Object.getPrototypeOf(Citi)).apply(this,arguments));return e.config={"navigationBarTitleText":"我的个人中心"},e}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Citi,o["Component"]),h(Citi,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){window.opener&&window.opener.postMessage(window.location.search,window.location.origin),this.props.citiLogin()}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"handleClick","value":function handleClick(){console.log(arguments)}},{"key":"handleLeftClick","value":function(){var e=function _asyncToGenerator(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function step(o,r){try{var i=n[o](r),c=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}(regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.navigateTo({"url":"/"});case 2:case"end":return e.stop()}},_callee,this)}));return function handleLeftClick(){return e.apply(this,arguments)}}()},{"key":"render","value":function render(){return u.a.createElement(a.a,{"className":"index"},u.a.createElement(s.a,{"onClickRgIconSt":this.handleClick,"onClickRgIconNd":this.handleClick,"onClickLeftIcon":this.handleLeftClick,"color":"#000","title":"我的个人中心","leftText":"返回","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"}),u.a.createElement(a.a,{"className":"container"},u.a.createElement("p",null,"登录成功，窗口即将关闭……")))}},{"key":"componentDidMount","value":function componentDidMount(){}}]),Citi}();y=Object(i.__decorate)([Object(l.connect)(function(e){return function _objectDestructuringEmpty(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),{}},function(e){return{"login":function login(){e(Object(d.b)())},"setUser":function setUser(n){e(Object(d.d)(n))},"citiLogin":function citiLogin(){var n=p.a.parse(window.location.search.substr(1));console.log(n),n.token&&(e(Object(d.a)(n.token)),r.a.setStorageSync("token",n),r.a.request({"url":"https://uniheart.pa-ca.me/jwt/user","header":{"Authorization":"Bearer "+n.token},"method":"GET"}).then(function(n){e(Object(d.d)(n.data)),r.a.setStorageSync("userInfo",n.data)},console.error).then(function(){r.a.navigateTo({"url":"/"})}))}}})],y),n.default=y},"37":function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"c",function(){return i}),t.d(n,"d",function(){return c}),t.d(n,"a",function(){return u});var o=t(3),r=function login(){return{"type":o.b}},i=function logout(){return{"type":o.c}},c=function setUser(e){return{"type":o.d,"user":e}},u=function loggedIn(e){return{"type":o.a,"token":e}}}}]);