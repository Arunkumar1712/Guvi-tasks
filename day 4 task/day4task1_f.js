// Return median of two sorted arrays of the same size. using anonymous function
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
var a1=userInput[0].split(" ")                // Taking Input from the user as string in array format and splitting it according to space
// var a1=[1,12,15,26,38];
var a2=userInput[1].split(" ")                // Taking Input from the user as string in array format and splitting it according to space
// var a2=[2,13,17,30,45];
var med = function(a1,a2){                    //  Declaring the variable med to store the anonymous function
if(a1.length === a2.length){                  // if condition checks that both length of arrays are same or not
    for(var i=0;i<a2.length;i++){             // for loop iterate through the second array to push the values to array1
    a1.push(parseInt(a2[i]));
  }
var a3=a1.sort(function(a, b){return a - b}); // this variable a3 stotes the sorted array of a1
var n1=parseInt(a3.length/2);                 // this variable takes the mid value of the array
var n=a3[n1-1];                               // this variable takes the median of a3
var n3=a3[n1];                                // this variable takes the median of a3
var median = parseInt((n+n3)/2);              // this variable return the median of the two sorted arrray
console.log(median);
}else{
    console.log("array length are not same")
}}
med(a1,a2)  

// Return median of two sorted arrays of the same size. using IIFA

var a1=userInput[0].split(" ")                     //Taking Input from the user as string in array format and splitting it according to space
// var a1=[1,12,15,26,38];
var a2=userInput[1].split(" ")                     // Taking Input from the user as string in array format and splitting it according to space
// var a2=[2,13,17,30,45]; 
(function(){                                       // this function will execute automatically
    if(a1.length === a2.length){                   // if condition checks that both length of arrays are same or not
for(var i=0;i<a2.length;i++){                      
    a1.push(parseInt(a2[i]));
  }
var a3=a1.sort(function(a, b){return a - b});      // this variable a3 stotes the sorted array of a1
var n1=parseInt(a3.length/2);                      // this variable takes the mid value of the array
var n=a3[n1-1];                                    // this variable takes the median of a3
var n3=a3[n1];                                     // this variable takes the median of a3
var median = parseInt((n+n3)/2);                   // this variable return the median of the two sorted arrray
console.log(median);
    }else{
        console.log("array length are not same")
    }
})()

});