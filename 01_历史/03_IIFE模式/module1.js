(function () {
  //数据
  let data = 'atguigu.com'

  //操作数据的函数
  function foo() { //向外暴露的内部私有函数
    console.log(`foo() ${data}`)
  }

  function bar() {//向外暴露的内部私有函数
    console.log(`bar() ${data}`)
    otherFun() //内部调用
  }

  function otherFun() { //未暴露的内部私有函数
    console.log('otherFun()')
  }

  //暴露行为
  window.myModule = {foo, bar}
})()