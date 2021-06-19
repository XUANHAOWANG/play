//当鼠标在divA区域移动时 divM显示鼠标坐标
let area=document.getElementById('areaD');
let me=document.getElementById('showM');
//事件对象  当事件的响应函数被触发时 浏览器每次都会将一个对象作为实参 传递进响应函数
//在事件对象中封装了当前事件相关的一切信息，比如鼠标的移动 鼠标的坐标 某个键的按下等等
//onmousemove 该事件在鼠标移动时触发
//兼容多个浏览器的写法
area.onmousemove = function(event) {
 event=event||window.event;
    let x = event.clientX;
    let y = event.clientY;
   showM.innerHTML =('x'+'='+x+','+'y'+'='+y);}
//IE8中 响应函数触发时 浏览器不会传递事件对象
//在ie8及以下的浏览器中，是将事件对象作为window对象的属性

//div跟随鼠标移动
//必须先开启 定位
let box1=document.getElementById('box1')
let body=document.getElementsByTagName('body')[0]
body.onmousemove =function(move) {
  move =move||window.move;//如果不兼容第一种 则跳转到第二种  将参数写进window的属性里
   let left = move.pageX;//用来定义Y轴    pageX/Y 可以获取当前整个网页页面坐标 
   let top = move.pageY;//定义X轴
  box1.style.left=left+'px';
  box1.style.top=top+'px';}
