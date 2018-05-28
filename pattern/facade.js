// 外观模式
// 门面模式：
  // ——把复杂的功能（接口）经过包装，让用户（开发者）能间接地，比较简单地去使用（调用）它们，简化使用（开发）的难度
// 优点：
// 1、可保持方法的简洁性，使它们不处理过多工作。

// 实现一个通用的，跨多种浏览器的时间绑定函数
function addEvent(el, type, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false);
  } else if (window.attachEvent) {
    el.attachEvent('on' + type, fn);
  } else {
    el['on' + type] = fn;
  }
}
