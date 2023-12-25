// Program for Sum of all numbers in an array using Arrow fuction
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
    var a=userInput[0];                    // Taking Input from the user as string in array format
    var b=a.split(" ");                    // Splitting the input according to the space and stores as example [1,2,3,4,5]...
    var add=(b)=>{                         // Declaring the variable add to store the anonymous function
    var sum=0;                             // declaring the variable to store the sum of array value
    for(var i=0;i<b.length;i++){           // this for loop iterate through array
        sum+=parseInt(b[i]);               // adding the each element in the array to the sum variable
    }
    console.log(sum);                      // Logging the value of sum in console
    }
    add(b);                                // calling the function
});