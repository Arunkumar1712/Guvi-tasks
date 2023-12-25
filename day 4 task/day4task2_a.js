// Arrow function  for printing the odd number in array
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
  //var b=[1,2,3,4,5]
  var odd= (a)=>{                 // calling arrow function
      
   for(var i=0;i<b.length;i++){   // this for loop iterate through array
     if(b[i]%2===1){              // this if condition checks that odd number or not
       console.log(b[i]);         // this line prints the odd number
    }
     }
}
odd(b);                           // calling the function
});