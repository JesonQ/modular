// 产生随机数
// rand(1, 10)
// module.exports = function rand(m, n) {
//   return Math.ceil(Math.random() * (n - m + 1)) + m - 1
// }

define(function (require, factory) {
  function rand(m, n) {
    return Math.ceil(Math.random() * (n - m + 1)) + m - 1
  }

  return rand;

});