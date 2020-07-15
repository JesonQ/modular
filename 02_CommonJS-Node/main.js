// let module1 = require('./modules/module1')
// let module2 = require('./modules/module2')
// let module3 = require('./modules/module3')
// 引入rand
// let rand = require("./modules/rand")
// 引入percent
let percent = require("./modules/percent")
// let a = require('uniq')

// module1.foo()
// module1.bar()
// module2()
// module3.foo()
// module3.bar()

// let arr = [1,11,2,2,2,5,5,5,3,4,6,6,9,7,8]
// console.log(a(arr));


// 调用
// console.log(rand(1, 10))
// 调用percent
let g = percent(25)
if(g < 25){
  console.log("媳妇来了!!")
}else{
  console.log("好好学习!!")
}



