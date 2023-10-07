const userEmail = []
if(userEmail.length === 0){
    console.log("email");
}
else{
    console.log("not email");
}

1. // falsy values
// {false,0,-0,BigInt 0n,null,undefined,NaN}

2. //truthy values
//{true,1,"0""false", " ", [], {}, function(){}}

3.//false == 0 =>true

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("empty object");
}


4.//  Nullish Coalescing operator(??):null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
val1 = undefined ?? 10 ?? 20
console.log(val1);

5.//ternary operatoer

// condition ? true: false
const a = 100
a >= 80? console.log("true") : console.log("false");