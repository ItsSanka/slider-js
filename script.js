const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNum = 1;
const length = images.length;

function nextSlide() {
  slider.style.transform = `translateX(-${slideNum * 200}px)`;
  slideNum++;
}

function prevSlide() {
  slider.style.transform = `translateX(-${(slideNum - 2) * 200}px)`;
  slideNum--;
}

function firtSlide() {
  slider.style.transform = `translateX(0px)`;
  slideNum = 1;
}
function lastSlide() {
  slider.style.transform = `translateX(-${(length - 1) * 200}px)`;
  slideNum = length;
}

right.addEventListener("click", () => {
  slideNum < length ? nextSlide() : firtSlide();
  resetBg();
  buttons[slideNum - 1].style.backgroundColor = "black";
});

left.addEventListener("click", () => {
  slideNum > 1 ? prevSlide() : lastSlide();
  resetBg();
  buttons[slideNum - 1].style.backgroundColor = "black";
});

for (let index = 0; index < length; index++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "black";

function resetBg() {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${index * 200}px)`;
    slideNum = index + 1;
    button.style.backgroundColor = "black";
  });
});