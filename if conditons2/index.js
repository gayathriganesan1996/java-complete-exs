function getcondition(){
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    let c = document.getElementById("number3").value;
    a =parseInt(a);
    b= parseInt(b);
    c= parseInt(c);
    if(a>b && a>c){
        document.getElementById("result").innerHTML=  "OUTPUT: A is greater";
    }else if(b>a && b>c) {
        document.getElementById("result").innerHTML = "OUTPUT: B is greater ";  
      }else if (c>a && c>b){
        document.getElementById("result").innerHTML = "OUTPUT: C is greater ";
      }else if(a===b && b===c){
        document.getElementById("result").innerHTML = "OUTPUT: All are equal "; 
      }else{
        document.getElementById("result").innerHTML = "OUTPUT: Invalid";
      }
}