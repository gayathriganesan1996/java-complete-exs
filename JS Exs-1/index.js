function getNameList(){
   let name = document.getElementById("name").value; 
   var ul = document.getElementById("getlist");
   var li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
   document.getElementById('name').value='';
}