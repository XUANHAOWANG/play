//DOM
// D： document   O： object    M： model
//D表示是整个HTML文档   
// O 对象表示将网页中的每一个部分都转为一个对象  
// M模型表示对象之间的关系，方便我们获取对象

//node 节点
/*
节点
文档节点 整个HTML文档
元素节点 HTML文档中的HTML标签
属性节点 元素的属性
文本节点 HTML标签中的文本内容
*/
// var btn=document.getElementById('btn');
//  btn.innerHTML='nibaba';//btn.innerHTML获取
// console.log(btn);

//事件  文档或浏览器窗口中发生的交互瞬间
//例如 鼠标移动到某个元素上 点击某个元素，按下某个键
//可以在事件对应的属性中 设置代码

//绑定单击事件
var btn=document.getElementById('btn');
btn.innerHTML='culculator';//btn.innerHTML获取
btn.onclick=function(a,b){
    a=prompt('number');
    b=prompt('number');

    alert('the sum is '+a*b)

}


var btn2=document.getElementById('btn2');

btn2.onclick =  function(){
alert('wo cao ')
}

window.onload=function(){
    alert('wellcome ')
}


//getElementById 通过ID属性获取一个元素节点对象
//getElementsByTagName 通过标签名获取一组元素节点对象 
//getElementsByName 通过name属性获取一组元素节点对象


