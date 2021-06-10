//全选功能  点击后 多选框全部选中

//创建一个函数工厂 用来套用不同的buttons按钮点击
var items=document.getElementsByName('items')
function checkfun(c,fun){
    var check=document.getElementById(c);
      check.onclick=fun;
}

//全选
checkfun('checkedAll',function(){ 
    for (var i=0; i<items.length; i++){
        items[i].checked=1;// checked 设置或返回checkbox 是否被选中
        likeall.checked=true;
    }
});

//全部不选
checkfun('checkedNo',function(){
   for (var i=0; i<items.length; i++){
       if(items[i].checked){
           items[i].checked=false;
       }
   }likeall.checked=false;
});







//提交
checkfun('submit',function(){
    var print=[];
    for (var i=0; i<items.length; i++){
if(items[i].checked){
    print.push(items[i].value); 
}   
    }alert(print)
    
})


//全喜欢

//在事件的响应函数中 响应函数是给谁绑定的 this就是谁
var likeall=document.getElementById('likeall') 
likeall.onclick=function(){
    for (var i=0; i<items.length; i++){
        items[i].checked=this.checked;
  }
  
}
    //反选
checkfun('checkedRev',function(){
    likeall.checked=true;//先设置为true 一旦后面有false在取消勾选
    for (var i=0; i<items.length; i++){
    
    //    switch(items[i].checked){
    //        case true:
    //            items[i].checked=false;break;

    //            case false:
    //                items[i].checked=true;break;
    //    }
       items[i].checked=!items[i].checked;//最简便的方法
       //再反选时需要判断四个多线框是否全都选中 
   
    //判断四个多选框是否全选 一旦有线框没有选那全选框不勾选
       if(!items[i].checked){
        likeall.checked=false;
        
    }
    }  
    
   

    
})

//如果有任意checkbox 没有选取 全选功能的checkbox将会取消选中
//反之 如果所有checkbox都被选中 全选checkbox也会被选中

for (var i=0; i<items.length; i++){
    items[i].onclick=function(){
        likeall.checked=true;//先设置为true 一旦后面有false在取消勾选
    //判断四个多选框是否全选
    for (var j=0; j<items.length; j++){
       
if(!items[j].checked){
    likeall.checked=false;
    break;
}
    }
        }
    }




