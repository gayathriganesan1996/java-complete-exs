let outputScreen = document.getElementById("output-screen");
function display(num){
    outputScreen.value += num;
}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function getclear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}
function sin(){
    outputScreen.value = Math.sin(outputScreen.value);
}
function cos(){
    outputScreen.value = Math.cos(outputScreen.value);
}
function tan(){
    outputScreen.value = Math.cos(outputScreen.value);
}
function log(){
    outputScreen.value = Math.log(outputScreen.value);  
}
function square(){
    outputScreen.value = Math.pow(outputScreen.value, 2);
}
function qubbed(){
    outputScreen.value = Math.pow(outputScreen.value, 3);
}
function sqrt2(){
    outputScreen.value = Math.pow(outputScreen.value, 1/2);
}
function sqrt3(){
    outputScreen.value = Math.pow(outputScreen.value, 1/3);
}