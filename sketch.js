let img;
function preload() {
  img = loadImage("bg.png");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(img);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();

  strokeWeight(8);
  stroke(0, 0, 255);
  noFill();
  let end = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end);

  strokeWeight(8);
  stroke(0, 255, 0);
  noFill();
  let end2 = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, end2);

  strokeWeight(8);
  stroke(255, 0, 0);
  noFill();
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, end3);

  push();
  rotate(end);
  stroke(0, 0, 255);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(end2);
  stroke(0, 255, 0);
  line(0, 0, 70, 0);
  pop();

  push();
  rotate(end3);
  stroke(255, 0, 0);
  line(0, 0, 40, 0);
  pop();

  strokeWeight(1);
  stroke(255, 218, 204);
  noFill();
  fill(255, 255, 255);
  ellipse(0, 0, 5);

  push();
  fill(255);
  rotate(+90);
  textSize(25);
  text("12", -13, -105);
  text("9", -125, +10);
  text("3", 110, +10);
  text("6", -10, 125);
  noFill();
  pop();
}
