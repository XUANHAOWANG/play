function fun(){
    console.log(this.name)
};
var obj={name:'nima',
}

// fun.call();
// fun.apply();
// fun();
//以上三个都能调用函数
//call和 apply可以将一个对象指定为第一个参数
fun.call(obj)