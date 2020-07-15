define(function (require) {
  // var m1 = require('./module1')
  // var m4 = require('./module4')
  // m1()
  // m4()

  var percent = require("./percent");
  let n = percent(60);
  if(n){
    alert("奖励欧巴一堆!!!")
  }else{
    console.log("奖励一个!!")
  }
})