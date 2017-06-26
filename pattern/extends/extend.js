// 共享原型
// 原则： 可复用的成员应该转移到原型中。

// 缺点：
// 任何子孙对象修改了原型，将影响整个继承树

function inherit (Child, Parent) {
  Parent.prototype = Child.prototype;
}


// 临时构造函数
原则：通过断开父对象与子对象的原型之间的直接链接关系，从而解决共享原型的问题


// 在child与parent之间建立一个空对象，将child与parent串联
function inherit (Child, Parent) {
  var F = fucntion () {};

  F.prototype = Parent.prototype;
  Child.prototpe = new F();
  Child.uper = Parent.prototype;
  Child.prototype.constructor = Child;
}

// 改进版： 优化构造时 重复创建临时构造函数
var inherit = (function() {
  var F = function () {};
  return function (C, P) {
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uper = P.prototype;
    C.prototype.constructor = C;
  }
}());
