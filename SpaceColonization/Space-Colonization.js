var tree;
var min_dist = 10;
var max_dist = 100;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  tree = new Tree();
}

function draw() {
  // put drawing code here
  background(51);
  tree.show();
  tree.grow();
}