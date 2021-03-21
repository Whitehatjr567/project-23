var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var wall1, wall2, wall3;
var ground3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	wall1 = new box(370,655,200,20);
    wall2 = new box(280,615,20,100);
	wall3 = new box(460,615,20,100);
	
	ground3 = new ground2(350,675,1000,20);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	
	
	
	
	
	
	
	

	
	 Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  wall1.display();
  wall2.display();
  wall3.display();
  ground3.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false)
    
  }
}



