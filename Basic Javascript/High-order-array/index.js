// const arr = [1,2,3,4]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting = 'hello world'

// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
    
// }

2.//maps

// const map = new Map()
// map.set("IN","India")
// map.set("USA","Unites states of america")
// map.set("IN","India")
// // console.log(map);


// for (const [key,value] of map) {
//     console.log(key,"=",value);
    
// }

// const myObject = {
//     "game" : "Pubg",
//     "game2":"Temple run",
// }
// for (const [keys,value] of myObject)
// console.log(keys);    
// }
3.//for in
// const myObject = {
//     js:'Javascript',
//     cpp:'c++',
//     rp:"ruby",
// }
// for (const key in myObject) {
//     console.log(`${key} file name id = ${myObject[key]}`);
// }

// const programming = ["js","rb","py","java"]

// for (const key in programming) {
//     console.log(key + " = " + programming[key]);

// }


4.//for each loop

// 
const coding = ['js','css','html','react','node.js']
coding.forEach((items,index,array)=>{
    console.log(items);
    // console.log(index);
    // console.log(array);
})


const myCoding = [
    {
        language:"javascript",
        filename:"js"
    },
    {
        language:"python",
        filename:"py"
    },
    {
        language:"Java",
        filename:"jav"
    },
]
myCoding.forEach((item)=>{
    console.log(item.language);
})