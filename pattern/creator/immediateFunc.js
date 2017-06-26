// 即时函数  有称为模块模式

// 缺点：
// 1、当将私有成员与构造函数一起使用时，每次调用构造函数创建对象时，私有成员都会重新创建

var myApp =(function () {
    var name = 'aaa';
    return {
        getName: function () {
            return name;
        }
    }
}());
