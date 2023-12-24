// Anonymous function  for printing the odd number in array
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
  var a= userInput[0].split(" ")  // Taking Input from the user
  var b=a.split(" ")              // spliting the taken string as array
  var odd=function (a){           // calling anonymous function
      
   for(var i=0;i<b.length;i++){   // this for loop iterate through array
     if(b[i]%2===1){              // this if condition checks that odd number or not
       console.log(b[i]);         // this line prints the odd number
    }
     }
}
odd(b);                           // calling the function


// IIFE function  for printing the odd number in array

var a=userInput[0].split(" ")        // Taking Input from the user and spliting the taken string as array
  var b=a;
  (function (){                      // this function will execute without calling it
  
   for(var i=0;i<b.length;i++){      // this for loop iterate through array
     if(b[i]%2===1){                 // this if condition checks that odd number or not
       console.log(b[i])             // this line prints the odd number
    }
     }
})()
});