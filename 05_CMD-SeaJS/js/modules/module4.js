//module4依赖于module2，module3
define(function (require,exports,module) {
  var name = 'module4';

  function fun4() {
    console.log(name);
  }
  //同步引入module2
  let module2 = require('./module2')
  module2()
  //异步引入module3
  require.async('./module3',function (m3) {
    m3();
  })
  //暴露模块
  module.exports = fun4
});