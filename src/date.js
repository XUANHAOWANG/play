// var d=new Date();
// console.log(d);//如果直接使用构造函数 创建一个Date对象 会封装当前代码到执行时间

//创建指定时间 需要在构造函数中传递一个表示时间的字符串
var d2=new Date('05/24/2021 22:59:50');
console.log(d2);

var date=d2.getDate();
console.log(date);//获取当前对象date

date=d2.getDay();
console.log(date);//获取当前时周几  0表示周日

date=d2.getMonth();
console.log(date);//获取当前月份 0表示一月 以此类推

date=d2.getTime();
console.log(date);//获取当前时间戳  从格林威治标准时间 1970年一月一日 0时0分0秒
//计算机底层在保存时间时使用的都是时间戳
console.log(date/1000/60/60/24/365);

var d3=new Date('1/1 1970 0:0:0');
time=d3.getTime();
console.log(time)
var d=Date.now();
console.log(d)
//以下为计时器
var start=Date.now();
for(var i=0;i<2000;i++){
    console.log(i)
}

var end=Date.now();
console.log(end-start);
