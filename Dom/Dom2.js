//DOM 查询   节点获取包括空白
//childNode 属性 表示当前节点的所有子节点
//firstChild 第一个子节点（node）
//lastChild 最后一个子节点


var btn=document.getElementById('btn');
btn.onclick=function(){
//获取id
var city=document.getElementById('city');

//查找#city下所有li节点
var lis=city.getElementsByTagName("li");
for(var i=0;i<lis.length;i++){
    alert(lis[i].innerHTML);
}
};

var btn1=document.getElementById('btn1');
btn1.onclick=function(){
    //获取ID为 city的节点
   

    //获取子节点
// var chi=city.childNodes; //这一方法会获取所有元素节点 包括换行
var chi=city.children;//这一方法可以获得目标元素下的子元素  不包括空白等  更实用
    alert(chi.length);

}


var game=document.getElementById('game');
var btn2=document.getElementById('btn2');
btn2.onclick=function () {
    // var ch=game.firstChild;//获取当前元素第一个节点
    var ch=game.firstElementChild; //获取当前第一个元素   不兼容ie8 即以下
    alert(ch.innerHTML);
};

var btn3=document.getElementById('btn3');
btn3.onclick=function () {
    var last=game.lastElementChild;
    alert(last.innerHTML)
}




//父节点 和兄弟节点   parentNode  previousSibling nextSibling

//为避免重复性操作和代码   定义一个函数 专门为指定元素绑定单击响应函数
function click(idstr,fun){//idstr 要绑定的单击响应函数的属性值  fun函数参数  事件的回调函数单击时触发
    var btn=document.getElementById(idstr);//传入绑定的按钮id
btn.onclick=fun;

}
click('btn4',function(){
//通过这一回调函数返回北京的父节点
//find 北京
var bj=document.getElementById('bj');
//返回北京的父节点
var fa=bj.parentNode;
// alert(fa.innerHTML);
alert(fa.innerText);//它和inneHTML 类似 不过会将 标签去除

})
//返回西瓜的上一个兄弟节点
click('btn5',function(){
var wm=document.getElementById('wm');
var ps=wm.previousElementSibling;
alert(ps.innerHTML)
});
click('btn6',function(){
    var u=document.getElementById('user');
//读取user的属性值 文本框的value的属性值就是文本框的填写内容
alert(u.value)
});

//设置user value
click('btn7',function(){
    var u=document.getElementById('user')
    u.value='我是你爸爸';
});

//通过子节点获取北京文本 比较较麻烦的一种方式
click('btn8',function(){
var bj=document.getElementById('bj')//这里可以直接使用 bj.innerHTML 来获取文本 
var fc=bj.firstChild;
alert(fc.nodeValue)
})