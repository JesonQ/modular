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