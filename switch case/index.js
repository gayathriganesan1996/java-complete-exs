function getCase(){
    let a = document.getElementById("name").value;
    switch(a){
        case "S":
            document.getElementById("result").innerHTML = "Super Grade";
        break;
        case "A":
            document.getElementById("result").innerHTML = "Excellent Grade";
        break;
        case "E":
            document.getElementById("result").innerHTML = "Just Pass!";
            break;
        case "U":
            document.getElementById("result").innerHTML = "Failed Grade";
            break;
            default:
                document.getElementById("result").innerHTML = "Unknown Grade";
    }
}
