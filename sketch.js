var tree = [];
var leaves = [];
var len = 100;
var count = 0;
var ap = 100;

function setup() {
  createCanvas(400, 400);

  var begin = createVector(width/2, height);
  var end = createVector(width/2, height-100);
  var root = new Branch(begin,end);
  tree[0] = root;
}

function mousePressed(){
  for(var i = tree.length-1; i >= 0; i--){
    if(!tree[i].finished){
      b = tree[i].branch();
      tree.push(b[0]);
      tree.push(b[1]);
    }
    tree[i].finished = true;
  }
  count++;
  if(count == 6){
    for(var j = 0; j < tree.length; j++){
      if(!tree[j].finished){
        var leaf = tree[j].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(51);
  for(var i = 0; i < tree.length; i++){
    tree[i].show();
  }
  for(var i = 0; i < leaves.length; i++){
    fill(255,0,100,100)
    noStroke()
    ellipse(leaves[i].x, leaves[i].y, 6, 6);
    leaves[i].y+= random(0, 2);
  }
}
