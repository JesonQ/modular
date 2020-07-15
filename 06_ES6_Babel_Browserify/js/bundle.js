(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

var m2 = _interopRequireWildcard(_module2);

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(_module.name); // 分别暴露对应的  解构方式导入

console.log(_module.foo);

// 通用方式导入  * 代表的是所有的数据  as 别名的意思

console.log(m2);

// 简便导入

console.log(_module4.default);
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.position = position;
exports.foo = foo;
// 分别暴露

var name = exports.name = "鲁班";

function position() {
  console.log('m1-----打野');
}

function foo() {
  console.log("m1-----foo()");
}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 统一暴露

var school = "guigu";

function study() {
  console.log("m2------学习");
}

exports.school = school;
exports.study = study;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 默认暴露

exports.default = {
  name: "金莲",
  open: function open() {
    console.log("m3-----打开天窗说亮话");
  }
};
},{}]},{},[1]);
