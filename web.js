function startGame(){
  document.getElementsByName("Dream big and dare to fail. (1).png").style.background = url("")
}


function typeWriter() {
  var i = 0;
  var txt = "Hey";
  var speed = 1000;
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }



}
