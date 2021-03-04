// 没有模块 没有闭包 不使用es6
/* 
  在没有模块化的情况下 每个文件中的变量容易重名， （因为真实开发是分工合作）
    会导致变量覆盖， 小明在a2.js文件中使用自己定义的变量时已经被小红给覆盖了， 所以if内的输出语句输出不出来
      
  var name = "小明";
  var flag = true

  这时候需要闭包的思想让变量有作用域
*/

// 使用闭包
/* 

  (function() {
    var name = "小明";]
    var flag = true
  })()

  这样每个js文件中的变量都不会冲突
  但是这样， 其他的js文件就使用不到其他js文件中的变量了
  
  所以需要在闭包的函数里面， 把想要共享的变量， 函数， 对象 都添加到一个新的对象里储存 在return出去
    并用一个变量去接收这个return值

  var aaa =  (function() {
    return  a = "1";
  })()
  
*/

var modelA =  (function() {
  var obj = {};
  var flag = true;
  obj.flag = flag
  return obj
})()