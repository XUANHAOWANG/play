let all=document.getElementsByTagName("a");
//删除超链接
function del(){
    let li=this.parentNode
    if(confirm("Are you sure you want to delet")){
        li.parentNode.removeChild(li)}}


for(var i=0; i<all.length; i++){
    all[i].onclick=del;}
    
//获取button
let btn=document.getElementById("btn");
//获取url
let u1=document.getElementById("u1")
btn.onclick=function(){
let li=document.createElement("li");
 li.innerHTML='<a href="javascript:;" class="link">超链接</a> <br>'
u1.appendChild(li)

let newA=li.getElementsByTagName("a")
for(let i=0;i<newA.length; i++){
    newA[i].onclick=del;}}

//u1是li的祖先元素，不管点哪一个都会触发u1
//事件的委派就是把事件委派给共同的祖先元素  这样当后代事件触发时事件会冒泡到祖先元素
//通过委派可以减少事件绑定的次数 
    u1.onclick=function(event){

        if(event.target.className=='link'){
alert('shide')
        }
    }


//事件的帮绑定
//只能为一个元素绑定一个响应函数 不能绑定多个 否则后面的会覆盖前面的函数
//不过我们可以通过 addEventListener() 来触发多个函数
let btn1=document.getElementById("btn1");


//addEventListener() 有俩个参数   
//1  事件的字符串 
//2  回调函数
//3  是否在捕获阶段触发，需要布尔值 一般传false
//通过这种方法可以使函数同时按照顺序执行
// btn1.addEventListener("click", function(){
//     alert('a')
// },false);
// btn1.addEventListener("click", function(){
//     alert('b')
// },false);
//IE8的话不兼容addEventListener（） 需要使用 attachEvent()
//参数 1 事件字符 需要带上on
//2 回调函数 

//兼容写法
//使用构造函数
//obj 绑定的元素  evenstr事件方式  callBack回调函数
function bind(obj,eventstr,callBack){
    //普通浏览器
    if(obj.addEventListener){//判断浏览器是否有addEventListener()
obj.addEventListener(eventstr,callBack,false);}
//IE8及以下
else{
obj.attachEvent('on'+eventstr,callBack);
}}
bind(btn1,'click',function(){
    alert('1');
    
});

//事件的传播
//先捕获后冒泡
// 1.捕获时 由外层向内捕获  例如图中捕获顺序为 3.2.1
//2. 目标阶段 捕获结束时 开始触发事件
//3. 事件从目标元素向他的祖先元素传递，一次触发祖先上的事件
let box1 = document.getElementById('box1');
let box2= document.getElementById('box2');
let box3 = document.getElementById('box3');
bind(box1,'click',function(){alert('box1')});
bind(box2,'click',function(){alert('box2')});
bind(box3,'click',function(){alert('box3')});