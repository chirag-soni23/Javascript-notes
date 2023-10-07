const name = "Chirag"
const Count = 60
console.log(name + Count + "Value");

1. // template literals

console.log(`Hello my name is ${name} `);

const gameName = new String('Hill')
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
// charAt kis index par h character
console.log(gameName.charAt(2));
// indexOf kis position par ata h 
console.log(gameName.indexOf("i"));
// last vali value include nhi hui subString me
const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(1,2)
console.log(anotherString);

const string = "     Chirag"
console.log(string.trim())
console.log(string)

const url = "https://www.google.com"
console.log(url.replace("google","youtube"));

console.log(url.includes("youtube"));

const a = "Chirag Soni"
console.log(a.split("-",3));