
// if (flag) {
//   console.log("a2.js中的if执行了");
// }

// 接收 闭包返回的 flag

;(function() {

  if (modelA.flag) {
    console.log("a2.js中的if执行了");
  }
   
})()