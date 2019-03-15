function startGame(){
  document.getElementsById("Home").style.background = url("1551412813123.png");
}


function typeWriter() {
  var i = 0;
  var txt = "H e y";
  var speed = 1000;

  if (i < txt.length) {
    document.getElementById("text").innerHTML + txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
