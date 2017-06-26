// 私有属性和方法
// 优点：
// 1、可以创建局部私有属性

function Gadget () {
  var privateName = 'aaa';
  this.getName = function () {
    return privateName;
  }
}

// getName 为特权方法
// ps: 在特权方法中返回的属性是数组、对象时，将导致属性内部的元素可修改
