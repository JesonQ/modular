requirejs.config({
  //模块标识名与模块路径映射
  paths: {
    "loger": "modules/loger",
    "dataService": "modules/dataService",
    "jquery":"libs/jquery-1.10.1",
    "rand":"modules/rand",
    "percent":"modules/percent",
  }
})

//引入使用模块
// requirejs( ['loger'], function(loger) {
//   loger.showMsg()
// })

requirejs( ['percent'], function(percent) {
  let n = percent(25);
  if(n){
    alert("劳斯莱斯10元优惠券一张!!")
  }else{
    console.log("再接再厉!!")
  }
})