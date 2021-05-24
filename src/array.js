// //三种对象
// // 内建对象 宿主对象 自定义对象
// //数组里为 index 索引 0,1,2,3,4,...,
// // var arr=new Array();
// // console.log(typeof arr);
// // console.log(arr.length)
// // arr[0]=5;
// // arr[10]=55
// // //对于非连续的数组，使用length获取到最大索引 index
// // //尽量不要创建非连续数组
// // console.log(arr.length)
// // arr.length=1;
// // //数组长度多少就显示多少为索引
// // console.log(arr)

// // arr1=[10];
// // arr2=new Array(5);//括号里是长度
// // console.log(arr1);
// // console.log(arr2);


// //push 该方法向数组末尾添加 一个或多个元素
// var arr= new Array();
// for(var i=0;i<10;i++){
// arr.push(1)
// };//每次往数组添加一个新索引
// console.log(arr);
// for(var i=0;i<10;i++){
//     arr.pop(1)//每次删除一个索引
//     };
//     console.log(arr);

//     //unshift 和push一样 不过在开头添加索引
//     for(var i=0;i<10;i++){
//         arr.unshift(2)//每次z在开头添加一个索引
//         };
//         console.log(arr);

// //shift 与pop一样 不过从前面删除

// arr.shift();
// console.log(arr);
// console.log(arr.length);//前面删除了一位


 //提取所有大于十八岁的对象 装进一个arr

 function Person(name,age){
this.name=name;
this.age=age;
 };

 Person.prototype.people=function (){
     console.log(this.name+this.age)
 };
 var per=new Person('Nima   ',20);
 var per2=new Person('哇嘎   ',10);
 var per3=new Person('嘎嘎   ',10);
 var per4=new Person('N爱韩庚   ',20);
 var per5=new Person('Ni给  ',50);
// per2.people();
// per3.people();
// per4.people();
// per5.people();
// per.people();


var perArr=[per,per2,per3,per4,per5];
console.log(perArr);
function getAge(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i].age>=18){
           newArr.push(arr[i]);
           
      }
    }
    console.log(newArr);
    return newArr
};
getAge(perArr);
