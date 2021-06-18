//当鼠标在divA区域移动时 divM显示鼠标坐标
let area=document.getElementById('areaD');
let me=document.getElementById('showM');


//事件对象  当事件的响应函数被触发时 浏览器每次都会将一个对象作为实参 传递进响应函数
//在事件对象中封装了当前事件相关的一切信息，比如鼠标的移动 鼠标的坐标 某个键的按下等等


//onmousemove 该事件在鼠标移动时触发
area.onmousemove = function(event) {
 event=event||window.event;
    let x = event.clientX;
    let y = event.clientY;
   showM.innerHTML =('x'+'='+x+','+'y'+'='+y);
}
//IE8中 响应函数触发时 浏览器不会传递事件对象
//在ie8及以下的浏览器中，是将事件对象作为window对象的属性
