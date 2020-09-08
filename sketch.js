
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var paper,dustbin;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new paper(56,46,55,55);
	paper.velocityY = 0;
	dustbin = new Dustbin(100,50,50,100);
	ground = new Ground(800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  dustbin.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

       Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x: 85,y: -85});

	}
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
       paper.velocityY = -3;
	}
}

