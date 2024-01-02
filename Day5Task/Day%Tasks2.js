const obj=[{resume:{
    name:"Arunkumar",contacts:{emailid:"arunk@GMAIL.COM",phonenumber:"9329939393",
    linkedin:"www.linkedin.com/in/arunkumar-r-539601209"},education:["Engineering(ECE)","Hsc","SSc"],},
    experience:{jobtitle:"Associate Sales and Service Engineer (Territory Officer)",duration:"8months",
    skillused:"R&D,communication,CRM,marketresearch"
    },
    skills:"HTML,CSS,JAVA,JS"
},{projects:{project1:"UAV DRone",project2:"wireless charger"}}

];


//for in loop 

for(const key in obj){
    console.log(key);               // this will return the keys in the  json
}

for(const key in obj){
    console.log(obj[key]);         // this will return the keys and ot value in the  json
}


// for of loop
let key=Object.keys(obj);                  // this key stores the key alone
for(let i of key){
    console.log(i);                       // this will return keys in json
}

let keys1=Object.values(obj);             // this key stores the values of keys
for(let i of keys1){
    console.log(i);                      // this will return the keys and ot value in the  json
}

// // for each loop
   const ke=Object.keys(obj);              // this key stores the values of keys
   ke.forEach(key =>{
   console.log(key,obj[key])               // this will return the keys and ot value in the  json
   });
   
// for loop
for(var i=0;i<obj.length;i++){            // we are iterating through the json
    console.log(obj[i]);                   // we are logging the output in console.
}
 


