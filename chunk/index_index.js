(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"127":function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(41),i=n(135),s=n(6),c=n(1),u=n.n(c),l=n(54),p=n.n(l),f=n(126),d=n(134);function UnLoggedInView(e){return u.a.createElement(i.a,{"className":"container-main"},u.a.createElement(f.a,{"type":"primary","onClick":e.login,"loading":e.index.loading},o.a.getEnv()===o.a.ENV_TYPE.WEB?"微软 AD 账号":"",o.a.getEnv()===o.a.ENV_TYPE.WEAPP&&"微信授权登录"),u.a.createElement(d.a,null),o.a.getEnv()===o.a.ENV_TYPE.WEB?u.a.createElement(f.a,{"onClick":e.citiLogin.bind(this),"loading":e.index.loading},"花旗账号登录"):null)}var h=n(129),b=(n(46),n(45)),g=n(84),y=n(32),m=n(131),w=(n(86),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),v=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var k=function(e){function UserCard(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserCard);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserCard.__proto__||Object.getPrototypeOf(UserCard)).call(this,e));return"citi"===e.user.provider&&(t.state={"profile":JSON.parse(e.user.profile)}),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserCard,r["Component"]),v(UserCard,[{"key":"render","value":function render(){return this.props.user&&this.props.user.idToken&&this.props.user.idToken.emails?u.a.createElement(g.a,null,this.props.user.idToken.emails.map(function(e){return u.a.createElement(y.a,{"title":e,"key":e})})):u.a.createElement(m.a,{"title":this.props.user.display_name,"note":this.props.user.createdAt,"thumb":"https://sandbox.apihub.citi.com/gcb/authCode/resources/images/Citi-Enterprise-White.png","extra":this.state.profile.customerType},this.renderObject(this.state.profile))}},{"key":"renderObject","value":function renderObject(e){var t=this;return u.a.createElement(i.a,{"className":"at-article"},Object.keys(e).map(function renderThat(n){return t.renderIt(e[n],n)}))}},{"key":"renderIt","value":function renderIt(e,t){switch(void 0===e?"undefined":w(e)){case"string":return u.a.createElement(i.a,{"className":"at-article__h3"},t,": ",e);case"object":return u.a.createElement(i.a,{"className":"at-article__section"},u.a.createElement(i.a,{"className":"at-article__h3"},t),this.renderObject(e));default:return null}}}]),UserCard}();function LoggedInCard(e){return u.a.createElement(k,{"user":e.user})}var _=n(73),j=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var x=function(e){function LoggedInView(e){return function logged_in_view_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LoggedInView),function logged_in_view_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(LoggedInView.__proto__||Object.getPrototypeOf(LoggedInView)).call(this,e))}return function logged_in_view_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(LoggedInView,o.a.Component),j(LoggedInView,[{"key":"issueToken","value":function(){var e=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}(regeneratorRuntime.mark(function _callee(){var e,t;return regeneratorRuntime.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(e=o.a.getStorageSync("token")){n.next=5;break}return n.next=4,o.a.showToast({"title":"操作失败，请重新登录后再试。","icon":"none","duration":3e3});case 4:return n.abrupt("return");case 5:return t=_.homepage+"pages/callback/citi?token="+e.token+"&traceId="+e.traceId,console.log("link = ",t),n.prev=7,n.next=10,o.a.setClipboardData({"data":t});case 10:return n.next=12,o.a.showToast({"title":t,"icon":"success","duration":2e3});case 12:n.next=19;break;case 14:return n.prev=14,n.t0=n.catch(7),console.error(n.t0),n.next=19,o.a.showToast({"title":t,"icon":"none","duration":6e3});case 19:case"end":return n.stop()}},_callee,this,[[7,14]])}));return function issueToken(){return e.apply(this,arguments)}}()},{"key":"render","value":function render(){return u.a.createElement(i.a,null,u.a.createElement(LoggedInCard,{"user":this.props.index.user}),u.a.createElement(f.a,{"type":"primary","onClick":this.issueToken.bind(this),"loading":this.state.issueInProgress},"颁发令牌"),u.a.createElement(d.a,null),u.a.createElement(f.a,{"type":"primary","onClick":this.props.logout,"loading":this.props.index.loading},"退出登录"))}}]),LoggedInView}(),C=n(72),E=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var O,I=void 0;O={"clientID":"bacb8d3b-6ee0-4443-9bea-b54485a5a20d","authority":"https://login.microsoftonline.com/tfp/unihearti.onmicrosoft.com/B2C_1_tictactoe","b2cScopes":["https://unihearti.onmicrosoft.com/hello/demo.read"]},I=new C.UserAgentApplication(O.clientID,O.authority,function(e,t,n,r){console.log(e,t,n,r)});var P=function(){function User(){!function user_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,User)}return E(User,null,[{"key":"getAgent","value":function getAgent(){return I}},{"key":"get","value":function get(){return I.getUser()}},{"key":"login","value":function login(){return I.loginRedirect(O.b2cScopes)}},{"key":"logout","value":function logout(){I.logout()}}]),User}(),T=(n(61),n(23)),D=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var S=null;function popupLogic(){try{S.location.href}catch(e){S.close(),window.alert("之前打开的窗口已关闭, 请重新点击并在新打开的窗口中重试。")}finally{S.postMessage("https://uniheart.herokuapp.com/passport/citi?redirect_uri="+encodeURIComponent(location.origin+"/pages/callback/citi"),window.location.origin)}}var L=function(e){function Index(){!function index_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function index_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"我的个人中心"},e.state={"popup":null,"showDrawer":!1},e}return function index_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r["Component"]),D(Index,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){this.props.setUser(P.get()||o.a.getStorageSync("userInfo"))}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"handleClick","value":function handleClick(){console.log(arguments)}},{"key":"showDrawer","value":function showDrawer(){this.setState({"showDrawer":!0})}},{"key":"onCloseDrawer","value":function onCloseDrawer(){this.setState({"showDrawer":!1})}},{"key":"render","value":function render(){return u.a.createElement(i.a,{"className":"index"},u.a.createElement(h.a,{"onClickRgIconSt":this.showDrawer.bind(this),"onClickRgIconNd":this.handleClick,"onClickLeftIcon":this.handleClick,"color":"#000","title":"我的个人中心","leftText":"返回","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"}),u.a.createElement(i.a,{"className":"container"},this.props.index.user?u.a.createElement(x,this.props):u.a.createElement(UnLoggedInView,this.props)),u.a.createElement(T.a,{"show":this.state.showDrawer,"onClose":this.onCloseDrawer.bind(this)}))}},{"key":"componentDidMount","value":function componentDidMount(){}}]),Index}();L=Object(a.__decorate)([Object(s.connect)(function(e){return{"index":e.index}},function(e){return{"login":function login(){e(Object(b.b)()),P.login().then(function(t){return e(Object(b.e)(t))})},"logout":function logout(){e(Object(b.d)()),o.a.setStorageSync("userInfo",null),P.logout(),e(Object(b.e)(null))},"setUser":function setUser(t){e(Object(b.e)(t))},"citiLogin":function citiLogin(){e(Object(b.b)());var t,n=setInterval(function(){S.closed&&(console.log("hello"),e(Object(b.c)()),clearInterval(n))},1e3);S&&!S.closed||((S=window.open()).document.write("<html><head><title>第三方登录 我的个人中心</title></head><body><p>正在加载中, 请稍等 ……</p><script>window.addEventListener('message', function (event) {\n    console.log(event.data);\n\n    if (event.data.indexOf('http://') === 0 || event.data.indexOf('https://') === 0 || event.data.indexOf('//') === 0) {\n        location.href = event.data;\n    }\n}, false);\n\nwindow.opener.postMessage('listenerLoaded', window.location.origin);<\/script></body></html>"),window.addEventListener("message",(t=function index_asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}(regeneratorRuntime.mark(function _callee(t){var n,r;return regeneratorRuntime.wrap(function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("event = ",t),t.origin===window.location.origin){a.next=3;break}return a.abrupt("return");case 3:if(t.data){a.next=5;break}return a.abrupt("return");case 5:if("listenerLoaded"!==t.data){a.next=7;break}return a.abrupt("return",popupLogic());case 7:if("string"!=typeof t.data||0!==t.data.indexOf("?")){a.next=23;break}if(n=p.a.parse(t.data.substr(1)),console.log(n),!n.token){a.next=22;break}return e(Object(b.a)(n.token)),a.prev=12,a.next=15,o.a.request({"url":"https://uniheart.pa-ca.me/jwt/user","header":{"Authorization":"Bearer "+n.token},"method":"GET"});case 15:r=a.sent,e(Object(b.e)(r.data)),a.next=22;break;case 19:a.prev=19,a.t0=a.catch(12),console.error(a.t0);case 22:return a.abrupt("return",(S||t.source).close());case 23:case"end":return a.stop()}},_callee,this,[[12,19]])})),function(e){return t.apply(this,arguments)}),!1)),popupLogic()}}})],L);t.default=L},"23":function(e,t,n){"use strict";n.d(t,"a",function(){return Drawer});var r=n(2),o=n.n(r),a=n(130),i=n(1),s=n.n(i);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c=new Map([["账号信息","/"],["卡片信息","/pages/cards/cards"]]);function Drawer(e){var t,n=this,r=(t=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}(regeneratorRuntime.mark(function _callee(e){return regeneratorRuntime.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.navigateTo({"url":[].concat(_toConsumableArray(c.values()))[e]});case 2:case"end":return t.stop()}},_callee,n)})),function onItemClick(e){return t.apply(this,arguments)});return s.a.createElement(a.a,{"show":e.show,"right":!0,"mask":!0,"onClose":e.onClose,"items":[].concat(_toConsumableArray(c.keys())),"onItemClick":r})}},"45":function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return c});var r=n(3),o=function login(){return{"type":r.c}},a=function logout(){return{"type":r.d}},i=function setUser(e){return{"type":r.e,"user":e}},s=function loggedIn(e){return{"type":r.a,"token":e}},c=function loginCancelled(){return{"type":r.b}}},"61":function(e,t,n){},"73":function(e){e.exports={"name":"me","version":"1.0.0","private":!0,"description":"","scripts":{"build:weapp":"taro build --type weapp","build:swan":"taro build --type swan","build:alipay":"taro build --type alipay","build:tt":"taro build --type tt","build:h5":"taro build --type h5","build:rn":"taro build --type rn","build":"node_modules/.bin/taro build --type h5","dev:weapp":"npm run build:weapp -- --watch","dev:swan":"npm run build:swan -- --watch","dev:alipay":"npm run build:alipay -- --watch","dev:tt":"npm run build:tt -- --watch","dev:h5":"npm run build:h5 -- --watch","dev:rn":"npm run build:rn -- --watch","e2e":"jest --config jest.config.js --detectOpenHandles","lint":"eslint . --fix"},"author":"jeff.tian@outlook.com","homepage":"https://pa-ca.me/","license":"MIT","dependencies":{"@tarojs/async-await":"1.3.22","@tarojs/components":"1.3.22","@tarojs/redux":"1.3.22","@tarojs/redux-h5":"1.3.22","@tarojs/router":"1.3.22","@tarojs/taro":"1.3.22","@tarojs/taro-alipay":"1.3.22","@tarojs/taro-h5":"1.3.22","@tarojs/taro-swan":"1.3.22","@tarojs/taro-tt":"1.3.22","@tarojs/taro-weapp":"1.3.22","msal":"0.2.4","nerv-devtools":"^1.5.3","nervjs":"^1.5.3","react":"16.9.0","redux":"4.0.1","redux-logger":"3.0.6","redux-thunk":"2.3.0","taro-ui":"2.0.2"},"devDependencies":{"@babel/core":"^7.6.4","@babel/preset-env":"^7.6.3","@tarojs/cli":"1.3.22","@tarojs/plugin-babel":"1.3.22","@tarojs/plugin-csso":"1.3.22","@tarojs/plugin-sass":"1.3.22","@tarojs/plugin-stylus":"1.3.22","@tarojs/plugin-uglifyjs":"1.3.22","@tarojs/webpack-runner":"1.3.22","@types/jest":"^24.0.21","@types/react":"16.8.8","@types/webpack-env":"1.13.9","babel-eslint":"8.2.6","babel-jest":"^24.9.0","babel-plugin-transform-class-properties":"6.24.1","babel-plugin-transform-decorators-legacy":"1.3.5","babel-plugin-transform-jsx-stylesheet":"0.6.5","babel-plugin-transform-object-rest-spread":"6.26.0","babel-preset-env":"^1.7.0","eslint":"4.19.1","eslint-config-prettier":"^6.5.0","eslint-config-taro":"1.3.22","eslint-plugin-import":"2.16.0","eslint-plugin-prettier":"^3.1.1","eslint-plugin-react":"7.12.4","eslint-plugin-taro":"1.3.22","eslint-plugin-typescript":"0.12.0","gifencoder":"^2.0.1","jest":"^24.9.0","png-file-stream":"^1.2.1","prettier":"^1.18.2","puppeteer":"^2.0.0","taro":"*","typescript":"3.6.3"}}},"86":function(e,t,n){}}]);