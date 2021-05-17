
// //calculator
// function calFun(nu1,operator,nu2){

    
//     nu1=+prompt('number'),
//     nu2=+prompt('number'),
//     operator=prompt('operator')
// operation={
//     '+':(a,b)=>a+b,
// '-':(a,b)=>a-b,
// '*':(a,b)=>a*b,
// '/':(a,b)=>a/b}
// return operation[operator](nu1,nu2)
// }
// alert(calFun())


//return sum in array 

// function sunFun(arr){
//     return arr.flat(infinity)
// }
// console.log()


//flaten([17,2,3,'sdv503',13])->[17,2,5,'sdv503']
// const flatten=(arr)=>{
//     const result=[];

//     Array.forEach(element=>
//         {array.isArray
//             (element?
//                 result.push(...flatten(element)):result.push(element))})
// }



//get depth
// var obj= [1,[2,[3,4]]]
// const getDepth=obj=>{
//     let level=1

//     Object.keys(obj).forEaach(key=>{
//         if(typeof obj[key]==='object'){
//             const depth=getDepth(obj[key])+1

//             level=Math.max(depth,level)
//         }
//     })
   
//     return level
// }


// function creatDepth(arr){
//     if(arr.length===1)return arr
//     return(arr[0],creatDepth(arr.slice[1]))
// }
// const depth=arr=>arr.length===1?arr:(arr[0],creatDepth(arr,slice[1]))


function flatArr(){
    let result=[];
    if(arr ===undefined)return arr
}
arr.forEach(function(e) {
    if Array.isArray(e){
        result=result.concat(flatArr(e))
    }else{
if(typeof e==='function'){
    result.push(e[])
}
    }
})