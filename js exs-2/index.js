function getvalue(){
    let input1 = document.getElementById("number1").value;
    let input2 = document.getElementById("number2").value;
    let add = parseInt(input1) + parseInt(input2);
    document.getElementById("result").innerHTML= "Addition of two numbers: "  +add;
}
function getsub(){
    let input1 = document.getElementById("number1").value;
    let input2 = document.getElementById("number2").value;
    let sub = parseInt(input1) - parseInt(input2);
    document.getElementById("result").innerHTML= "Subtraction of two numbers: " +sub;
}
function getmult(){
    let input1 = document.getElementById("number1").value;
    let input2 = document.getElementById("number2").value;
    let mult = parseInt(input1) * parseInt(input2);
    document.getElementById("result").innerHTML= "Multiplication of two numbers: " +mult;
}
function getdiv(){
    let input1 = document.getElementById("number1").value;
    let input2 = document.getElementById("number2").value;
    let div = parseInt(input1) / parseInt(input2);
    document.getElementById("result").innerHTML= "Division of two numbers: " +div;
}
