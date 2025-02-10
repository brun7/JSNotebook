/// Creating the 2D Canvas
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let x = 0;
let y = height / 2;
let forward = true;

function drawCircle(x, y) {
  ctx.fillStyle = "rgb(0, 128,255)";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fill();
}

function update() {
  if(x===width) {
    forward = false;
  }
  else if (x === 0) {
    forward = true;
  }

  if( forward ) {
    x += 1;
  }
  else {
    x -= 1;
  }
}



function draw() {
  ctx.clearRect(0, 0, width, height);
  drawCircle(x%width,y%height);
}

setInterval( () => {
  update();
  draw();
}, 10);