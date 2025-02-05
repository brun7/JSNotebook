let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

const colors = ["red", "green", "blue", "orange", "yellow", "cyan"];

// let xPos = 20;
// colors.forEach((color, index) => {
//   console.log(color, index);
//   setTimeout(() => {
//     ctx.fillStyle = color;
//     ctx.fillRect(xPos, 10, 20, 20);
//     xPos += 20;
//   }, index * 2000);
// });

// ctx.lineWidth = 2;
// ctx.strokeStyle = "red";
// ctx.strokeRect(10, 10, 200, 100);

// ctx.strokeStyle = "orange";
// ctx.strokeRect(20, 20, 180, 80);

// ctx.strokeStyle = "yellow";
// ctx.strokeRect(30, 30, 160, 60);

// ctx.strokeStyle = "green";
// ctx.strokeRect(40, 40, 140, 40);

// ctx.strokeStyle = "blue";
// ctx.strokeRect(50, 50, 120, 20);

let xPos = 0;
let yPos = 0;
let width = 220;
let height = 120;
const strokeColors = ["red", "orange", "yellow", "green", "blue"];

ctx.lineWidth = 2;
strokeColors.forEach((color) => {
  ctx.strokeStyle = color;
  ctx.strokeRect(xPos+=10, yPos+=10, width-=20, height-=20);
});
