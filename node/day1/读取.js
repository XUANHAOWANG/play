//fs 是file-system的缩写
//想要操作文件 就得引入fs模块
// fs.readFile就是用来读取文件的

//第一步 使用require方法加载 fs核心模块
var fs = require('fs')

//读取文件
//读取的文件路径
//第二个参数是一个回调函数

// 成功
// data 数据
// error null
//失败
//data null
// error  错误对象 一个 object
fs.readFile('./node/day1/node.txt',function(err,data){

    //这里看到的是二进制 然后二进制转进了16进制
    console.log(data)

    // 加上 .toString() 方法可以显示我们的文本内容
    console.log(data.toString())


})



