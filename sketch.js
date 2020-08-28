
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,bin1,bin2,bin3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bin1=createSprite(650,650,90,15);
	bin1.shapeColor="red";

	bin2=createSprite(600,600,15,100);
	bin2.shapeColor="red";

	bin3=createSprite(700,600,15,100);
	bin3.shapeColor="red";

	options={
		isStatic:false,
		restitution:0.3,
		friction:0.5 ,
		density:1.2,
	}
	
	paper=createSprite(300,450,20,20,options);
	paper.shapeColor="white";
	
	
	




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
  
keyPressed();
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper,paper.position,{x:85,y:-85});
	}
}





