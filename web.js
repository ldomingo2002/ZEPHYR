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
idT.setAttribute("id", "button4");
}

function changePage2(){
  document.body.style.backgroundImage = "url('images/hallwaychoice.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button4").style.display = "none";
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
  var button7 = document.createElement("button");
   button7.innerHTML = "Option 5";
   button7.onclick = option5;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button7);
var idT = button7;
idT.setAttribute("id", "button7");

 var button8 = document.createElement("button");
button8.innerHTML = "Option 6";
button8.onclick = option6;
var body2 = document.getElementsByTagName("body")[0];
body2.appendChild(button8);
var idT2 = button8;
idT2.setAttribute("id", "button8");
}

function option6(){
  document.body.style.backgroundImage = "url('images/cafeoption.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button7").style.display = "none";
  document.getElementById("button8").style.display = "none";
  var nextButton3 =  document.createElement("button");
   nextButton3.innerHTML = "Next";
 nextButton3.onclick = option6cont1;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton3);
var idT = nextButton3;
idT.setAttribute("id", "nextButton3");
}

function option6cont1(){
  document.body.style.backgroundImage = "url('images/MONSTERCLASS.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton3").style.display = "none";
  var nextButton6 =  document.createElement("button");
   nextButton6.innerHTML = "Next";
    nextButton6.onclick = option6cont2;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton6);
  var idT = nextButton6;
  idT.setAttribute("id", "nextButton6");
}

function option6cont2(){
  document.body.style.backgroundImage = "url('images/staitsorexit.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton6").style.display = "none";
  var button9 = document.createElement("button");
   button9.innerHTML = "Option 7";
   //button7.onclick = option7;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button9);
var idT = button9;
idT.setAttribute("id", "button9");

 var button10 = document.createElement("button");
button10.innerHTML = "Option 8";
//button10.onclick = option8;
var body2 = document.getElementsByTagName("body")[0];
body2.appendChild(button10);
var idT2 = button10;
idT2.setAttribute("id", "button10");
}
function option5(){
  document.body.style.backgroundImage = "url('Images/CLASSOP.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button7").style.display = "none";
  document.getElementById("button8").style.display = "none";
  var nextButton4 =  document.createElement("button");
   nextButton4.innerHTML = "Next";
   nextButton4.onclick = cont1;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton4);
var idT = nextButton4;
idT.setAttribute("id", "nextButton4");
}

function cont1(){
  document.body.style.backgroundImage = "url('images/MONSTERCLASS.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton4").style.display = "none";
  var nextButton5 =  document.createElement("button");
   nextButton5.innerHTML = "Next";
  nextButton5.onclick = cont2;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton5);
var idT = nextButton5;
idT.setAttribute("id", "nextButton5");
}

function cont2(){
  document.body.style.backgroundImage = "url('images/staitsorexit.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton5").style.display = "none";
  var button9 = document.createElement("button");
   button9.innerHTML = "Option 7";
   button9.onclick = option7;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button9);
var idT = button9;
idT.setAttribute("id", "button9");

 var button10 = document.createElement("button");
button10.innerHTML = "Option 8";
//button10.onclick = option6;
var body2 = document.getElementsByTagName("body")[0];
body2.appendChild(button10);
var idT2 = button10;
idT2.setAttribute("id", "button10");
}

function option7(){
  document.body.style.backgroundImage = "url('images/EXIT.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button9").style.display = "none";
  document.getElementById("button10").style.display = "none";
  var nextButton7 =  document.createElement("button");
   nextButton7.innerHTML = "Next";
  nextButton7.onclick = gameOver2;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton7);
var idT = nextButton7;
idT.setAttribute("id", "nextButton3");
}

function option8(){
  document.body.style.backgroundImage = "url('images/EXIT.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton3").style.display = "none";
  var nextButton8 =  document.createElement("button");
   nextButton8.innerHTML = "Next";
  //nextButton7.onclick = gameOver2;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton8);
var idT = nextButton8;
idT.setAttribute("id", "nextButton8");
}
function gameOver() {
  document.body.style.backgroundImage = "url('images/gameover.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button3").style.display = "none";
}
function gameOver2() {
  document.body.style.backgroundImage = "url('images/gameover.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton3").style.display = "none";
}
