let box1=document.getElementById("box1");

//为box1绑定一个滚轮事件
box1.onmousewheel=function(event){
    event=event||window.event;
    //event.wheeDelta 可以获得滚动方向 目前很多浏览器显示未定义
    //可以使用 .deltaY
    if(event.deltaY<0){
      //上滚变短
      box1.style.height=box1.clientHeight-10+'px'
    }else{
    //下滚变长
box1.style.height=box1.clientHeight+10+'px'
    }
    
}