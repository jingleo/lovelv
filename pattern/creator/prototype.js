// 原型链
// 优点：
// 1、避免构造时重复创建私有属性，节省内存

function Gadget () {
  // 私有成员
  var name = 'jing leo';
  this.getName = function () {
    return name;
  };
}

Gadget.prototype = (function() {
  var browser = 'Mobile webkit';
  // 公有原型成员
  return {
    getBrowser: function () {
      return browser;
    }
  }
}());
