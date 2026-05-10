// primitive

// 7 types :  String, Number, Boolean, null, undefined, Symbol, BigInt


// javascript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //=> false


// Reference (Non primitive)

//Array, Objects, Functions

let myObj = {
    name: "kriti",
    age: 22,
}

const colors = ["red", "green", "blue"];

const myFunction = function(){
    console.log("hello world");
}

// *******************************************************************************


// stack (primitve), heap(non-primitive)

let name1 = "raj"

let name2 = name1
name2 = "kiran"

console.log(name1); // raj
console.log(name2); // kiran

// name2 can not change name one becoz name 2 does not have the original copy of name1, it has a duplicate copy , so that is why it can not change name1


//STACK me copy milta hai or HEAP me reference milta hai(i.e. changes original value ke andr hi hote hai)


//non primitive datatypes use HEAP
 let userOne = {
    email: "abc@gmail.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "pqr@gmail.com"

 console.log(userOne.email); //pqr@gmail.com
 console.log(userTwo.email); //pqr@gmail.com

 // here userTwo has changed the value of userOne becos it has the reference to the original copy, so the changes will refelect in the original copy as it uses HEAP
 

