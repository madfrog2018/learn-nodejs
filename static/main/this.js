/**
 * this指针是与上下文环境相关的一个特殊对象，它可称为上下文对象 
 * 牢记: this是执行上下文环境的一个属性，而不是某个变量对象的属性
 * 任何对象都可以作为上下文的this。
 * this没有类似的搜寻变量的过程，this的值是直接从执行的上下文中获取的
 */
// "foo"函数里的alert没有改变
// 但每次激活调用的时候this是不同的
 
function foo() {
  console.log(this);
}
 
// caller 激活 "foo"这个callee，
// 并且提供"this"给这个 callee
 
foo(); // 全局对象
foo.prototype.constructor(); // foo.prototype
 
var bar = {
  baz: foo
};
 
bar.baz(); // bar
 
(bar.baz)(); // also bar
(bar.baz = bar.baz)(); // 这是一个全局对象
(bar.baz, bar.baz)(); // 也是全局对象
(false || bar.baz)(); // 也是全局对象
 
var otherFoo = bar.baz;
otherFoo(); // 还是全局对象