const score = 400
//console.log(score);  //=> 400

const balance = new Number(100)
//console.log(balance);  //=> [Number: 100]
//console.log(balance.toString());  //=> 100
//console.log(balance.toString().length);  //=> 3
//console.log(balance.toFixed(2));  //100.00

const otherNumber = 23.898
//console.log(otherNumber.toPrecision(3));  //=>23.9


const hundreds = 10000000
//console.log(hundreds.toLocaleString());  //=>
//console.log(hundreds.toLocaleString());  //=>10,000,000

//console.log(hundreds.toLocaleString('en-IN'));  //=> 1,00,00,000  put commas according to indian standards



//++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));  //negative to positive

console.log(Math.round(4.6))  //round off value

console.log(Math.ceil(4.2));  //5

console.log(Math.floor(4.8))  //4

console.log(Math.min(3,2,5,4,65,64)); //gives minimum value
console.log(Math.max(3,2,5,4,65,64)); //gives max value

console.log(Math.random());  //value between 0-1

console.log(Math.floor(Math.random()*10) +1);


//NOTE:
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //IMPORTANT FORMULA