let mySound = document.getElementById("mySound");
let icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySound.paused) {
    mySound.play();
    icon.src = "images/pause-icon.jpg";
  } else {
    mySound.pause();
    icon.src = "images/pink-play.jpg";
  }
};
