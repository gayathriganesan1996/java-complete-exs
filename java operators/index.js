function getAnd(){
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    let c = document.getElementById("number3").value;

   if (a <= b && b <= c){
    document.getElementById("result").innerHTML=   true;
   }else{
    document.getElementById("result").innerHTML=   false;
   }
}
function getOr(){
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    let c = document.getElementById("number3").value;
    
   if (a <= b || b <= c){
       
    document.getElementById("result").innerHTML= true;
   }else{
    document.getElementById("result").innerHTML=  false;
   }
}
