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