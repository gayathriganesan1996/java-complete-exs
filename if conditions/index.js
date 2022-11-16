function getcondition(){
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;

   if (a==b){
    document.getElementById("result").innerHTML=  "OUTPUT: Equal";
   }else if(a>b){
    document.getElementById("result").innerHTML=  "OUTPUT: A greater then B"; 
   }else if(a<b){
    document.getElementById("result").innerHTML=  "OUTPUT: A less then B";
   }else{
    document.getElementById("result").innerHTML=  "OUTPUT: everything is false";
   }
}