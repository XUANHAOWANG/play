// var obj= new Object();
// obj.name='你爸爸'
// obj.gender='man'
// obj.age='100'
// // //删除对像  delete 对象.属性名
// // delete obj.gender
// // console.log(obj)

// // //特殊符号对象属性名
// // obj['12']=888;
// // console.log(obj['12'])
// // //可以使用变量来代替自变量
// // var a='12'
// // console.log(obj[a])
// //对象可以是任何数据类型 包括对象本身

// var obj2=new Object()
// obj2.test = obj
// console.log(obj2.test.name)

//in 检查对象中是否有指定属性 有return true 无 return false


// var obj=new Object();
// obj.name='你爸'
// var obj2=obj

// obj.name='尼玛'//内堆栈地址数值改变
// console.log(obj.name)
// console.log(obj2.name)

//创建新对象
// var obj={}
// obj.name='你阿玛'
// console.log(obj)

// var obj={
//     name:'sa',
//     age:18,
//     gender:'male',
//     obj2: {
//         name:'卧槽',
//         address:'96b'

//     }
// }
// console.log(obj)

//function 也是对象 更加强大的 具有封装代码功能
//  var a= new function(){};
     

//   console.log(a)

//计算器
// function counter(a,b,c) {
//     alert('结果为 = '+a*b*c)
// return a,b,c
// }
// counter(prompt('请输入一个数'),prompt('请输入一个数'),prompt('请输入一个数'))

//创建函数 偶数返回true 否则 false
//  function even(even){
//     return even%2==0//==直接返回Boolean值 true or false
//  }

// console.log(even(8));
// console.log(even(34343));
// console.log(even(4225));

//求圆面积
// function area(a){
//     return 3.14*a*a
// }
// console.log(area(48))

//多参数传递
// function sayHellow(detail){
//  console.log('asdname is '+detail.name+'gender is '+detail.gender+detail.phone+detail.address)
// };
// var obj={
//     name:'你爸',
//     gender:'male',
//     address:'96B',
//     phone:'0276686628'
// };
// sayHellow(obj);

// function test(s){
//    s(obj)
    
// }
// test(sayHellow)


//立即执行函数
// (function(){
//     console.log('匿名函数')
// })()

//example2
// (function(a,b){
//     console.log(a*b);
// })(15,4)

//对象的方法调用
// var obj={};
// obj.name='王炫皓'
// obj.sayName=function(){
//     console.log(obj.name);
// };
// obj.sayName();

//调函数
// fun();

// //调方法
// obj.function()

//枚举对象中属性
//for in  每次执行时会将对象中的一个属性赋值给变量
// var obj={
//     name:'asd',
//     gender:'male',
//     age:'20',
// };
// // var 一个变量 in 对象
// for(var n in obj){
//     console.log(n);
//     console.log(obj[n]);
// }
 
//js最先解析var 和函数申明
// console.log(a)//undefined
// var a=10
// //函数声明提前
// //可以先调用 因为最先创建函数声明
// fun()//这里先调用 这就是hoisting

// function fun(){
//     console.log('function hoisting')
// }
// var a=10
// var c=50
// function fun1(){
//     c=150//这里没有使用var 这一变量作为全域
//     console.log(a);//实在找不到就全局找 没有的话就报错
//     var b=12
//    function fun2(){
//         console.log(b)//变量就近找 自身作用域
//     }fun2()
// }fun1()
// console.log(c)

// function fun3(c){//这里设置了一个形参 等同于 一个var
// console.log(c)//结果为undefined
// }
// fun3()//由于没有申明变量 
// var a=100
// var c;
// function test1(b){
// console.log(a)
// console.log(c)
//  c=50
// }
// test1(12)
// console.log(c)


//this 解析器在调用函数时每次会传达一个隐藏参数，
//this指向是一个对象，这个对象我们称为函数执行的上下文对象
//根据函数调用方式的不同 this指向不同的对象
//谁调用谁就是this 与创建方式无关
//以函数（function）调用时，this是window
//以方法（method），this就是调用方法的那个对象
function fun1(){
    console.log(this.name)
}


//creat an object

var obj={
    name:'你爸爸',
    sayName:fun1
}

obj.sayName()

var obj2={
    name:'你妈妈',
    sayName:fun1,
}
obj2.sayName()