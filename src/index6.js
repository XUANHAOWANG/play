let array = [1,2,3,4,5];
console.log(array.length);
// console.log

//create a constructure 
function Dog(name,breed,color){
    this.name = name
    this.breed =breed
    this.color = color
    this.bark = function(){
        return 'woof!'
    }
}
//sign a value to constructure
const dog1 =new Dog('daisy','labrador','black')
console.log(dog1)
const dog2 =new Dog('jack','jack Russell','white')
console.log(dog2)


const info={
    firstName:'Howard',
    lastName:'wang',
    dateOfBirth: '3/8/1995',
    friend:['1','haha']
}
console.log(info.friend[0])


const propName='firstName'
const objOne={
    [propName.toUpperCase()]:'Alex'//给proname 赋值‘Alex’
}
console.log(objOne)

const firstName='firstName'
const objTwo={
    firstName:'Howard',
    lastName:'Wang',
printFullName(){
    return`${this.firstName}${this.lastName}`
}
}
console.log(objTwo.printFullName()) //howard wang
console.log(objTwo.firstName)//howard
console.log(objTwo.hasOwnProperty('lastName'))//true
console.log(objTwo.hasOwnProperty('address'))//false
const a=objTwo.shift('firstName')




