// const user = new Object() // singelton object
const user = {}   //non singleton objetct

user.id = "7039"
user.name = "Simmmy"
user.isLoggedIn = false
console.log(user);

const regularUser = {
    email:"Some@gmail.com",
    fullname:{
        userFullname: {
            firstname:"Chirag",
            lastname:"Soni"

        }
    }
}
console.log(regularUser?.fullname?.userFullname?.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {3:"e",4:"f"}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

const buddy =[
    {
        id:1,
        name:"Chirag"
    },
    {
        id:2,
        name:"kartik"
    }
]
console.log(Object.keys(buddy));
console.log(Object.values(buddy));
console.log(Object.entries(buddy));
console.log(user.hasOwnProperty("name"));