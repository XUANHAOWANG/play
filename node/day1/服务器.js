const fs = require('fs')
//http 模块 构建服务器
const http = require('http')
//使用http.creatServer（） 创建web服务器

const server=http.createServer()

//服务器接受和处理请求
//注册 request请求事件
//当客户端请求过来 自动触发 request事件 然后执行第二个参数 回调函数
server.on('request', function(){
    console.log('操')
})
//绑定端口号 启动服务器
server.listen(3000, function(){
    console.log('启动服务器')
})