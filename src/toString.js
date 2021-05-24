function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Person.prototype.toString=function(){
    console.log('haha')
        
    
}
//person实例
var per=new Person('howawrd',18,'male');
console.log(per);
console.log(per);
console.log(per.__proto__.__proto__.hasOwnProperty('toString'))