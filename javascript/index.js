
function myFunction() {
    document.getElementById("demo").innerHTML;
    console.log ("Hello World")
  }
  function mouseover() {
    document.getElementById("demo1").innerHTML;
    console.log("Welcome")
  }
  function mouseout() {
    document.getElementById("demo2").innerHTML;
    console.log("Good Day")
  }
  function mouseup() {
    document.getElementById("demo3").innerHTML;
    console.log("Good Day")
  }
  function input() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML;
    console.log("You wrote: " + x)
  }
  function onchanges() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo5").innerHTML;
    console.log("You selected: " + x)
  }
  function myfocus(x) {
    var x = document.getElementById("mytext").value;
    document.getElementById("demo6").innerHTML;
    console.log("red")
  }
  function keypress() {
    alert("You pressed a key inside the input field");
  }
  function keyup() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }
  function load() {
    alert("Page is loaded");
  }
  function getsubmit() {
    alert("The form was submitted");
  }
  function sel() {
    alert("You selected some text!");
  }
  function tar(event) { 
    alert(event.target.nodeName);
  }
  function board(event) {
    let unicode= event.which;
    document.getElementById("demo7").innerHTML = unicode;
  }
  function myfun() {
    var x = document.getElementById("name");
    x.value = x.value.toUpperCase();
  }
  function dblclick() {
    document.getElementById("demo8").innerHTML;
    console.log("welcome to world")
  }
  function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  function getcut() {
    document.getElementById("demo9").innerHTML;
    console.log( "You cut text!")
  }
  function getcopy() {
    document.getElementById("demo10").innerHTML;
    console.log("You copied text!")
  }
  function getfocusout() {
    var x = document.getElementById("lname");
    x.value = x.value.toUpperCase();
  }
  document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
  });
  