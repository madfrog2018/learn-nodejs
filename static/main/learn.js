
/**
 * 如果几个函数具有相同的父级作用域，在这种情况下，在[[scope]]中存在的变量时会共享的
 * 一个闭包中变量的变化，也会影响另一个闭包中变量
 * @type {Array}
 */
/*第一个例子*/
var data = [];

for (var k = 0; k < 3; k++) {
  data[k] = function () {
    console.log(k);
  };
}
 
data[0](); // 3, but not 0
data[1](); // 3, but not 1
data[2](); // 3, but not 2
console.log("-----------分割线----------");
/*下面的能够得到预期的结果*/
var data = [];
 
for (var k = 0; k < 3; k++) {
  data[k] = (function (x) {
    return function () {
      console.log(x);
    };
  })(k); // 将k当做参数传递进去
}
 
// 结果正确
data[0](); // 0
data[1](); // 1
data[2](); // 2

console.log("-----------分割线----------");
/*第二个例子*/
function baz() {
  var x = 1;
  return {
    foo: function foo() { return ++x; },
    bar: function bar() { return --x; }
  };
}
 
var closures = baz();
 
console.log(
  closures.foo(), // 2
  closures.bar()  // 1
);

/*EOF*/

console.log("-----------分割线----------");
/**
 * 闭包保存的静态作用域。闭包是一系列代码块（在ECMAScript中是函数），
 * 并且静态保存所有父级的作用域。通过这些保存的作用域来搜寻到函数中的自由变量。
 */

function foo() {
  var x = 10;
  return function bar() {
    console.log(x);
  };
}
// "foo"返回的也是一个function
// 并且这个返回的function可以随意使用内部的变量x
var returnedFunction;
returnedFunction = foo();
 
// 全局变量 "x"
var x = 20;
 
// 支持返回的function
returnedFunction();// 结果是10而不是20,优先查找顶层上下文内容

/*EOF*/
console.log("-----------分割线----------");

if (true) {
  var a = 1;
} else {
  var b = 2;
}

console.log(a);
console.log(b);
