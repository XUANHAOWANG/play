// two arguments,return the arguement in an array.

//function newArr(a,b){
//let arrOne = [a,b]
//return arrOne
//}
//console.log(newArr(1,2 ))

// let newArr=(a,b) =>[a,b]

// // let newArr=(...a) =>a
// console.log(typeof newArr)
// console.log(newArr(1,'ha',1,32,4124,4))


// let arrTow=['HX',13,88,33,66,55,65,75,83]
// console.log(arrTow[3],arrTow[6])



// function a(arr){
// let sum =0;
// arr.forEach(num =>sum += num)
// return sum%2===0?'even':'odd'

//     }

// function oddOrEven(x){
//     let sum=0;
//     for(let i=0;i<x.length;i++){
//         sum+=x[i]
//         if(sum%2===0){
//             return 'even'
//         }
//         else{
//            return 'Odd'
//         }
//     }
// }
// console.log(oddOrEven([11,2,3,4,5,6,7,8,9,10,11]))

// function stringToNumber(arr){
// return arr.map(x=>String(x));

// }
// function stringToNumber(arr){
//     newArr=[]
//     arr.forEach((x)=>{
//         newArr.push(parseInt(x))
//     })
//     return newArr
// }

// console.log(stringToNumber(['9.5','8.5']))

// function arrToString(arr){
//     let text=''
//     for(let i=0; i< arr.length; i++){
//         text+=arr[i]
//     }
//     return text
// }
// console.log(arrToString([1,2,3,5,6,9,]))


// function arratToString(arr){
//     return arr.join('');
// }

// const arrToString = arr=>arr.join('');
// console.log(arrToString([1,2,3,]));

// function gnirts(x){
// let arr=x.split('')
// console.log(arr)
// let newArr=arr.reverse()
// console.log(newArr)
// let joinNewArr=newArr.join('')
// console.log(joinNewArr)
// return joinNewArr
// }


// const gnirts=(x)=>x.length<2?str.reverse(str.slice(1,str.length))+str[0];  //doesn't work at the moment
// console.log(gnirts('ASDFG'))

// let a=true&&false;
// console.log(a) 


// b=false||0

// console.log(b)

// console.log('\u2620')
// //web unicode  need 十进制
// //<h1>&#+Unicode编码（十进制）</h1>

// console.log(1!=1)
// console.log('1'==1)
// console.log('1'===1)

// //NA不和任何相等 包括本身
// var x=NaN
// console.log(isNaN(x))
// console.log(typeof(x))

// //=== 不转换直接做运算
// console.log('123'===123)//false

// true?console.log('nibaba'):console.log('nimama')



//三元运算
// var a=200;
// var b=180;
// var c=a>b ? a: b;
// d=210
// c=c>d?c:d;
// console.log(c)
// max=a>c?a>b?a:c:b>c?b:c
// console.log(max)

//局部statement
// {
//     var a=10;
//     console.log('nihao')
//     console.log('nibaba')
// }
// console.log(a)

//if 练习
// //prompt 弹出文本款并可以输入文本
// while(true) {var score=prompt('please type youo score here');
// if(score<=100&&score>=0){break
    
// } else {alert('score not valid')}
// }
// if (score>100||score<0||isNaN(score)){
//     alert('fuck!!')
// }else if(score==100){
//     alert('BMW');
//     }
//     else if(score>=80){
//         alert('iphone');
//     }
//     else if(score>=60){
//         alert('you just pass')
//     }
// else{
//     alert('we need talk');
// };

    
//     else{
//         alert('need more study');
//     };
//条件运算 同时满足或单独满足其一
// var height=prompt('your height');
// var money=prompt('your money');
// var looks=prompt('looks score');  
// if(isNaN(height)||isNaN(money)|isNaN(looks)){
// alert('Fuck you')
// } else{
// if(height>=180&&money>=100000&&looks>=70){
//     alert('good might marry with you');
// } else if(height>=180||money>=100000|looks>=70){
//     alert('nice can marry with you');
// }else{
//     alert('never marry with you');
// };
// };

//number arrange
// var nu1=+(prompt('number'));
// var nu2=+(prompt('number'));
// var nu3=+(prompt('number'));

// if(isNaN(nu1)||isNaN(nu2)||isNaN(nu3)){
//     alert('kidding me?')}
//  else if(nu1>nu2&&nu1>nu3){
//     if(nu2>nu3){
//         alert(nu1+''+nu2+''+nu3);
//     } else if(nu2<nu3){
//         alert(nu1+nu3+nu2);
//     }
// }  else if(nu2>nu1&&nu2>nu3){
//     if(nu1>nu3){
//         alert(nu2+''+nu1+''+nu3);
//     }else{
//         alert(nu2+''+nu3+''+nu1);
//     }
// } else if(nu3>nu1&&nu3>nu2){
//     if(nu1>nu2){
//         alert(nu3+''+nu1+''+nu2);
//     }
//     else(
//         alert(nu3+''+nu2+''+nu1)
//     )
// };

 //switch statements 
// var result=+prompt('your score');

// switch(result>=60){
//     case true:
//         alert('pass');
//         break; 
//         case NaN:
//         alert('what the hill');
//         break;

   
//        default :
//            alert('what the hill');
//            break;
// };

//another way

// var result= + prompt('score');
// switch(parseInt(result/10)){
//     case 10:
//         case 9 :
//             case 8:
//                 case 7 :
//                     case 6:
//                         alert('pass');
//                         break;
//                         default:
//                             alert('didnt pass');
//                             break;
                          

// };

//while// do...while

// var a=0;
// var b=20;
// while(a<9,b>10){
//     a++,b--;
//    console.log(a,b);
// };
// //保证循环体执行一次
// do{
//     console.log(a++,b--)
// }while(a<15,b>5)





//while practices
// var year=0;
// var money=1000;

// while(money<5000){
// money=money*1.05,year++;
// console.log(money,year)
// };


//for Loop
//求1-100奇数和
// var sum=0
// for(i=1;i<100;i++){
    
//     if(i%2!=0){
//      console.log(i)
//       sum=sum+i
//     };
// };
// console.log(sum)


//1-100 7的倍数和
// for(i=7,count=0,sum=0;i<100;i=i+7){
//     if(i%7==0){

//         console.log(i);
//         sum =sum+i;
//         count++
//     }
// }
// console.log(sum)
// console.log('thre are  '+count+' times  of  7 ')

//水仙花 

// for(i=100,hum=0,ten=0,ge=0;i<1000;i++) {
// hum = parseInt(i/100);//取整百位数
// ten=parseInt((i-hum*100)/10);//取整十位数
// ge=i%10//取整个位数
// if(hum*hum*hum+ten*ten*ten+ge*ge*ge==i){
//     console.log(i);
// }
    
// };

// //取质数
//     var num=+prompt('a number');
//     var flag=true;
   
//      if (num>=2){
//         for(i=2;i<num;i++){
//         if(num%i==0){
          
//             flag=false;//使用标记 来检查质数

//         }
//         if(flag){
//             alert('you did right');
//             break;
//         }else{
//             alert('this if not a ...')
//             break;
//         }
  
//     } 
// }

//加强上面的代码
//  var num=+prompt('input a number');

 

//  for(i=2;i<num;i++){
//      if(num%i==0){
         
//          alert('这不是质数');
         

//      }
//      else{alert('这是质数')}
//      break;
//  };


//页面输入*
// for(i=0;i<5;i++){ //高度
//  for(j=0;j<i+1;j++){//宽度
// document.write('*')
//  } document.write('<br/>')
// }

//倒三角
// for(i=0;i<5;i++){
//     for(j=0;j<i+1;j++){
//         document.write('*')
//     }document.write('<br/>')
// }

//99乘法表
// for(i=1;i<10;i++){
//     for(j=1;j<i+1;j++){
//         document.write(i+'X'+j+'='+i*j)
//     }document.write('<br/>')
// }

//打印100内所有质数
// for(i=100;i>2;i--){
    
//    for(j=2;j<101;j++){
//        if(i%j==0){
//            break;
           
//        } else{
//             console.log(i);
//             break;
//     }
          
           
       
//    }
// }

// //另一种思路 求100内质数  开平方根
// console.time('a');
//  var flag=true;
// for(i=3;i<10000;i++){
   
//     for(j=2;j<=Math.sqrt(i);j++){
//         if(i%j==0){
           
//            break;
//         }
//         if(flag){
//             console.log(i);
//            break;
//         }
//     }
// }
// console.timeEnd('a') 
//break 和for循环 命名  
// niba:for(i=0;i<10;i++){
//     console.log(i)
//     for(j=0;j<10;j++){
// break niba;
//     }
// }

// continued
// 跳过当此循环后继续执行
// console.time('test')
// for(i=1;i<5;i++){
//     if(i==3){  //跳过3
//         continue;
//     }console.log(i)//1 2 4
// }
// console.timeEnd('test')
// console.time() 计时器需要一个标识 console.log('test')

// Math.sqrt() 开平方根

// var a=Math.sqrt(36);
// console.log(a);

// 课堂练习
// firstfun([1,2,3],[5,6,7],[8,9,10])=>[1,2,3,4,5,6,7,8,9,10]

// function firstfun(...args) {
//     let result=[];
//     for(i=0;i<(args.length);i++){
//         result=result.concat(arguments[i])
//     }console.log(result)
// return result
// };

// firstfun([1,2,3],[5,6,7],[8,9,10])
// function esSixFunc(...args) {
//     return [].concat(...args)
// }

// //creat a function that takes two arguments(number.length)
// //sendFunc(7,5)=>(7,14,21,28,35)
// function secondFunc(number,length){
//     let result=[];
//     for (i=1;i<=length;i++){
//         result.push(number*i);
//     }
//     console.log(result)
//     return result;
    
// };
// secondFunc(7,5)

// change array order  123-321
// function seFu(arr,str){
//     switch(str){
//         case 'Assending':
//             return arr.sort((a,b)=>a-b);
//             break;
//             case 'Desending':
//                 return arr.sort((a,b)=>b-a);
//                 break;
//                 default:return arr

//     }
// }
// seFu([4,3,2,1],'Assending')
// console.log(seFu(arr,str))

// es6
// const esFunc=(arr,str)=>
// str==='Assending'?arr.sort((a,b)=>a-b): 
// str==='Desending'?arr.sort((a,b)=>b-a):arr

//  return ture if all par are true
// const trueOrFalse = (...args) => args.every(Boolean);

// an array containning a number of sub arrays 

// function subArrays(a,b,c){
   
//     return Array(a).fill(Array(b).fill(c))
// }


// console.log(subArrays(5,5,10))

// check subArrays

function checkArray(a,b){
 
       for(i=0;i<=a.length;i++){
           
           if(a[i]===b[i]){
               return true
           } else{
               return false
           }
       }
   
    }


console.log(checkArray([1,2,3],[1,2,3,4,5,6,7]))
console.log(checkArray([1,2,3],[1,1,3,4,5,6,7]))
console.log(checkArray([1,2,3],[2,3,4,5,6,7]))