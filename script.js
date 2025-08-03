var i = 0;
var txt = "Hi, I'm Ayush Patil"
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hero-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  document.getElementById("hero-title").innerHTML = "";
  typeWriter();
};
