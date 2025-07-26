// Visualización básica con p5.js
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(10);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  noFill();
  stroke(255);
  sphere(100);
}
