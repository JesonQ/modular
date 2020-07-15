define(function (require,exports,module) {
  var name = 'module1';

  function fun1() {
    console.log(name);
  }

  //暴露模块
  module.exports = fun1
});