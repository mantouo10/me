(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(44).concat([function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function classNames(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var i=classNames.apply(null,r);i&&t.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}void 0!==t&&t.exports?(classNames.default=classNames,t.exports=classNames):void 0===(r=function(){return classNames}.apply(e,[]))||(t.exports=r)}()},function(t,e,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,f=[],l=n(67);function addStylesToDom(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(addStyle(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(addStyle(r.parts[s],e));i[r.id]={"id":r.id,"refs":1,"parts":a}}}}function listToStyles(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={"css":i[1],"media":i[2],"sourceMap":i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={"id":s,"parts":[a]})}return n}function insertStyleElement(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function removeStyleElement(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function createStyleElement(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),addAttrs(e,t.attrs),insertStyleElement(t,e),e}function addAttrs(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function addStyle(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=c++;n=u||(u=createStyleElement(e)),r=applyToSingletonTag.bind(null,n,s,!1),o=applyToSingletonTag.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function createLinkElement(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",addAttrs(e,t.attrs),insertStyleElement(t,e),e}(e),r=function updateLink(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{"type":"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){removeStyleElement(n),n.href&&URL.revokeObjectURL(n.href)}):(n=createStyleElement(e),r=function applyToTag(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){removeStyleElement(n)});return r(t),function updateStyle(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=listToStyles(t,e);return addStylesToDom(n,e),function update(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}t&&addStylesToDom(listToStyles(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var p,h=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function applyToSingletonTag(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function toString(){return this.map(function(e){var n=function cssWithMappingToString(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function toComment(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports=!n(47)(function(){return 7!=Object.defineProperty({},"a",{"get":function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={"version":"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var r=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(n(98));e.default=function omit(t,e){for(var n=(0,r.default)({},t),o=0;o<e.length;o++)delete n[e[o]];return n},t.exports=e.default},function(t,e,n){},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(81);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(56),o=n(55);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},,,,function(t,e,n){(t.exports=n(46)(!1)).push([t.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""])},function(t,e,n){var r=n(62);"string"==typeof r&&(r=[[t.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(45)(r,o);r.locals&&(t.exports=r.locals)},,,,function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){(t.exports=n(46)(!1)).push([t.i,"body,\nhtml {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}",""])},function(t,e,n){var r=n(68);"string"==typeof r&&(r=[[t.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(45)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(55);t.exports=function(t){return Object(r(t))}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=!0},function(t,e,n){var r=n(50),o=n(51),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({"version":r.version,"mode":n(75)?"pure":"global","copyright":"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(76)("keys"),o=n(74);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(54),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(54),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(57),o=n(79),i=n(78);t.exports=function(t){return function(e,n,s){var a,u=r(e),c=o(u.length),f=i(s,c);if(t&&n!=n){for(;c>f;)if((a=u[f++])!=a)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(58),o=n(57),i=n(80)(!1),s=n(77)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(82),o=n(73);t.exports=Object.keys||function keys(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(83),o=n(72),i=n(71),s=n(70),a=n(56),u=Object.assign;t.exports=!u||n(47)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function assign(t,e){for(var n=s(t),u=arguments.length,c=1,f=o.f,l=i.f;u>c;)for(var p,h=a(arguments[c++]),d=f?r(h).concat(f(h)):r(h),v=d.length,y=0;v>y;)l.call(h,p=d[y++])&&(n[p]=h[p]);return n}:u},function(t,e){t.exports=function(t,e){return{"enumerable":!(1&t),"configurable":!(2&t),"writable":!(4&t),"value":e}}},function(t,e,n){var r=n(49);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(49),o=n(51).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(48)&&!n(47)(function(){return 7!=Object.defineProperty(n(87)("div"),"a",{"get":function(){return 7}}).a})},function(t,e,n){var r=n(49);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(89),o=n(88),i=n(86),s=Object.defineProperty;e.f=n(48)?Object.defineProperty:function defineProperty(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(90),o=n(85);t.exports=n(48)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(92);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(51),o=n(50),i=n(93),s=n(91),a=n(58),u=function(t,e,n){var c,f,l,p=t&u.F,h=t&u.G,d=t&u.S,v=t&u.P,y=t&u.B,b=t&u.W,m=h?o:o[e]||(o[e]={}),g=m.prototype,w=h?r:d?r[e]:(r[e]||{}).prototype;for(c in h&&(n=e),n)(f=!p&&w&&void 0!==w[c])&&a(m,c)||(l=f?w[c]:n[c],m[c]=h&&"function"!=typeof w[c]?n[c]:y&&f?i(l,r):b&&w[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[c]=l,t&u.R&&g&&!g[c]&&s(g,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var r=n(94);r(r.S+r.F,"Object",{"assign":n(84)})},function(t,e,n){n(95),t.exports=n(50).Object.assign},function(t,e,n){t.exports={"default":n(96),"__esModule":!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(n(97));e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},,,,,,,,,,function(t,e,n){"use strict";n(53);var r=n(2),o=n.n(r),i=n(52),s=n.n(i),a=n(44),u=n.n(a),c=(n(63),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),f=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();var l=function(t){function Text(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Text,o.a.Component),f(Text,[{"key":"render","value":function render(){var t=this.props,e=t.className,n=t.selectable,r=void 0!==n&&n,i=u()("taro-text",{"taro-text__selectable":r},e);return o.a.createElement("span",c({},s()(this.props,["selectable","className"]),{"className":i}),this.props.children)}}]),Text}();e.a=l},function(t,e,n){"use strict";n(53);var r=n(2),o=n.n(r),i=n(52),s=n.n(i),a=n(44),u=n.n(a),c=(n(69),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),f=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();var l=function(t){function View(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,View);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(View.__proto__||Object.getPrototypeOf(View)).apply(this,arguments));return t.state={"hover":!1,"touch":!1},t}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(View,o.a.Component),f(View,[{"key":"render","value":function render(){var t=this,e=this.props,n=e.hoverClass,r=e.onTouchStart,i=e.onTouchEnd,a=e.className,f=e.hoverStartTime,l=void 0===f?50:f,p=e.hoverStayTime,h=void 0===p?400:p,d=function _objectWithoutProperties(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["hoverClass","onTouchStart","onTouchEnd","className","hoverStartTime","hoverStayTime"]),v=u()("",function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=n,t}({},""+n,this.state.hover),a);return o.a.createElement("div",c({},s()(this.props,["hoverClass","onTouchStart","onTouchEnd","className","hoverStartTime","hoverStayTime"]),d,{"className":v,"onTouchStart":function _onTouchStart(e){n&&(t.setState(function(){return{"touch":!0}}),setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},l)),r&&r(e)},"onTouchEnd":function _onTouchEnd(e){n&&(t.setState(function(){return{"touch":!1}}),setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},h)),i&&i(e)}}),this.props.children)}}]),View}();e.a=l}])]);