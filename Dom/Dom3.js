




//get items 元素
var items=document.getElementsByName('items')
var likeall=document.getElementById('likeall')


//全选
var checkedAll=document.getElementById('checkedAll')
checkedAll.onclick=function(){
    for(var i=0;i<items.length;i++){
        items[i].checked=true
        
    }likeall.checked=true
}

//全不选

var checkedNo=document.getElementById('checkedNo');
checkedNo.onclick=function(){
    for(var i=0;i<items.length; i++){
        items[i].checked=false
    }likeall.checked=false;
}

//反选
 var checkedRev=document.getElementById('checkedRev');
 checkedRev.onclick=function(){
     likeall.checked=true;
     for(var i=0;i<items.length; i++){
         items[i].checked=!items[i].checked
         if(!items[i].checked){ 
            likeall.checked=false;
            
        }
     }
 }

 //全选和全不选
 
likeall.onclick=function(){
    for(var i=0;i<items.length; i++){
       items[i].checked=likeall.checked
    }
 }

  //如果有任意checkbox 没有选取 全选功能的checkbox将会取消选中
//反之 如果所有checkbox都被选中 全选checkbox也会被选中

for (var i=0; i<items.length; i++){
    
 items[i].onclick=function(){
    likeall.checked=true
  for(var j=0;j<items.length; j++){
        if(!items[j].checked){ 
            likeall.checked=false;
            break;
        }
    }
}}


//提交

var submit=document.getElementById('submit')
submit.onclick=function(){
    var print=[]
    for (var i=0; i<items.length; i++){
        if(items[i].checked){
            print.push(items[i].value)
        }
    }alert(print)
}

//获取body标签 节点
// var body=document.getElementsByTagName('body');
// alert(body[0])
//在document中有一个属性就叫body 它保存的是body的引用
// var body=document.body;
// alert(body)

// var de=document.documentElement// 根标签 HTML

// var all=document.all; //这里代表 所有元素 也可以使用 all=document.getElementsByTagName("*")
// for (var i=0; i<all.length; i++){
//     alert(all[i])//页面中的所有节点
// }
//获取节点的方法也可以是 document.getElementByClassName("")

//document.querySelector()   需要一个选择器的字符串作为参数，可以根据一个css选择器来查询一个元素节点对象
//只查一个元素 
var div1=document.querySelector(".div1 div");

//document.querySelectorAll() 无论查询到多少个node都是以数组返回的 
var divAll=document.querySelectorAll(".div1");
alert(divAll);