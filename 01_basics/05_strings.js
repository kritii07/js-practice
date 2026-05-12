const name = "kriti"
const repoCount = 50

//concatinate two strings using '+'
//console.log(name + repoCount + "value");

//using back ticks methods
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('pokemon-02')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-6,4)   //give the substring form back 
console.log(anotherString);


const newstr = "  hello   "
console.log(newstr);
console.log(newstr.trim());

const url = "https://google.com/flower%20image"

console.log(url.replace('%20', '-'))

console.log(url.includes('photo'));

console.log(gameName.split('-'));
