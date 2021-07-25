var fs= require('fs');

//第一个参数（文件路径）  第二个参数（文件内容） 第三个参数 回调函数
//回调函数里的形参 error
// 成功：  error是null
//失败 ：  error的 错误对象
fs.writeFile('./node//day1/first.md','i am xuanhao wang',function(error){
console.log(error)

})