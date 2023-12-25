//program to Return all the palindromes in an array  using anonymous functionn 
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
    var a= userInput[0].split(" ");               // Taking Input from the user as string in array format and splitting it according to space
                                                  //  the input will taken in this format var a=[123,121,345];
    var pal=function(a){                          // Declaring the variable pal to store the anonymous function
    for(var i=0;i<a.length;i++){                  // this for loop iterate through array by taking one number at a time
    let rev =0;                                   // Declaring the variable rev to store the reversed value
    let r;                                        // declaring the variable r to store the last value of numbe to reverse
    let a1=parseInt(a[i])                         // due to change in the taken number we taken a variable to store that exact number to check at the last
    while(parseInt(a[i])>0){                      // while will execute until the number become zero
        r=parseInt(a[i])%10;                      // taking the last digit by using modulo operator
        rev=(rev*10)+r;                           //this forumla will add the last number of the number in order to reverse it
        a[i]=parseInt(a[i]/10);                   // the reducing the size of the number by dividing it by ten
      }
      if(a1 === rev){                             // this if condition checks that both number are same or not
        console.log(rev);                         // if that number are same this will give the palidrome in array
      }}}
      pal(a)                                      // calling the pal fuction

//program to Return all the palindromes in an array  using  IIFA function
    var a= userInput[0].split(" ");              // Taking Input from the user as string in array format and splitting it according to space
    // var a=[123,121,345];
    (function(){                                 // this function will execute automattically without calling it
    for(var i=0;i<a.length;i++){                 // this for loop iterate through array by taking one number at a time
    let rev =0;                                  // Declaring the variable rev to store the reversed value
    let r;                                       // declaring the variable r to store the last value of number to reverse
    let a1=parseInt(a[i])                        // due to change in the taken number we taken a variable to store that exact number to check at the last
    while(parseInt(a[i])>0){                     // while will execute until the number become zero
        r=parseInt(a[i])%10;                     // taking the last digit by using modulo operator
        rev=(rev*10)+r;                          //this forumla will add the last number of the number in order to reverse it
        a[i]=parseInt(a[i]/10);                  // the reducing the size of the number by dividing it by ten
      }
      if(a1 === rev){                            // this if condition checks that both number are same or not
        console.log(rev);                        // if that number are same this will give the palidrome in array
      }}})() 
      

});

