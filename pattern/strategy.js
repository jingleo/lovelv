// 策略模式
// 策略模式支持在运行时选择算法

示例为：解决表单验证问题

input:
var data = {
  first_name: 'Super',
  last_name: 'Man',
  age: 'unknown',
  username: '0_0'
}

validator.config = {
  first_name: 'isNonEmpty',
  age: 'isNumber',
  username: 'isAlphaNum'
}

var validator = {
  types: {},
  messages: [],
  config: {},

  validate: function (data) {
    var i, msg, type, checker, result_ok;

    this.messages = []

    for (i in data) {
      if (data.hasOwnProperty(i)) {
        type = config[i];
        checker = this.types[type];

        if (!type) {
          continue;
        }

        if (!checker) {
          throw {
            name: 'Validation',
            message: 'No handler for ' + type
          }
        }

        result_ok = checker.validate(data[i]);
        if (!result_ok) {
          msg = 'Invalid value for ' + i + ',' + checker.instructions;
          this.messages.push(msg);
        }
      }
    }
    return this.hasErrors();
  },

  hasErrors: function () {
    return this.messages.length != 0;
  }
}
