// 分别暴露对应的  解构方式导入

// import {name, foo} from "./module1"
// import * as m1 from "./module1"
// console.log(name)
// console.log(foo)

// 通用方式导入  * 代表的是所有的数据  as 别名的意思
// import * as m2 from "./module2"
// console.log(m2)

// 简便导入之适用于默认暴露
// import m3 from "./module3"
// console.log(m3)
// import * as m3 from "./module3"
// console.log(m3.default.name)

// npm包
import $ from "jquery"
$("body").css("background","pink")
