//to change pages
function myFunction() {
    document.body.style.backgroundImage = "url('Images/leceiling.png')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundPosition = "top right";
    document.getElementById("disapear").style.display = "none";
  }

  function home() {
    document.body.style.backgroundImage = "url('images/NEWSTART.png')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundPosition = "top right";
    var newStart = document.createElement("button");
    newStart.innerHTML = "Start";
    var idT = newStart;
    idT.setAttribute("id", "startbutton2");
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(newStart);
    newStart.onclick = myFunction;
  }

  function gameOver() {
    document.body.style.backgroundImage = "url('images/gameover.png')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundPosition = "top right";
    document.getElementById("nextButton3").style.display = "none";
    var restart = document.createElement("button");
    restart.innerHTML = "Go back";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(restart);
    var idT = restart;
    idT.setAttribute("id", "restartButton");
    restart.onclick = home;
  }

  function losePage1() {
    document.body.style.backgroundImage = "url('images/creepyhallway.png')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundPosition = "top right";
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("nextButton2").style.display = "none";
    var button3 = document.createElement("button");
     button3.innerHTML = "Next";     button3.onclick = gameOver;
     var body = document.getElementsByTagName("body")[0];
     body.appendChild(button3);
  var idT = button3;
  idT.setAttribute("id", "nextButton3");
  }

function newStart(){
  document.style.backgroundImage = "url('images/NEWSTART.png')";
  document
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
console.log("went to losePage1");

//option 2
var button2 = document.createElement("button");
button2.innerHTML = "Option 2";
//good option Option
//button2.onlick = goodOption1;
//make this later
var body = document.getElementsByTagName("body")[0];
body.appendChild(button2);

var idT = button2;
idT.setAttribute("id", "nextButton2");
 }
