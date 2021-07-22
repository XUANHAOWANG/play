//Math属于工具类 里面封装了数学运算相关的属性方法
//直接使用
// console.log(Math.PI);

// console.log(Math.abs(-15));//绝对值
// console.log(Math.ceil(1.1));//上舍入
// console.log(Math.floor(1.9));//下舍入
// console.log(Math.round(1.5));//四舍五入
// console.log(Math.round(Math.random()*10)); //生成0到1之间的随机数

// //生成一个x-y之间的随机数
// //Math.round （Math.random()*(y-x)+x）

// console.log(Math.round(Math.random()*7+1)); 

// //max 获取多个数中的最大值
// var max=Math.max(10,50,12);
// console.log(max);

// //min 获取最小数
//  var min=Math.min(1,52,4);
//  console.log(min);

//  // pow 次方  sqrt 开方

//  console.log(Math.sqrt(45));
//  console.log(Math.pow(10,5));

// function exampleJavaScript(arr) {
// 	let newArr = []; 
//   for(let i= 0; i < arr.length; i++){    
//      newArr.push(Math.max.apply(0,arr[i]));
// }
//  return newArr
// }
// console.log(exampleJavaScript([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));

// let a=[1, 2, 3, 4, 5]
// console.log(Math.max(...a))

function max(a){
  let b=[];
for(let i=0;i<a.length;i++){
console.log(Math.max(...a[i]))
}
}
max([[123,45,8],[4,5,4,68],[78979,48]])


let ab=[[[1,2,3]],[[4,5,6]]]
for(let i=0;i<ab.length;i++){
  console.log(Math.max.apply(0,...ab[i]))
}


