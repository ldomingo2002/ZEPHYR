function startGame(){

document.getElementById('Home').background ="1551412813123.png";
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
//var image = document.getElementById("Home");
//if(image.src.match("1551412813123.png")){
  //image.src = "Images\1551412813123.png";
//  } else{
//    img.src = "Images\1551412813123.png";
//  }
//
