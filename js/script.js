let no = document.querySelector(".no");
let yes = document.querySelector(".yes");
let position = ["left", "up", "down", "bottom", "right", "center", "rightTop"];
let count = 0;

function changePosition() {
  no.classList = position[count];
  count++;
  if (count === 7) {
    count = 0;
  }
}

no.addEventListener("mouseover", changePosition);

let display = document.getElementById("display");
function changeText() {
  display.textContent = "አውቄው ነበር 😜";
  yes.textContent = "😜";
}

yes.addEventListener("click", changeText);


