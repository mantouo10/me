(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"115":function(e,t,n){},"121":function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(28),a=n(1),c=n.n(a),u=n(127),l=n(6),s=n(123),p=n(120),f=(n(54),n(41)),d=n(53),h=n.n(d),g=(n(115),n(113)),b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var y,m=void 0;y={"clientID":"bacb8d3b-6ee0-4443-9bea-b54485a5a20d","authority":"https://login.microsoftonline.com/tfp/unihearti.onmicrosoft.com/B2C_1_tictactoe","b2cScopes":["https://unihearti.onmicrosoft.com/hello/demo.read"]},m=new g.UserAgentApplication(y.clientID,y.authority,function(e,t,n,r){console.log(e,t,n,r)});var v=function(){function User(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,User)}return b(User,null,[{"key":"getAgent","value":function getAgent(){return m}},{"key":"get","value":function get(){return m.getUser()}},{"key":"login","value":function login(){return m.loginRedirect(y.b2cScopes)}},{"key":"logout","value":function logout(){m.logout()}}]),User}(),w=n(128),k=n(119),_=n(124),E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var C=function(e){function UserCard(e){!function user_card_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserCard);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserCard.__proto__||Object.getPrototypeOf(UserCard)).call(this,e));return"citi"===e.user.provider&&(t.state={"profile":JSON.parse(e.user.profile)}),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserCard,r["Component"]),O(UserCard,[{"key":"render","value":function render(){return this.props.user&&this.props.user.idToken&&this.props.user.idToken.emails?c.a.createElement(w.a,null,this.props.user.idToken.emails.map(function(e){return c.a.createElement(k.a,{"title":e,"key":e})})):c.a.createElement("div",null,c.a.createElement(_.a,{"title":this.props.user.display_name,"note":this.props.user.createdAt,"thumb":"https://sandbox.apihub.citi.com/gcb/authCode/resources/images/Citi-Enterprise-White.png","extra":this.state.profile.customerType},this.renderObject(this.state.profile)),c.a.createElement("br",null))}},{"key":"renderObject","value":function renderObject(e){var t=this;return c.a.createElement("ul",null,Object.keys(e).map(function(n){return c.a.createElement("li",null,c.a.createElement("strong",null,n),"：",t.renderIt(e[n]))}))}},{"key":"renderString","value":function renderString(e){return e}},{"key":"renderIt","value":function renderIt(e){switch(void 0===e?"undefined":E(e)){case"string":return this.renderString(e);case"object":return this.renderObject(e);default:return"unknown"}}}]),UserCard}(),x=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var j=function(e){function LoggedIn(){return function logged_in_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LoggedIn),function logged_in_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(LoggedIn.__proto__||Object.getPrototypeOf(LoggedIn)).apply(this,arguments))}return function logged_in_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(LoggedIn,r["Component"]),x(LoggedIn,[{"key":"render","value":function render(){return c.a.createElement(u.a,null,c.a.createElement(C,{"user":this.props.user}))}}]),LoggedIn}(),P=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var I=null;function popupLogic(){try{I.location.href}catch(e){I.close(),window.alert("之前打开的窗口已关闭, 请重新点击并在新打开的窗口中重试。")}finally{I.postMessage("https://uniheart.herokuapp.com/passport/citi?redirect_uri="+encodeURIComponent(location.origin+"/pages/callback/citi"),window.location.origin)}}var S=function(e){function Index(){!function index_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function index_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"我的个人中心"},e.state={"popup":null},e}return function index_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r["Component"]),P(Index,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){this.props.setUser(v.get()||o.a.getStorageSync("userInfo"))}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"handleClick","value":function handleClick(){console.log(arguments)}},{"key":"render","value":function render(){return c.a.createElement(u.a,{"className":"index"},c.a.createElement(s.a,{"onClickRgIconSt":this.handleClick,"onClickRgIconNd":this.handleClick,"onClickLeftIcon":this.handleClick,"color":"#000","title":"我的个人中心","leftText":"返回","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"}),c.a.createElement(u.a,{"className":"container"},this.props.index.user?c.a.createElement(u.a,null,c.a.createElement(j,{"user":this.props.index.user}),c.a.createElement(p.a,{"type":"primary","onClick":this.props.logout,"loading":this.props.index.loading},"Log Out")):c.a.createElement(u.a,{"className":"container-main"},c.a.createElement(p.a,{"type":"primary","onClick":this.props.login,"loading":this.props.index.loading},o.a.getEnv()===o.a.ENV_TYPE.WEB?"微软 AD 账号":"",o.a.getEnv()===o.a.ENV_TYPE.WEAPP&&"微信授权登录"),c.a.createElement("br",null),o.a.getEnv()===o.a.ENV_TYPE.WEB?c.a.createElement(p.a,{"onClick":this.props.citiLogin.bind(this),"loading":this.props.index.loading},"花旗账号登录"):null)))}},{"key":"componentDidMount","value":function componentDidMount(){}}]),Index}();S=Object(i.__decorate)([Object(l.connect)(function(e){return{"index":e.index}},function(e){return{"login":function login(){e(Object(f.b)()),v.login().then(function(t){return e(Object(f.d)(t))})},"logout":function logout(){e(Object(f.c)()),o.a.setStorageSync("userInfo",null),v.logout(),e(Object(f.d)(null))},"setUser":function setUser(t){e(Object(f.d)(t))},"citiLogin":function citiLogin(){e(Object(f.b)());var t,n=setInterval(function(){I.closed&&(console.log("hello"),clearInterval(n))},1e3);I&&!I.closed||((I=window.open()).document.write("<html><head><title>第三方登录 我的个人中心</title></head><body><p>正在加载中, 请稍等 ……</p><script>window.addEventListener('message', function (event) {\n    console.log(event.data);\n\n    if (event.data.indexOf('http://') === 0 || event.data.indexOf('https://') === 0 || event.data.indexOf('//') === 0) {\n        location.href = event.data;\n    }\n}, false);\n\nwindow.opener.postMessage('listenerLoaded', window.location.origin);<\/script></body></html>"),window.addEventListener("message",(t=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var i=t[r](o),a=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});e(a)}("next")})}}(regeneratorRuntime.mark(function _callee(t){var n,r;return regeneratorRuntime.wrap(function _callee$(i){for(;;)switch(i.prev=i.next){case 0:if(console.log("event = ",t),t.origin===window.location.origin){i.next=3;break}return i.abrupt("return");case 3:if(t.data){i.next=5;break}return i.abrupt("return");case 5:if("listenerLoaded"!==t.data){i.next=7;break}return i.abrupt("return",popupLogic());case 7:if("string"!=typeof t.data||0!==t.data.indexOf("?")){i.next=23;break}if(n=h.a.parse(t.data.substr(1)),console.log(n),!n.token){i.next=22;break}return e(Object(f.a)(n.token)),i.prev=12,i.next=15,o.a.request({"url":"https://uniheart.pa-ca.me/jwt/user","header":{"Authorization":"Bearer "+n.token},"method":"GET"});case 15:r=i.sent,e(Object(f.d)(r.data)),i.next=22;break;case 19:i.prev=19,i.t0=i.catch(12),console.error(i.t0);case 22:return i.abrupt("return",(I||t.source).close());case 23:case"end":return i.stop()}},_callee,this,[[12,19]])})),function(e){return t.apply(this,arguments)}),!1)),popupLogic()}}})],S);t.default=S},"41":function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return c});var r=n(3),o=function login(){return{"type":r.b}},i=function logout(){return{"type":r.c}},a=function setUser(e){return{"type":r.d,"user":e}},c=function loggedIn(e){return{"type":r.a,"token":e}}}}]);