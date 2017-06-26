// 沙箱模式
优点：


functino Sandbox () {
  var args = Array.prototype.slice.call(arguments),
      // 最后一个参数为回调函数
      callback = args.pop(),
      modules = (args[0] && typeof args[0] === 'string') ? args : args[0],
      i;

  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback)
  }

  // 添加一个属性
  this.a = 1;

  // 添加模块
  // 如果modules为空 或 ‘*’ 则添加所有模块
  if (!modules || modules === '*') {
    modules = [];
    for (i in Sandbox.modules) {
      if (Sandbox.modules.hasOwnProperty('i'))) {
        modules.push(i);
      }
    }
  }

  for (var i = 0; i < modules.length; i++) {
    Sandbox.modules[modules[i]](this);
  }

  callback(this);
}

Sandbox.prototype = {
  name: 'My namespace',
  version: '1.0',
  getName: function () {
    return this.name;
  }
}
