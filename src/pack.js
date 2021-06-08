//包装类 
//string（） number（） Boolean（） 首字母大写
//以上三种方法可以把基础数据转换为各自类型

var num=new Number(3);
 num2=3;
console.log(num);
console.log(num===num2);


var bo=new Boolean(true);
bo2=true;

console.log(bo==bo2);
console.log(bo===bo2);


//方法只能添加给对象 不能添加给基本数据类型
//当我们对一些基本数据类型调用属性和方法时
//浏览器会临时使用包装类将其转换为对象，然后调用对象的属性和方法

var s=123;

s=s.toString();//自动暂时转换为Object 赋值后 销毁当前Object

console.log(s);
console.log(typeof s);