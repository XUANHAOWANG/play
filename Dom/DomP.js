var btn=document.getElementById('btn');
btn.onclick=function () {
var bj=document.getElementById('bj')
alert(bj.innerHTML)
}
//innerHTML 可以获得元素内部内容


var btn2=document.getElementById('btn2');
btn2.onclick=function () {
    var list=document.getElementsByTagName('li');
    
        for(var i=0;i<list.length;i++){
        alert(list[i].innerHTML);
        }
}

var btn3=document.getElementById('btn3');
btn3.onclick=function () {
    var input=document.getElementsByName('gender');
    //需要读取的属性名   元素。id  元素.name  元素.value
    // 读取class名时 必须使用  元素。className
    for( var i = 0; i <input.length; i++){
        alert(input[i].value);};
}




var text=document.getElementById('text')

var pre=document.getElementById('pre');
var next=document.getElementById('next');
var img=document.getElementsByTagName('img')[0];//获取图片元素
pre.onclick=function () {
    
    i--;
    
    if(i<0){
        i=imgArr.length-1
    }
    text.innerHTML='总共'+imgArr.length+'张图，当前第'+(i+1)+'张';
    img.src=imgArr[i];
   
};


//切换图片就是修改img的src属性
//要修改一个元素的属性    元素.属性=属性值

var imgArr=['picture/1.jpg.jpg',"picture/2.jpg.jpg",'picture/3.jpg.jpg','picture/4.jpg.jpg','picture/5.jpg.jpg',];

let i=0;
next.onclick=function () {
  i++;  
  
    if(i>imgArr.length-1){
        i=0
  
    }
    text.innerHTML='总共'+imgArr.length+'张图，当前第'+(i+1)+'张'
    img.src=imgArr[i];
  
}


//window.setInterval(这里为function，这里为间隔执行时间)
window.setInterval(next.onclick,1500);//通过计时器 设置轮播  



