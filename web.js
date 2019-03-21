function startGame(){
document.getElementById('canvas').style.background = "url(images/ceiling.png)";
}


function changeImg(){
document.getElementById('startbutton').style.backgroundImage = "url('Images\ceiling.png')";
}

 function changePage(){
   var button = document.createElement("button");
   button.innerHTML = "Next Page";

   // 2. Append somewhere
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(button);


 }
