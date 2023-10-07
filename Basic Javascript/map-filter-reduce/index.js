const Mynums  = [1,2,3,4,5,6,7,8]

// const newNums = Mynums.filter((items)=>{
//    return items > 4
// })
// console.log(newNums);

// const newNums = []
// Mynums.forEach((num)=>{
//     if(num>4){
//         console.log("greater than 4");
//     }
// })

// const books = [

// {
//     title:"book1",
//     edition:2002
// },
// {
//     title:"book2",
//     edition:2003
// },
// {
//     title:"book3",
//     edition:2004
// },
// ]

// // const userbook = books.filter((bk)=>bk.title ==="book3")
// const userbook = books.filter((bk)=> {
//     return bk.edition>=2002 && bk.title==="book1"
// })
// console.log(userbook);

// const myNumbers = [1,2,3,4,5,6,7,8,9]
// // const num = myNumbers.map((num)=> num + 10)
// const num = myNumbers.map((num) => {
//     return num * 10
// })
// .map((num)=> num + 10)
// .filter((num)=>num <=50)
// console.log(num);


3.//Reduce method

const array = [1,2,3];
const total = array.reduce((acc,currval)=>{
    console.log(`acc: ${acc} and curr value ${currval}`);
    return acc + currval
},3)
console.log(total);

// acc: 3 and curr value 1     = 3 + 1 = 4
// acc: 4 and curr value 2    = 4 + 2  =6
// acc: 6 and curr value 3       = 6 + 3 = 9
// acc: 9 and curr value 4      = 9 + 4 = 13

const shoppingCart =[
   { 
     itemName: "js cource",
    price:2999
   },
   { 
     itemName: "python cource",
    price:3999
   },

]

const add = shoppingCart.reduce((acc,item)=>
    acc +  item.price,0)
console.log(add);





