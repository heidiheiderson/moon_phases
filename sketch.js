let cat;
let pizza;
var angle;
var PizzaRotationTime = 1000;



function preload() {
  cat = loadImage('cat_moon.jpeg');
  pizza = loadImage('pizza.png')
}




function setup() { 
  createCanvas(400, 400);
  
} 

function draw() { 
  background(0);


  fill(255, 255, 255);
  stroke(255, 255, 255);

  imageMode(CENTER);
  image(cat, width/2, height/2, 200, 200);


  image(pizza, 400-frameCount, width/2, 200, 200);
 

  
  //translate(0, 0, 400, 400)
  // ellipse(200, 200, 200, 200);
 
  // noStroke()
  // fill(0)
  // ellipse(400-frameCount, 200, 200, 200);
  
}

//next steps: make this code my own
// work on centering the cat, maybe using translate
//using a donut image as eclipse 
