function function1() {
    document.body.style.backgroundImage = "url('images/leceiling.png')";
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
  var body2 = document.getElementsByTagName("body")[0];
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
     var body = document.getElementsByTagName("body")[0];
     body.appendChild(button3);
  var idT = button3;
  idT.setAttribute("id", "nextButton3");
     let x = 2;
     if (x===2){
       button3.onclick = gameOver2;
     }
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
button6.innerHTML = "option 4";
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
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton3);
var idT = nextButton3;
idT.setAttribute("id", "nextButton3");
let x = 1;
if(x===1){
  nextButton3.onclick = gameOver2;
}
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
  document.body.style.backgroundImage = "url('images/19.png')";
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
   button7.onclick = option7;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button9);
var idT = button9;
idT.setAttribute("id", "button9");

 var button10 = document.createElement("button");
button10.innerHTML = "Option 8";
button10.onclick = option8;
var body2 = document.getElementsByTagName("body")[0];
body2.appendChild(button10);
var idT2 = button10;
idT2.setAttribute("id", "button10");
}

function option5(){
  document.body.style.backgroundImage = "url('CLASSOP.png')";
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
  document.body.style.backgroundImage = "url('images/RUN.png')";
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
button10.onclick = option8;
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
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton7);
var idT = nextButton7;
idT.setAttribute("id", "nextButton3");
let x = 1;
if (x===1){
  nextButton7.onclick = gameOver2;
}
}
function option8(){
  document.body.style.backgroundImage = "url('images/15.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button9").style.display = "none";
  document.getElementById("button10").style.display = "none";
    var nextButton8 =  document.createElement("button");
   nextButton8.innerHTML = "Next";
  nextButton8.onclick = option9;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton8);
var idT = nextButton8;
idT.setAttribute("id", "nextButton8");
}

function option9(){
  document.body.style.backgroundImage = "url('images/16.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton8").style.display = "none";
    var nextButton9 =  document.createElement("button");
   nextButton9.innerHTML = "Next";
 nextButton9.onclick = option10;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButton9);
var idT = nextButton9;
idT.setAttribute("id", "nextButton9");
}

function option10(){
  document.body.style.backgroundImage = "url('images/17.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton9").style.display = "none";
    var nextButtonX =  document.createElement("button");
   nextButtonX.innerHTML = "Next";
 nextButtonX.onclick = optionXi;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButtonX);
var idT = nextButtonX;
idT.setAttribute("id", "nextButtonX");
}

function optionXi(){
  document.body.style.backgroundImage = "url('images/19.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButtonX").style.display = "none";
    var nextButtonXi =  document.createElement("button");
   nextButtonXi.innerHTML = "Next";
  nextButtonXi.onclick = optionXii;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButtonXi);
  var idT = nextButtonXi;
  idT.setAttribute("id", "nextButtonXi");
}

function optionXii(){
  document.body.style.backgroundImage = "url('images/21.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButtonXi").style.display = "none";
    var nextButtonXii =  document.createElement("button");
   nextButtonXii.innerHTML = "Next";
  nextButtonXii.onclick = optionXiii;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButtonXii);
  var idT = nextButtonXii;
  idT.setAttribute("id", "nextButtonXii");
}

function optionXiii(){
  document.body.style.backgroundImage = "url('images/21.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButtonXii").style.display = "none";
    var nextButtonXiii =  document.createElement("button");
   nextButtonXiii.innerHTML = "Next";
  nextButtonXiii.onclick = optionXiv;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(nextButtonXiii);
  var idT = nextButtonXiii;
  idT.setAttribute("id", "nextButtonXiii");
}
function optionXiv(){
  document.body.style.backgroundImage = "url('images/22.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButtonXiii").style.display = "none";
  var button11 =  document.createElement("button");
 button11.innerHTML = "Option 11";
button11.onclick = optionXv;
 var body = document.getElementsByTagName("body")[0];
 body.appendChild(button11);
var idT = button11;
idT.setAttribute("id", "button11");

var button12 = document.createElement("button");
button12.innerHTML = "Option 12";
button12.onclick = optionXvi;
var body2 = document.getElementsByTagName("body")[0];
body2.appendChild(button12);
var idT2 = button12;
idT2.setAttribute("id", "button12");
}

function optionXv(){
  document.body.style.backgroundImage = "url('images/23.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button11").style.display = "none";
  document.getElementById("button12").style.display = "none";
    var button13 =  document.createElement("button");
   button13.innerHTML = "Next";
  button13.onclick = optionXvii;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button13);
  var idT = button13;
  idT.setAttribute("id", "button13");
}

function optionXvii(){
document.body.style.backgroundImage = "url('images/24.png')";
document.body.style.backgroundSize = "100%";
document.body.style.backgroundPosition = "top right";
document.getElementById("button13").style.display = "none";
  var button16 =  document.createElement("button");
 button16.innerHTML = "Next";
button16.onclick = optionXviicont;
 var body = document.getElementsByTagName("body")[0];
 body.appendChild(button16);
var idT = button16;
idT.setAttribute("id", "button16");
}

function optionXviicont(){
  document.body.style.backgroundImage = "url('images/25.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button16").style.display = "none";
    var button17 =  document.createElement("button");
   button17.innerHTML = "Next";
  button17.onclick = finalPage;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button17);
  var idT = button17;
  idT.setAttribute("id", "button17");
}

function optionXvi(){
  document.body.style.backgroundImage = "url('images/26.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button11").style.display = "none";
  document.getElementById("button12").style.display = "none";
    var button14 =  document.createElement("button");
   button14.innerHTML = "Next";
  button14.onclick = optionXvcont;
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button14);
  var idT = button14;
  idT.setAttribute("id", "nextButton4");
}

function optionXvcont(){
  document.body.style.backgroundImage = "url('images/27.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("nextButton4").style.display = "none";
    var button15 =  document.createElement("button");
   button15.innerHTML = "Next";
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button15);
  var idT = button15;
  idT.setAttribute("id", "nextButton3");
  let x = 1;
if (x===1){
  button15.onclick = gameOver2;
  }
}
function gameOver2() {
  let y = 3;
  document.body.style.backgroundImage = "url('images/gameover.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  do{
    document.getElementById("nextButton3").style.display = "none";
    y++;
  }while(y===3);
}

function finalPage(){
  document.body.style.backgroundImage = "url('images/28.png')";
  document.body.style.backgroundSize = "100%";
  document.body.style.backgroundPosition = "top right";
  document.getElementById("button17").style.display = "none";
}
