//to change pages
function myFunction() {
    document.body.style.backgroundImage = "url('Images/leceiling.png')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundPosition = "top right";
    document.getElementById("disapear").style.display = "none";
  }

  function changePage(){
    //option 1
    var button1 = document.createElement("button");
    button1.innerHTML = "Option 1";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button1);
  var idT = button1;
  idT.setAttribute("id", "nextButton");
 button1.onclick = losePage1;
  //option 2
  var button2 = document.createElement("button");
  var body2 = document.getElementsByTagName("body")[ 0];
  body2.appendChild(button2);
  var idT2 = button2;
  idT2.setAttribute("id", "button2");
  button2.innerHTML = "Option 2";
  button2.onclick = option1;
}

  function losePage1() {
    document.body.style.backgroundImage = "url('images/creepyhallway.png')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundPosition = "top right";
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("button2").style.display = "none";
    var button3 = document.createElement("button");
     button3.innerHTML = "Next";
     button3.onclick = gameOver;
     var body = document.getElementsByTagName("body")[0];
     body.appendChild(button3);
  var idT = button3;
  idT.setAttribute("id", "button3");
  }

function option1() {
  document.body.style.backgroundImage = "url('images/option2.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton").style.display = "none";
  document.getElementById("button2").style.display = "none";
  var button4 = document.createElement("button");
   button4.innerHTML = "Next";
   button4.onclick = changePage2;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button4);
var idT = button4;
idT.setAttribute("id", "nextButton4");
}

function changePage2(){
  document.body.style.backgroundImage = "url('images/hallwaychoice.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton4").style.display = "none";
  var button5 = document.createElement("button");
   button5.innerHTML = "Option 3";
   button5.onclick = option3;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button5);
var idT = button5;
idT.setAttribute("id", "button5");
//bad option
var button6 = document.createElement("button");
button6.innerHTML = "Option 4";
button6.onclick = option4;
var body2 = document.getElementsByTagName("body")[0];
body2.appendChild(button6);
var idT2 = button6;
idT2.setAttribute("id", "button6");
}

function option3(){
  document.body.style.backgroundImage = "url('images/cafeteria.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button5").style.display = "none";
  document.getElementById("button6").style.display = "none";
  var nextButton2 =  document.createElement("button");
   nextButton2.innerHTML = "Next";
   nextButton2.onclick = next2option;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton2);
var idT = nextButton2;
idT.setAttribute("id", "nextButton2");
}

function next2option(){
  document.body.style.backgroundImage = "url('images/ClassorCafe.png')"
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton2").style.display = "none";
}

function option4(){
  document.body.style.backgroundImage = "url('images/CHEMISTRY.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button5").style.display = "none";
  document.getElementById("button6").style.display = "none";
  var nextButton3 =  document.createElement("button");
   nextButton3.innerHTML = "Next";
   nextButton3.onclick = gameOver2;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton3);
var idT = nextButton3;
idT.setAttribute("id", "nextButton3");
}

function gameOver() {
  document.body.style.backgroundImage = "url('images/gameover.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementBytag("button3").style.display = "none";
}
function gameOver2() {
  document.body.style.backgroundImage = "url('images/gameover.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton3").style.display = "none";
}
