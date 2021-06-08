//var reg=new RegExp('正则表达式','匹配模式');
//严格区分大小写
//可以传递一个匹配模式作为第二个参数
//i 忽略大小写
//g 全局大小写

// var reg=new RegExp('F','i');

// console.log(reg);

// var str='Aaafagsa';

// //test() check 一个字符串是否符合正则表达式规则 符合返回true 错误返回false

// let result=reg.test(str);
// console.log(result);






//正则语法      var 变量 = /正则表达式/匹配模式；
//    或：| 和[]    与：$$ 

//检查字符串中是否有 字符a 或 字符b.
// let reg=/[ab]/i ;
// str='asfgsbhbd';
// result=reg.test(str);
// console.log(result);
// //检查字符串中是否有字母

// //任意小写[a-z]   任意大写[A-Z]   任意字母不管大小写[A-z]
//  reg=/[a-z]/ ;//检查a至z
// str='asfasdabcgshbd';
// str=str.toUpperCase();
// result=reg.test(str);
// console.log(result);

// //检查一个字符串是否含有abc or adc or aec
// reg=/a[bcdefg]c/i;
// result=reg.test(str);
// console.log(result);

// // 除..之外：^
// reg=/[^asd]/i;
// result=reg.test(str);
// console.log(result);

// reg=/[^1-3]/;
// str=1
// result=reg.test(str);
// console.log(result);





// let  reg=/@/i;
// a='asdsdfagsh@qq.com';
// b='asfagagag@164.com';
// result1=reg.test(a);
// console.log(result1);
// result2=reg.test(b);
// console.log(result2);

//四个正则相关的方法
//search  match replace split 
 

//split 可以传递一个正则表达式作为此参数 根据正则表达式拆分字符串


 let str='1a2s5f8g6aA';

 result=str.split(/[A-z]/);
console.log(result);


//search 可以传递一个正则表达式作为此参数搜索字符串中是否含有指定内容 并显示位置

result=str.search(/s/i);
console.log(result);

//match 可以传递一个正则表达式作为此参数  从一个字符串中提取符合条件的内容
//可以设置全局匹配 这样可以匹配所有内容  match会将内容封装到数组中返回
result=str.match(/a/ig);
console.log(result);

//replace 将指定内容替换为新的内容
//两个参数    replace（被替换的内容，新的内容）
//可以将第二个参数设为空串 用来删除内容
result=str.replace(/[1-9]/ig,' @@');//这里数字将会被删除
console.log(result);

//创建一个正则表达式 检查内容是否含有aaa
//可以通过量词  参数{次数} 例如 a{3}  {m,n}m到n次  {m，}m次以上 
//量词只对前边的一个内容起作用
//n+m  检索n和至少一个m
//* 0个或多个  相当于{0，}
//？    相当于{0，1}
 var reg=/ab+a/i;
 console.log(reg.test('aaabbaa'));
 var reg=/ab?ac/i;
 console.log(reg.test('aaabacbaa'));

 //检索一个  以n开头的内容
 //使用 ^n 来检索
// a$  匹配结尾
 var reg=/^x/i;
 console.log(reg.test('xafasg'))//true
 var reg=/x$/i;
 console.log(reg.test('xafasgx'))//true
 var reg=/^a$/;
 console.log(reg.test('aaa'))
 var reg=/^a|a$/;
 console.log(reg.test('abbaa'))
 var reg=/^a.*a$/; //检索首位同时为a的内容  ^n.*m$
 console.log(reg.test('abbaaasfafaa'))



 //手机号 正则
// 第一位以1开头  ^1
// 第二位3-9任意数字  [3-9]
//第三位 任意9个数字  [0-9]{9}$
 var reg=/^1[3-9][0-9]{9}$/;
 var phoneNumber=13309026508;
 console.log(reg.test(phoneNumber));//true

 //检测字符串中是否含有 ‘.’
 // . 表示任意字符  必须使用转义符 \ 
 //同理 查找 \ 必须输入 \\
  var reg=/\./;
 console.log(reg.test('.'));



 /*
\w   表示任意字母数字 下划线[A-z0-9_]
\W 大写W 表示 除了任意字母数字 下划线[A-z0-9_]
\d 任意数字
\D 除了任意数字
\s 空格
\S 除了空格
\d 含有边界
\B 无边界

*/
 var reg=/\bchild\b/;
 console.log(reg.test('children'));

//去除多余前后空格
//去除前面对于空格 ^\s*
//去除多余后面空格 \s*$
//或者使用 .trim()方法
 str='     afsa     fafs   ';
 console.log(str.trim());//这里使用的.trim()方法
  str=str.replace(/^\s*|\s*$/g,"");
 console.log(str); 
 console.log(str.length); 




 reg=/^[1-9][3-9][0-9]{9}$/;
 console.log(reg.test(13303026508));


 /*
email Regular expression
hello.xuanhao@gmail.com.cn
任意字母数字下划线.任意字母数字下划线 @ 任意字母数字 . 任意字母  . 任意字母
\w{3,} (\. \w+)* @ [A-Z0-9]+ \w  (\.[A-z]{2,5}){1,2}
 */
//*0个以上
//+ 一个以上
var reg=/^\w{3,}(\.\w)*@[A-z0-9]+(\.[A-z]{2,5}){1,3}$/i;
var email='xuanhao1995@gmail.com';
var email1='xuanhao.wang@163.com.cn';
console.log(reg.test(email));
 
 