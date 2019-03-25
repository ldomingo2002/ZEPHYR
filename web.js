//to change pages
function myFunction() {
    document.body.style.backgroundImage = "url('Images/leceiling.png')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundPosition = "top right";
    document.getElementById("disapear").style.display = "none";
  }

  function losePage1() {
    document.body.style.backgroundImage = "url('images/creepyhallway.png')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundPosition = "top right";
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("nextButton2").style.display = "none";
  }

 function changePage(){
   //option 1
   var button1 = document.createElement("button");
   button1.innerHTML = "Option 1";
   //no option option
button1.onclick = losePage1;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button1);
var idT = button1;
idT.setAttribute("id", "nextButton");

//option 2
var button2 = document.createElement("button");
button2.innerHTML = "Option 2";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button2);

var idT = button2;
idT.setAttribute("id", "nextButton2");
 }
