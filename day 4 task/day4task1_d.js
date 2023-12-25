//Return all the prime numbers in an array by using anonymous function
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
var a=userInput[0];                           // Taking Input from the user as string in array format
var b=a.split(" ");                           // Splitting the input according to the space and stores as example [1,2,3,4,5]...
var prime= function(b){                       // Declaring the variable prime to store the anonymous function
for(var i=0;i<b.length;i++){                  // this for loop iterate through array
    var check=0;                              // declaring the variable to check That number of zeros of that particular number
    for(var j=1;j<=i;j++){                    // this for loop increases the value of j starting from 1 and ends at that number
        if(parseInt(b[i])%j === 0){           // this if condition checks that b[i] number is divisible by j and its reminder is zero or not
            check++;                          // if that above condition satisfies it will increament c by one
        }
    } 
    if(check === 1 ){                        // this if conditon checks that zeros is equal to one 
        console.log(b[i]);                   // this line log the prime number in console
    }
}}
prime(b)


//Return all the prime numbers in an array by using IIFA function
var a=userInput[0];                            // Taking Input from the user as string in array format
var b=a.split(" ");                            // Splitting the input according to the space and stores as example [1,2,3,4,5]...
(function(){                                   // this function willl execute automatically
for(var i=0;i<b.length;i++){                   // this for loop iterate through array
    var check=0;                               // declaring the variable to check That number of zeros of that particular number
    for(var j=1;j<=i;j++){                     // this for loop increases the value of j starting from 1 and ends at that number
        if(parseInt(b[i])%j === 0){            // this if condition checks that b[i] number is divisible by j and its reminder is zero or not
            check++;                           // if that above condition satisfies it will increament c by one
        }
    } 
    if(check === 1 ){                           // this if conditon checks that zeros is equal to one 
        console.log(b[i]);                      // this line log the prime number in console
    }
}})()

});    