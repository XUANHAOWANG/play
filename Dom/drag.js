//当鼠标按下时 被拖拽物开始拖拽   onmousedown
//鼠标移动时 被拖拽五跟着移动     onmousemove
//鼠标松开时 被拖拽元素固定在当前位置   onmouseup
//这三个事件组成这一功能

//获取box1
let box1=document.getElementById('box1');
//为box1绑定鼠标按下事件
box1.onmousedown=function(event) {
//获取div的偏移量
//鼠标位置.clientX-offsetLeft
//鼠标位置.clientY-offsetTop
event=event||window.event;
let ol=event.clientX-box1.offsetLeft;
let ot=event.clientY-box1.offsetTop;

//这里需要为document绑定 onmousemove 事件
document.onmousemove =function(position){
position =position||window.position;
let left=position.pageX-ol;
let top=position.pageY-ot;
box1.style.left=left+'px';
box1.style.top=top+'px';
//当鼠标松开时 box1 位置固定
document.onmouseup=function(){
    document.onmousemove =null;//将定位事件设置为空 使拖拽固定
    //当以上结束时 onmouseup还在保持运行 需要结束onmouseup
    if(document.onmousemove==null){
        document.onmouseup=null;
    }

}
}

}



