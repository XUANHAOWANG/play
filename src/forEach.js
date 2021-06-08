// //forEach()

// // var arr=['asd','dag','aga','ya','jga','agn'];

// // function fun(){


// // }
// // arr.forEach(function(a){//这种函数由我们创建 但不由我们调用  这是回调函数
// // console.log(a)   //数组中有几个索引就 函数就执行几次 并将里面的内容以实参传递过来
// // }); //可以定义形参 来传递内容   只会传递最多三个参数
// // //   传递过来的第一个参数为 元素  第二个参数为 索引   第三个参数为 正在遍历的 数组


// function Person(name,age){
//     this.name=name;
//     this.age=age;
//      };
    
//      Person.prototype.people=function (){
//          console.log(this.name+this.age)
//      };
//      var per=new Person('Nima   ',20);
//      var per2=new Person('哇嘎   ',10);
//      var per3=new Person('嘎嘎   ',10);
//      var per4=new Person('N爱韩庚   ',20);
//      var per5=new Person('Ni给  ',50);
//     // per2.people();
//     // per3.people();
//     // per4.people();
//     // per5.people();
//     // per.people();
    
    
//     var perArr=[per,per2,per3,per4,per5];
//     console.log(perArr);
//     function getAge(arr){
//         var newArr=[];
//         arr.forEach(function(a,b){
//             if(arr[b].age>18){
//                 newArr.push(arr[b])
//             }

//         })
//         console.log(newArr);
//         return newArr
//     };
//     getAge(perArr);
    

//slice()从数组中提取需要元素

     
     var perArr=['Ni给  ','N爱庚   ','嘎嘎   ','哇嘎   ','Nima   '];

//slice(参数1，参数2)  
//1 截取开始的位置  包含开始的index
//2 截取结束的位置   不包含结束的index
//该方法不会改变原数组 只会封装到一个新数组
//如果传递一个负数 则会从后往前 计算
// var result=perArr.slice(0,3);
// console.log(result);

//  result=perArr.slice(2,-1);
//  console.log(result);

// //splice会删除原数组数值 并将其装进封包

//  result=perArr.splice(0,2);//第一个表示 开始的index 第二个表示删除的数量 从第一个参数的索引开始计算 
//  console.log(result);
//  console.log(perArr);
// perArr.splice(1,0,'尼玛','你爸');//第二参数为零时 不删除任何参数 并在指定位置插入新数据
// console.log(perArr)

//去重练习
// var arr=[1,2,3,2,1,3,4,2,5];
// var result;
// for(var i=0; i<arr.length; i++){
    
// for(var j=i+1; j<arr.length; j++){
//     if(arr[j]==arr[i]){
//         arr.splice(j,1);//比较索引删除同样的数据
//         j--;// 删除后 后面的索引会向前进位 所以J-- 在执行一次 以防止BUG
//     }
//     } 
    
// }

// console.log(arr);

//练习2
 var arr=[2,1,13,40,6,5,7,7,7];

//  for(var i=0;i<arr.length; i++){

//     for(var j=i+1;j<arr.length; j++){
//         if(arr[j]==arr[i]){
//             arr.splice(j,1);
//             j--;
//         }
//     }
//  }


// 如果返回一个大于0的值 元素交换位置
//小于一个0的 值 元素位置不变
// 返回一个相等的值 元素位置依然不变
arr.sort(function(a,b){
    return a-b;//使用回调函数
     }
     )

     arr.sort(function(a,b){return b-a})//降序排列 b-a
 console.log(arr);//数组正排序  按unicode 编码进行排序

//  console.log(arr.reverse())//数组 倒排序


//  var arr1=[5,4,1,2,1];
//  var arr2=[12,20,1,2,3,4];
// var newa=arr.concat(arr1,arr2);//concat 不会对原数组产生影响
//  newa.sort();
//  console.log(newa);

//  newa=newa.join('$');//join（）不会对原数组产生任何影响  括号里参数为连接符号
 
//  console.log(newa);
//  console.log(typeof newa)
