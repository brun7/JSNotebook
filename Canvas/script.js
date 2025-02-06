/// Creating the 2D Canvas
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;
let opacity = 1;

let red = 0;
let green = 0;
let blue = 0;

function drawCircle(x, y) {
  ctx.fillStyle = `rgba(${red},${green},${blue},${opacity})`;
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fill();
}

canvas.addEventListener("click", (e) => {
  drawCircle(e.offsetX, e.offsetY);
});

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, 300, 300);
});

let opacitySlider = document.querySelector("#opacity");
opacitySlider.addEventListener("input", (e) => {
  opacity = e.target.value;
});

let redValue = document.getElementById("redValue");
let greenValue = document.getElementById("greenValue");
let blueValue = document.getElementById("blueValue");

let redSlider = document.querySelector("#red");
redSlider.addEventListener("input", (e) => {
  red = e.target.value;
  redValue.textContent = red;
});

let greenSlider = document.querySelector("#green");
greenSlider.addEventListener("input", (e) => {
  green = e.target.value;
  greenValue.textContent = green;
});

let blueSlider = document.querySelector("#blue");
blueSlider.addEventListener("input", (e) => {
  blue = e.target.value;
  blueValue.textContent = blue;
});
