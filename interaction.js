// Boton 1

let button_1 = document.getElementById("b1");

button_1.addEventListener("click", changeScene);

let activeScene = 1;
function changeScene() {
  activeScene++;

  if (activeScene > 3) {
    activeScene = 1;
  }

  console.log(activeScene);

  let img_1 = document.getElementById("img_1");
  img_1.src = "./img/s" + activeScene + ".png";

  let img_2 = document.getElementById("img_2");
  img_2.src = "./img/p" + activeScene + ".png";
}

// Boton 2

let button_2 = document.getElementById("b2");

button_2.addEventListener("click", changeCharacter);

function changeCharacter() {
  let img_2 = document.getElementById("img_2");
  img_2.classList.toggle("hide");
}

// Boton 3

let button_3 = document.getElementById("b3");

button_3.addEventListener("click", startAnimation);

function startAnimation() {
  let bee = document.getElementById("bee");
  bee.classList.toggle("bee_animation");
}

// opcional que bee se mueva con el mouse

/*
document.addEventListener("mousemove", followBee);

let bee = document.getElementById("bee");
function followBee(e) {
  let xpos = e.clientX;
  xpos = xpos - 250;

  let ypos = e.clientY;
  ypos = ypos - 340;

  bee.style.left = xpos + "px";
  bee.style.top = ypos + "px";
}
*/
