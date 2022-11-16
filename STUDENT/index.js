function myFunction(){
    let name = document.getElementById("name").value;
    let regno = document.getElementById("regno").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let dept = document.getElementById("dept").value;
    let address = document.getElementById("address").value;

    if(name==""){
        document.getElementById("error-name").innerHTML = "Please enter the name";
    }else{
        document.getElementById("error-name").innerHTML = " ";
    }
    if(regno==""){
        document.getElementById("error-regno").innerHTML = "Please enter the reg no";
    }else{
        document.getElementById("error-regno").innerHTML = " ";
    }
    if(email==""){
        document.getElementById("error-email").innerHTML = "Please enter the email";
    }else{
        document.getElementById("error-email").innerHTML = " ";
    }
    if(gender==null){
        document.getElementById("error-gender").innerHTML = "Please select the gender";
    }else{
        document.getElementById("error-gender").innerHTML =""; 
        gender= gender.value;
    }
    if(dept==""){
        document.getElementById("error-dept").innerHTML = "Please select the dept";
    }else{
        document.getElementById("error-dept").innerHTML = "";
    }
    if(address==""){
        document.getElementById("error-address").innerHTML = "Please fill the address";
    }else{
        document.getElementById("error-address").innerHTML = "";
    }
    let Result = {name,regno,email,address, gender,dept};
    console.log(Result);
}