// 产生随机数
// rand(1, 10)
// module.exports = function rand(m, n){
//   return Math.ceil(Math.random() * (n-m+1)) + m-1
// }

define(function (require,exports,module){
  
  function rand(m, n){
    return Math.ceil(Math.random() * (n-m+1)) + m-1
  }

  // 暴露
  module.exports = rand
})