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

