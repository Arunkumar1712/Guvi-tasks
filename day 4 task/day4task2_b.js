// program to change the string to UpperCase Using arrow function
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var a= userInput[0];               // Taking Input from the user as string in array format
    var upper = (a)=>{           // declaring the variable upper to store the anonymous function
    console.log(a.toUpperCase());      // It log the output in console by converting the string to uppercase by using In built function "toUpperCase"
    }
    upper(a);
});