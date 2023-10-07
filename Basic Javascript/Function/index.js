function sayName(){
    console.log("Chirag soni");
    console.log("Kartik soni");
}
// sayName();
function addTwonumber(number1,number2){  //(parameters)
//   console.log(number1 + number2)
// let result = number1  + number2
// return result;
return number1 + number2

 } 
  let result = addTwonumber(2,2);
  console.log(result);
  //(2,2) arguments


  function loginUser(username){
    if(username == undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`

  }
  let result2 = loginUser("Chirag")
  console.log(result2);
