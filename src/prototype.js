// //所创建的每一个函数 解析器都会添加了一属性prototype
// //这个属性对应一个对象 这个对象就是我们所谓的原型对象
// //当函数以构造函数调用时，它所创建的对象中都会有一个隐含的属性
// // //指向该构造函数的原型对象，我们可以通过_proto_来访问该属性
// function MyClass(){

// };
// MyClass.prototype.a=123;
// var mc= new MyClass();//mc 包含有myClass的prototype
// var mc2=new MyClass();
// MyClass.prototype.sayHellow=function(){//方法放在原型里
//     console.log('hellow');
// };
// mc.sayHellow();//从原型里面调 sayHellow
// console.log(mc2.a);//去原型找a

// function Person(name){
// this.name=name;//必须在原型里使用this声明
// };

// Person.prototype.sayName= function (){
//     console.log( this.name);
// };
// //以上为放在原型里的方法


// var  p1=new Person('xuanhaowang');
// var p2=new Person('asd');
// p1.sayName();
// p2.sayName();

//PROTOTYPE
function MyClass(){

}
MyClass.prototype.name='prototype';
var mc=new MyClass();
console.log(mc.name);
console.log('name' in mc);//name in prototype

console.log(mc.hasOwnProperty('name'));
console.log(MyClass.prototype.hasOwnProperty('name'));
console.log(MyClass.prototype.hasOwnProperty('hasOwnProperty'));

//原型对象也是对象 它也有原型 
//当使用一个方法时 会在自身中寻找
//如果没有则去原型中寻找
//原型没有就去原型的原型中找
console.log(mc.prototype.prototype.hasOwnProperty('hasOwnProperty'));