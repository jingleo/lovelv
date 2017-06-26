// 工厂模式：创建对象，通常在类或者类的静态方法中实现；
目标：
1、当创建相似对象时执行重复操作
2、在编译时不知道具体类型的情况下，为工厂客户提供一种创建对象的接口

function CarMaker() {}

CarMaker.prototype.driver = function () {
  // sadfsadfsa
}

CarMaker.fatory = function (type) {
  var constr = type,
      newCar;

  if (typeof CarMaker[constr] !== 'function') {
    throw {
      name: 'error',
      message: consrt + 'not exists'
    }
  }

  if (typeof CarMaker[constr].prototype.drive !== 'function') {
    CarMaker[constr].prototype = new CarMaker();
  }

  newCar = new CarMaker[constr]();

  retunr newCar;
}
