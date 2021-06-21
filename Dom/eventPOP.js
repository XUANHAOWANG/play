//事件冒泡 指的是 当后辈元素被触发时 同时祖先元素也会被触发
//在开发中 大部份 冒泡事件是有用的
//如果不需要冒泡事件 可以取消
let box1=document.getElementById("box1");
let s1=document.getElementById("s1")
box1.onclick=function(){
    alert("div")
}
s1.onclick=function(event){
    alert('SPAN');
event=event||window.event;
event.cancelBubble=true;
}
document.body.onclick=function(){
    alert('body')
}