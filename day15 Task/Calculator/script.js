const display=document.getElementById("display");
function appendToDisplay(input){
  result.value += input;
}
function clearDisplay(){
    result.value="";
}
function cl(){
    var an=input.length();
    var pow=0;
    for(var i=0;i<an-2;i++){
       pow+=10;
    }
    result.value += (input%(pow));
}
function calculate(){
    try{
        result.value=eval(result.value);
    }
    catch(error){
        result.value='Error';   
    }
}