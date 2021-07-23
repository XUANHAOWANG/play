const http=require('http');
// const test= require('./test');
const route=require('./route');
const server=http.createServer(routes.handler);

server.listen(3000)