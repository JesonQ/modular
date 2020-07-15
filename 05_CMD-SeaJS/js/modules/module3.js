define(function (require,exports,module) {
  var name = 'module3';

  function fun3() {
    console.log(name);
  }

  //暴露模块
  module.exports = fun3
});