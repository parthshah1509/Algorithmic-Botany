function Branch(begin, end){
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };

  this.branch = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.mult(0.67);
    dir.rotate(PI/4);
    var newEndR = p5.Vector.add(this.end,dir);
    var right = new Branch(this.end,newEndR);
    dir.rotate(-PI/2);
    var newEndL = p5.Vector.add(this.end,dir);
    var left = new Branch(this.end,newEndL);
    
    return [left,right];
  };

  this.jitter = function() {
    this.end.x += random(-0.5, 0.5);
    this.end.y += random(-0.5, 0.5);
  };


}