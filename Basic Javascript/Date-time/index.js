// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());

// Date is a object

let createdDate = new Date("01-23-2004")
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleDateString());
let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(createdDate.getTime());
// console.log(createdDate.getHours());
console.log(Math.floor(Date.now()/1000));

let newDate  = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"short",
})