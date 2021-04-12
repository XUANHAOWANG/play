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


const gnirts=(x)=>x.length<2?str.reverse(str.slice(str.length))+str[0];
console.log(gnirts('ASDFG'))
