define(function (require,exports,module) {
  var name = 'module2';

  function fun2() {
    console.log(name);
  }

  //暴露模块
  module.exports = fun2
});