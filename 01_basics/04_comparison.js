// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // => false
console.log(null == 0); // => false
console.log(null >= 0); // => true
  
/*
the reason is that an equality check == and comparisons > < >= <= worl differently
comparisons convert null to a number, treating it as 0
thats why (3) null >= 0 is true and (1) null > 0 is false
*/

// strict check "==="
//not only check the values but also check their datatypes

console.log("2" == 2);  //true
console.log("2" === 2); //false
