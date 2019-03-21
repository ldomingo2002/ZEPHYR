function startGame(){
document.getElementById('canvas').style.background = "url(images/ceiling.png)";
}


function changeImg(){
document.getElementById('startbutton').style.backgroundImage = "url('Images\ceiling.png')";
}

 function changePage(){
   //option 1
   var button = document.createElement("button");
   button.innerHTML = "Option 1";
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button);
var idT = button;
idT.setAttribute("id", "nextButton");
//option 2
var button = document.createElement("button");
button.innerHTML = "Option 2";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

var idT = button;
idT.setAttribute("id", "nextButton2");
 }

 ...
