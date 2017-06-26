// 单体模式：保证一个特定类只有一个实例

// 实现方式：
// 1、静态属性中的实例
// 缺点：instance属性为公开属性

function Universe() {
  if (typeof Universe.instance === 'object') {
    return Universe.instance;
  }

  this.start_time = 0;
  this.bang = 'big';

  Universe.instance = this;
  return this;
}

var instance1 = new Universe()
var instance2 = new Universe()
instance1 === instance2 // true

// 2、闭包中的实例
// 缺点：首次调用构造函数后，再次调用则返回instance变量
// 任何添加到Universe()的原型中的对象都不会存在指向由原始实现所创建实例的原型链。

function Universe() {
  var instance = this;

  this.start_time = 0;
  this.bang = 'big';

  Universe = function () { // 重写构造函数
    return instance;
  }
}

var instance1 = new Universe()
var instance2 = new Universe()
instance1 === instance2 // true

// 改进
function Universe() {
  var instance;

  Universe = function () { // 重写构造函数
    return instance;
  }
  // 恢复原型属性
  Universe.prototype = this;

  instance = new Universe();

  instance.start_time = 0;
  instance.bang = 'big';
  return instance;
}

// 改进2 即时函数方式
var Universe;
(function() {
  var instance
  Universe = function Universe () {
    if (instance) {
      return instance;
    }

    instance = this;
  }
}());
