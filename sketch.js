
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob 
var rope
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new Bob(200,320,20,20);

bobObject2 = new Bob(230,370,20,20);

bobObject3 = new Bob(200,329,20,20);

bobObject4 = new Bob(200,310,20,20);

bobObject5 = new Bob(200,350,20,20);
	
rope1 = new Rope(object1.body,roofobject.body,bobDiameter*2,0);
Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



