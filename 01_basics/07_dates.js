//Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)  //object


let myCreatedDate = new Date(2026, 0 , 12)  //months zero se strat hote hai js me
//console.log(myCreatedDate.toDateString());

//let newDate = new Date(2025, 1, 15, 5, 3)
//console.log(newDate.toLocaleString()); //includes time also


let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(Math.floor(Date.now()/1000));  converted in seconds by dividing by 1000


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  //becos in js months starts from 0
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
    //ctrl+space gives you different suggestions 
})