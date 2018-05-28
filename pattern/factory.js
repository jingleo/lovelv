// 工厂模式：创建对象，通常在类或者类的静态方法中实现；
// 目标：
// 1、当创建相似对象时执行重复操作
// 2、在编译时不知道具体类型的情况下，为工厂客户提供一种创建对象的接口

// a.js
function SuperAdmin() {
  this.name = "超级管理员",
    this.viewPage = ['首页', '通讯录', '发现页', '应用数据', '权限管理']
}
// b.js
function Admin() {
  this.name = "管理员",
    this.viewPage = ['首页', '通讯录', '发现页', '应用数据']
}
// c.js
function NormalUser() {
  this.name = '普通用户',
    this.viewPage = ['首页', '通讯录', '发现页']
}

// factory
var Factory = function (type, content) {
  if (this instanceof Factory) {
    return new this[type](content);
  } else {
    return new Factory(type, content);
  }
}

Factory.prototype = {
  SuperAdmin: function () {
    return new SuperAdmin()
  },
  Admin: function () {
    return new Admin()
  },
  NormalUser: function () {
    return new NormalUser()
  }
}