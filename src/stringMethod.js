//字符串以字符数组保存
//字符串以字符数组的形式保存
//【'h','e','l'】  空格也算
//字符串大部分方法不会对原数据产生影响

let str='hellow ha';
console.log(str.length);
console.log(str[2]);
console.log(str[1]);
console.log(str[0]);
//charAT（）可以返回字符串中指定位置的字符

result=str.charAt(0);//根据索引获取指定字符  =[index]
console.log(str);
console.log(result);

//charCodeAt()
//显示 指定字符unicode的编码
console.log(str.charCodeAt(0));
 
//formCharCodeAt() 根据unicode编码得到字符

console.log(String.fromCharCode(0x2682));//注意转换进制 16进制：0x

//indexOf() 检查字符串中是否含有 指定字符 第二个参数为从第几个起开始查找
console.log(str.indexOf('h',0))


function index(ind){
    if(str.indexOf(ind)===-1){
        console.log('no')
    }else{
        console.log('yes I have ')
    }
};
index('w');

//lastindexOf() 与indexOf()一样 不同德是 从后往前找 
console.log(str.lastIndexOf('h',str.length));


//和数组方法类似 slice()
//如果省略第二个，则会截取后面所有的字符
result= str.slice(1,4);
console.log(result)

//substring 和slice 类似  这个方法不接受负数 如果输入负数 会默认为0 并自动调整
result= str.substring(1,4);
console.log(result)

//split（）可以将字符串 拆分为一个数组 需要根据一个字符串为参数 并根据一个字符去拆
str='a s f a f g h a g d a d';
strArr=str.split(' ');
console.log(strArr);
console.log(strArr.length);

//toUpperCase() 将字符串转为大写
da=str.toUpperCase();
console.log(da);

//toLowerCase() 将字符串转为大写

xiao=da.toLowerCase();
console.log(xiao);