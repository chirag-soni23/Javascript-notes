1. // Primitive data types
// 7 types: String,Number,Boolean,nullundefined,Symbol,BigInt

2.//Refrence type (Non-Primitive data type)
//Array,Objects,Functions

const score = 100;
const scoreVlaue = 100.3
const isLoggerin = false
const outsideTemp = null
let userEmail;

// symbol
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id==anotherId);

const bigNumber = 1234353534436423134389643n;
console.log(bigNumber);

// Array
const hero = ["Superman","Spiderman","Ironman"];
console.log(typeof hero);
// Object
let myObj={
    name:"Chirag",
    age:19
}
console.log(typeof myObj);
// function
const myFunction = function(){
    console.log("Hello");

}
console.log(typeof myFunction);
3.//Stack and heap memory
// stack (Primitive) ,Heap (Non-primitive)
let myYoutubename = "Gamer0x_x0"
let anothername = myYoutubename
anothername ="Chirag"
console.log(anothername);

let user = {
    email:"csoni0692@gmail.com",
    upi: "user@ybl"
}
let user2 = user
user2.email = "csoni999@gmail.com"
console.log(user2);
console.log(user);