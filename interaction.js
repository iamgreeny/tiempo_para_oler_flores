let button_1 = document.getElementById("b1");

button_1.addEventListener("click", changeScene);

let activeScene = 1;
function changeScene() {
  activeScene++;
  console.log(activeScene);

  if (activeScene > 3) {
    activeScene = 1;
  }

  let img_1 = document.getElementById("img_1");
  let src_1 = "./img/s" + activeScene + ".png";
  img_1.src = src_1;

  let img_2 = document.getElementById("img_2");
  let src_2 = "./img/p" + activeScene + ".png";
  img_2.src = src_2;
}
