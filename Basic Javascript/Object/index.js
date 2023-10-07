1.//singleton
2.//Object literals
const mySymbol = Symbol("key1")
const Jsuser = {
    name:"Chirag",
    "fullname":"Chirag soni",
    age:19,
    [mySymbol]:'key',
    location:"Rajasthan",
    email:"csoni0693#gmail.com",
    hobbies:["Cricket","Coding"]
}
// console.log(Jsuser.name);
console.log(Jsuser["name"]);
console.log(Jsuser["fullname"]);
console.log(Jsuser[mySymbol]);

// change
Jsuser.email = "chiragsoni@chatgpt.com"
console.log(Jsuser["email"]);
// Object.freeze(Jsuser.email)
Jsuser.email = "chiragsoni@cwdwe.com"
console.log(Jsuser.email);

Jsuser.greeting = function(){
    console.log(`Hello jsuser ${this["fullname"]}`);
}
console.log(Jsuser.greeting());




