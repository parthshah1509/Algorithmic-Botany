var axiom = "XF";
var sentence = axiom;
var len = 100;
var angle;

var rules = [];
rules[0] = {
  a: "F",
  b: "FF"
  // b: "FF+[+F-F-F]-[-F+F+F]"
  // b: "F[+FF][-FF]F[-F][+F]F"
  // b: "F+F−F−F+F"
};
rules[1] = {
  a: "X",
  b: "F+[[X]-X]-F[-FX]+X"
}

function generate() {
  len *= 0.5;
  var nextSentence = "";
  for(var i = 0; i < sentence.length; i++){
    var current = sentence.charAt(i);
    var found = false;
    for(var j = 0; j < rules.length; j++){
      if(current == rules[j].a){
        nextSentence += rules[j].b;
        found = true;
        break;
      }
    }
    if(!found){
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function setup() {
  // put setup code here
  createCanvas(400, 400);
  angle = degrees(25);
  translate(width/2,height);
  turtle();
  createP(axiom);
  var button = createButton("Sentence");
  console.log("pressed");
  button.mousePressed(generate);
}

function turtle() {
  // len *= 0.67;
  background(51);
  resetMatrix();
  translate(width/2,height);
  stroke(255);
  for(var i = 0; i < sentence.length; i++){
    var current = sentence.charAt(i);
    if(current == "F"){
      line(0,0,0, -len);
      translate(0, -len);
    } else if (current == "+"){
      rotate(angle);
    } else if (current == "-"){
      rotate(-angle);
    } else if (current == "["){
      push();
    } else if (current == "]"){
      pop();
    }
  }
}

function draw() {
  // put drawing code here
}