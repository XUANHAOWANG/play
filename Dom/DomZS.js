//btn的构造函数
function click(id,fun){
var id =document.querySelector(id);
id.onclick = fun;
}
//create a node named 广州 and set under the list of city
click('#btn1',function(){
   //创建一个广州节点<li>广州</li>
   //document.createElement() 用于创建一个元素节点 需要一个标签名作为参数 并返回值
   var li=document.createElement('li');
   //document.createTextNode() 可以用来创建一个文本节点 需要文本内容作为参数 并返回
//    var text=document.createTextNode('广州');

  //将 广东节点 加入到 li元素节点里
//    li.appendChild(text);;
li.innerHTML='广州';
   //获取id为city的节点
var city=document.querySelector('#city')
   //将广州添加到city下
city.appendChild(li)
})

//简便做法 这一方法会重新加载 减慢页面速度
// click('#btn1',function(){
//     var city=document.querySelector('#city')
//     city.innerHTML+='<li>广州</li>';
// })



//广州节点 插入到北京前面
click('#btn2',function(){
    var li=document.createElement("li");
    var text=document.createTextNode("广东");
li.appendChild(text)
    var bj=document.getElementById('bj')
    //insertBefore() 只有具有父节点才能使用
    //父节点.insertBefore（要插入的节点，旧的节点）
    var city=bj.parentNode;
    city.insertBefore(li,bj)//第一个参数在第二个前面
})

//使用广东节点替换北京节点
click('#btn3',function(){
    var li=document.createElement("li");
    var text=document.createTextNode("广东");
li.appendChild(text)
var bj=document.getElementById('bj')
var city=bj.parentNode.replaceChild(li,bj);
//父节点.replaceChild(将要替换的节点,会被替换的子节点)
})
//删除 北京 节点
click('#btn4',function(){
    var bj=document.getElementById('bj')
    //使用父节点
bj.parentNode.removeChild(bj);
})

click('#btn5',function(){
    var city=document.querySelector('#city')
  alert(city.innerHTML)  
}
)
//设置bj内的Html代码
click('#btn6',function(){
    var bj=document.querySelector('#bj');
    bj.innerHTML="我是你霸";
})


//删除功能
var del=function(){
    //点击超链接 删除所在一行
    //点击哪个 超链接就是谁
    //获取当前tr
   var tr= this.parentNode.parentNode
   //删除前弹出提示框  confirm() 需要一个字符串来作为提示
  if(confirm('确认删除吗？'+tr.firstElementChild.innerHTML)) {
   tr.parentNode.removeChild(tr)}
    //点击超链后会跳转 这是默认行为 
    //此时 我们不希望默认跳转 可以通过在函数最后 return false来取消跳转
    return false
}
//创建正则表达式
var REname=/^[A-Z][A-z]{2,8}$/;
var REemail=/^\w{3,}(\.\w)*@[A-z0-9]+(\.[A-z]{2,5}){1,3}$/i;
var REsalary=/^[0-9]{1,9}/;


//获取文本添加新内容
var submit=document.getElementById('btn7')
submit.onclick=function(){
    //获取表格
var table=document.getElementById('table')
var tbody=table.getElementsByTagName('tbody')[0]
    //获取信息  
    var name=document.querySelector('#empName').value
     var email=document.querySelector('#email').value
     var salary=Math.abs(document.querySelector('#salary').value)
    //test正则表达式
if(REname.test(name)&REsalary.test(salary)&REemail.test(email)){
//创建tr和td标签
var tr=document.createElement('tr')
tr.innerHTML='<td>'+name+'</td>'+
'<td>'+email+'</td>'+
'<td>'+salary+'</td>'+
"<td><a href='javascript:;' >delete</a></td>"
tbody.appendChild(tr)
}else{
    alert('check your detail and do again')
}
var a=tr.getElementsByTagName('a')[0];
a.onclick=del;

}


//点击超链后 删除员工信息
//获取超链接
var allA=document.getElementsByTagName('a');
//为每个连接绑定点击响应

//注意 for循环在开始时就会执行
for(var i=0;i<allA.length; i++){
    allA[i].onclick=del;
}
