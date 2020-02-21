var len = 100;
var angle;
var slider;

function setup() {
  createCanvas(400, 400);
  // ellipse(0, 0, 8, 8)
  slider = createSlider(0, PI, PI/6, 0.05);
}

function draw() {
  background(51);
  translate(width/2, height);
  stroke(255);
  angle = slider.value();
  branch(this.len);
}

function branch(len) {
  line(0,0,0,-len);
  
  if(len > 4){
    push();
    translate(0,-len);
    rotate(this.angle);
    branch(len*0.67);
    pop();
    push();
    translate(0,-len);
    rotate(-this.angle);
    branch(len*0.67);
    pop();
  }
}
