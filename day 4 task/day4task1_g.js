// program to find the duplicates in array using anonymous function
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
  var a = userInput[0]                    //Taking Input from the user as string in array format and splitting it according to space
  var b= a.split(" ")
//   var b=[13,12,13,12,13]
  var ans=[]                              //declaring the empty array to display the duplicate numbers
  var dup=function(b){                    //Declaring the variable dup to store the anonymous function
  for(i=0;i<b.length;i++){                // this for loop iterate through the array
      let sum=0;                          // declaring the sum varaible to store occurance of number
      for(j=i+1;j<b.length;j++){          // this for loop iterate through array after that number
      if(b[i]==b[j] ){                    // if condition checks that its repeating or not
          sum+=1;                         // if that is repeating it increament sum by 1
        }
      }
      if(sum===1){                        // this condition check that su is increamented then that number is repeated
     ans.push(b[i]) }                     // it push that value to ans array
    
  }
  console.log(ans)}                  
  dup(b);                                 // calling that function

// program to find the duplicates in array using IIFA Function

(function (){                            // this function will executed by without calling it
    let a = userInput[0]
    let b= a.split(" ")
    // var b1=[13,12,13,12,13]
    var ans=[]
for(i=0;i<b1.length;i++){
    var sum=0;
    for(j=i+1;j<b1.length;j++){
    if(b1[i]==b1[j] ){
        sum+=1;
      }
    }
    if(sum===1){
   ans.push(b1[i]) }
  
}
console.log(ans)})()

});