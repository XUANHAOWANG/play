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

var obj={
    name:'sa',
    age:18,
    gender:'male',
    obj2: {
        name:'卧槽',
        address:'96b'

    }
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


asd (a)=>a(obj);
asd(obj)



