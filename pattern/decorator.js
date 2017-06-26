// 装饰者模式
// 可以在运行时动态添加附加功能到对象中。
// 实现装饰者模式的方法：
// 1、使每个装饰者成为一个对象，并且对该对象包含了应该被重载的方法。
// 　 每个装饰者继承了已经被前一个装饰者进行增强后的对象。

function Sale(price) {
  this.price = price || 100;
}

Sale.prototype.getPrice = function () {
  return this.price;
}
// 装饰器方法
Sale.prototype.decorate = function (decorator) {
  var F = functon () {},
      overrides = this.constructor.decorators[decorator],
      i, newObj;

  F.prototype = this;
  newObj = new F();
  newObj.uber = F.prototype;

  for (var i in newObj) {
    if (overrides.hasOwnProperty(i)) {
      newObj[i] = overrides[i]
    }
  }
  return newObj;
}

Sale.decorators = [];

Sale.decorators.fadtax = {
  getPrice: function () {
    var price = this.uber.getPrice();
    price += price * 5 / 100;
    return price;
  }
}

Sale.decorators.quebec = {
  getPrice: function () {
    var price = this.uber.getPrice();
    price += price * 7.5 / 100;
    return price;
  }
}

Sale.decorators.money = {
  getPrice: function () {
    return '$' + this.uber.getPrice().toFixed(2);
  }
}

Sale.decorators.cdn = {
  getPrice: function () {
    return 'CDN$' + this.uber.getPrice().toFixed(2);
  }
}

// 实现方法2：运用列表
// 将装饰器名称写入装饰列表
function Sale(price) {
  this.price = (price > 0) || 100;
  this.decorators_list = [];
}

Sale.decorators = {};
Sale.decorators.fedtax = {
  getPrice: function (price) {
    return price + price * 5 / 100;
  }
}
Sale.decorators.quebec = {
  getPrice: function (price) {
    return price + price * 7.5 / 100;
  }
}

Sale.prototype.decorate = function (decorator) {
  this.decorators_list.push(decorator);
}
Sale.prototype.getPrice = function () {
  var price = this.price,
      i,
      max = this.decorators_list.length,
      name;

  for (var i = 0; i < max; i++) {
    name = this.decorators_list[i];
    price = this.decorators_list[name].getPrice(price);
  }
  return price;
}
