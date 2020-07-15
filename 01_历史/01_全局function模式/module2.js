let data2 = 'other data';

function foo() {  //这里与另一个模块中的函数冲突了
  console.log(`foo() ${data2}`)
}