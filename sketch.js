let cat;
let pizza;
let xLoc;

function preload() {
  cat = loadImage('cat_moon.jpeg');
  pizza = loadImage('pizza.png')
}

function setup() { 
  createCanvas(400, 400);
  
} 

function drawEclipse(moonPhase){
  xLoc = map(moonPhase, 0, 30, 0, 400);
  image(pizza, xLoc, height/2, 200, 200);
  print(moonPhase);
  //print(mouseX);
}

function draw() { 
  background(0);


  fill(255, 255, 255);
  stroke(255, 255, 255);

  imageMode(CENTER);
  image(cat, width/2, height/2, 200, 200);
  drawEclipse(0);
  

 }





  
  //translate(0, 0, 400, 400)
  // ellipse(200, 200, 200, 200);
 
  // noStroke()
  // fill(0)
  // ellipse(400-frameCount, 200, 200, 200);
  
//make my own function that incorporates a phase structure 0-30
