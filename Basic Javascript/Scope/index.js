
let d = 300
const e = 400
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a);
}
// console.log(b);
console.log(c);
console.log(d);
console.log(e);

function one() {
    const username = "Chirag"
    console.log(username);
    function two() {
        const website = "You tube"
        console.log(website);
        
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "Kartik"
    if(username=== "Kartik"){
        const website = "Goggle"
        console.log(website);
        console.log(username);
    }
}

// *************Interesting*****************

function addone(num){
    return num +1
}
console.log(addone(5));

const addTwo = function(num){
    return num + 1
}
console.log(addTwo(6));