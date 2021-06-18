

let read=document.getElementById('read');
let reg= document.getElementById('reg')
let infor= document.getElementById('infor')

//当垂直滚动条滚动到底时 checkbox等于可点击状态
//onscroll 当滚动条滚动到底时触发
var dis=infor.scrollHeight-infor.scrollTop
infor.onscroll=function(){
    //判断滚动条是否到底
    if(infor.scrollHeight-infor.scrollTop<=infor.clientHeight){
      //滚动到底 使表单可用
      read.checked=true;
      reg.disabled=false;
    }
}


let scr= document.getElementById('scr')
scr.onclick=function(){
    alert(parseInt(infor.scrollHeight-infor.scrollTop))
}