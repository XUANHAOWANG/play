let input=document.getElementsByTagName('input')[0]


//键盘事件  onkeydown onkeyup
//键盘事件 一般绑定给一些可以获取焦点的对象 或是document
//对于 onkeydown 如果一直按着 事件会一直触发 
//当 onkeydown连续触发 第一次和第二次之间会间隔稍微长一点，其他的会非常快
//这种设置时方式误操作


//获取按下的键位字符 使用 事件.key
// document.onkeydown=function(e) {
//     e=e||window.e;
//    input.placeholder=e.key
    
// }


// document.onkeyup=function(e) {
//     console.log(e.key)
// }

// input.onkeydown=function(e) {
//     e=e||window.e;
//     let numR=/^[0-9]/;
//     if(numR.test(e.key)){
//         return false
//     }
//     console.log(e.key)
// }



//使div根据方向键wasd移动

let box1=document.getElementById('box1');
//设定按键事件
document.onkeydown=function(e) {
    e=e||window.e;
    let speed=10
   if(e.ctrlKey){
    speed=60;
} 

 switch(e.keyCode){
     case 38://使用代码 向上键
         box1.style.top=box1.offsetTop-speed+'px';
         break;
         case 37://向左
            box1.style.left=box1.offsetLeft-speed+'px';;
             break;
             case 40://向下
                box1.style.top=box1.offsetTop+speed+'px';
                 break;
                 case 39://向右
                    box1.style.left=box1.offsetLeft+speed+'px';
                     break

 }  

 input.value=box1.offsetLeft+','+box1.offsetTop
}