
function click(id,fun){
var btn=document.getElementById(id);
btn.onclick=fun;
}
//点击按钮 修改 box1的大小
//获取box1
var box1=document.getElementById("box1");
//修改box1高度
//修改 css样式语法  元素.style.样式名=杨样式值

//css style 中含有-号的全部换为驼峰样式
//通过style设置的 具有高优先级 除非使用 ！important JS将无法覆盖该样式
 click('btn1',function(){
    box1.style.width="300px";
    box1.style.height="300px";
    box1.style.backgroundColor="green";
    
})

//点击按钮2 读取元素样式
//通过style属性读取的样式都是内联样式
click('btn2',function(){
    alert(box1.style.backgroundColor)
})





//定义一个函数，用来获取指定元素的当前的样式
//两个参数 第一个为样式的元素   第二个为样式名
function getStyle(el,name){
   //正常方式
//  if(window.getComputedStyle){//尝试兼容两种浏览器
//   //ie 方式 getCurrentStyle()
//   return alert( getComputedStyle(el,null)[name])
//  }else{
//      return el.getCurrentStyle[name]
// }//三元运算
return window.getComputedStyle
?getComputedStyle(el,null)[name]
:el.getCurrentStyle[name];
}
;
getStyle(box1,'backgroundColor')
//获取元素当前显示的样式
//语法 getComputedStyle().style 这是window的方法 可以直接使用
//一般传递两个参数 第一个为要获取样式的元素  第二个为伪元素
//如果获取的样式没有设置 则会得到真实的值 而不是默认值 例如 没有设置width 会获得一个实时长度
click('btn3',function() {
    alert(getComputedStyle(box1)['width'])
})


let box2=document.getElementById('box2');

//clientWidth
//clientHeight 
//可见客户端 这两个属性可以活获得可见高度和宽度
//这些都是直接计算的的 返回一个数字
//包括内容区和内边距  这些属性是只读 不能修改
let box4=document.getElementById('box4')
click('btn4',function() {
alert(box4.clientHeight)
})

//offsetHeight offsetWidth   读取整个大小 包括边框

//offsetParent 用来定位当前元素的父元素
//它会找到离当前最近的开启定位的祖先元素
//如果所有的祖先元素都没有定位则返回body
//  var op=box2.offsetParent;
//  alert(op)

 //offsetLeft 当前元素相对于定位元素的水平偏移量
//offsetTop 当前元素相对于其定位元素的垂直偏移量
// let op=box2.offsetLeft;
// alert(op)

//scrollHeight  scrollWidth 获取元素滚动区域的高端和宽度
var sc=box4.scrollHeight;


//scrollTop scrollLeft  滚动条移动的距离

click('btn5',function(){
    alert(box4.scrollTop)
})

click('btn6',function(){
//当 scrollHeight - scrollTop ==clientHeight  说明滚动条到底了
if(box4.scrollHeight-box4.scrollTop==box4.clientHeight) {
    alert('到底了')
}else{
alert('还没到底')
}
})
