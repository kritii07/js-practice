const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountstate;  //value is undefined

/*
prefer not to use var
becoz of issue in block scope and functional scope
*/

//accountId = 2 not allowed
accountEmail = "pqr@gmail.com"
accountPassword = "234432"
accountCity = "haryana"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
