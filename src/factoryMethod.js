// //factory 可以大量创建对象

// function newObj(name,gender,age){
//     var obj=new Object();

//      obj.name=name;
//      obj.gender=gender;
//      obj.age=age
//      console.log(obj)
//     return obj;
// }

// var obj2=newObj('爸爸','male',18);
// var obj3=newObj();
// var obj4=newObj();


//构造函数 平时使用时首字母大写
//构造函数和普通函数调用方式不同 需要使用 new关键字来调用
function Person(name,age,gender){
this.name=name;
this.age=age;
this.gender=gender;}
//构造函数执行流程
//创建一个新对象
//将新建对象设置为函数中的this，在构造函数中可始用this来引用新建对象
//逐行执行函数中的代码
//新建得对象最为返回值返回
//使用同一个构造函数 叫做类对象
var per=new Person('我妹',20,'females');
var per1=new Person('我哥',15,'male');
var per3=new Person('尼玛',15,'females');
var per4=new Person('你爸',64,'male');
console.log(per);
console.log(per1); 
console.log(per3);
console.log(per4);
//instance 使用一个instanceof 可以检查一个对象是否是一个函数得实例
//对象 instanceof 函数
console.log(per3 instanceof Person)
console.log(per3 instanceof Object)


//this 以函数调用时是window
//以方法调用时 谁调用就是谁
//以构造函数调用时 this就是新创建的那个对象

