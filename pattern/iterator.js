// 迭代器模式
// 在迭代器模式中，通常有一个包含某种数据集合的对象。该数据可能存在在一个复杂数据结构的内部，
// 从而需要提供一种简单的方法能够访问数据结构中的每个元素。

// 一般拥有next方法，以便访问集合元素
// hasNext方法判定是否访问结束

var agg = (function () {
  var index = 0;
  var data = [0, 1, 2, 3, 4, 5];
  var length = data.length;

  return {
    next: function () {
      var element;

      if (!this.hasNext()) {
        return null;
      }

      element = data[index];
      index++;
      return element;
    },

    hasNext: function() {
      return index < length;
    },

    rewind: function () {
      index = 0;
    },

    current: function () {
      return data[index];
    }
  }
}())
