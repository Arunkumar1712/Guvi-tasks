// program to Rotate an array by k times using anonymous function
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
//   var a = userInput[0]                    //Taking Input from the user as string in array format and splitting it according to space
//   var b= a.split(" ")
  var b=[22,11,2,4,5];                       // taking an array
  var k=3;                                   // number of times that array need to rotate the array
  var rot=function(b,k){                     // declaring the variable to store nonymous function
  var rev=[]                                 // declaring an array to get the final rotated array
  for(var i=0;i<k;i++){                      // for loop to iterate through the array b
    var n1=b.pop();                          // n1 variable to store the last element which is poped out from a array
    rev.push(n1);                            // pushing the value of n1 to array rev
  } 
  for(var j=0;j<b.length;j++){               // for loop to iterate through the array b
    rev.push(b[j]);                          // pushing the remaining elements to the rev array
  }
console.log(rev)}                            // logging the new rotated array i console
rot(b,k);                                    // calling the function rot


// program to Rotate an array by k times using IIFA
var b=[22,11,2,4,5];                         // taking an array
  var k=3;                                   // number of times that array need to rotate the array
(function(){                                 // function that executes without calling it
  var rev=[]                                 // declaring an array to get the final rotated array
  for(var i=0;i<k;i++){                      // for loop to iterate through the array b
    var n1=b.pop();                          // n1 variable to store the last element which is poped out from a array
    rev.push(n1);                            // pushing the value of n1 to array rev
  } 
  for(var j=0;j<b.length;j++){               // for loop to iterate through the array b
    rev.push(b[j]);                          // pushing the remaining elements to the rev array
  }
console.log(rev)})()
});