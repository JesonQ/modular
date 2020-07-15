// 随机生成true的概率为25%
// 引入rand
let rand = require("./rand")
module.exports =  function percent(j) {
  let n = rand(1, 100)
  if (n < j) {
    return true;
  } else {
    return false;
  }
}