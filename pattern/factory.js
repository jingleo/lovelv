// 工厂模式：创建对象，通常在类或者类的静态方法中实现；
// 目标：
// 1、当创建相似对象时执行重复操作
// 2、在编译时不知道具体类型的情况下，为工厂客户提供一种创建对象的接口

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

  return newCar;
}


//simple factory
var LoginPopFactory = (function () {
  class LoginPopFactory {
    constructor(name, text) {
      // 这边需要些很长
      switch (name) {
        case 'Alert':
          // 创建参数可能需要频繁改动
          return new LoginAlert(text);
        case 'Confirm':
        default:
          return new LoginConfirm(text);
      }
    };

  };
  return LoginPopFactory;
})();
var nameConfirm = new LoginPopFactory('Confirm', '你的用户名不存在！');
nameConfirm.show();

// 抽象工厂
var VehicleFactory=function(subType,superType){
  //判断抽象工厂中是否存在该抽象类
  if(typeof VehicleFactory[subType] === 'function'){
      //缓存类
      function F();
      //继承父类的属性与方法
      F.prototype=new VehicleFactory[superType]();
      //将子类的constructor指向子类
      subType.constructor=subType;
      //子类的原型继承“父类”
      subType.prototype=new F();
  }
  else {
      throw new Error('未创建该抽象类');
  }
}
//小汽车
VehicleFactory.Car=function(){
  this.type='car';
};
VehicleFactory.Car.prototype={
  getPrice:function(){
      return new Error('抽象方法不能调用');
  },
  getSpeed:function(){
      return new Error('抽象方法不能调用');
  }
};
//公交车
VehicleFactory.Bus=function(){
  this.type='bus';
};
VehicleFactory.Bus.prototype={
  getPrice:function(){
      return new Error('抽象方法不能调用');
  },
  getPassengerNum:function(){
      return new Error('抽象方法不能调用');
  }
}