let score = "33abc"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)

//console.log(typeof valueInNumber);

//console.log(valueInNumber); //NaN becoz it is 33abc


// "33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0
//undefined => NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kriti" => true


let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber);



// ****************OPERATIONS****************

let value = 3
let negVlue = -value
//console.log(negVlue);

/*

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); //power
console.log(2/2);
console.log(2%2);

*/

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2
console.log(str3);


// messy codes (DO NOT USE THEM)
console.log("1" + 2); // => 12
console.log(1 + "2"); // => 12
console.log("1" + 2 + 2); // => 122
console.log(1 + 2 + "2"); // => 32

console.log(+true); // => 1
//console.log(true+); // => error
console.log(+""); // => 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;  //++gameCounter  => both give 101 
//read syntax of both through mdn
console.log(gameCounter);
