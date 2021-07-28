
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,ropre4,rope5;
var bob1Diameter;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(350,200,280,30);
    bob1 = new Bob(240,450,40);
	bob2 = new Bob(280,450,40);
	bob3 = new Bob(320,450,40);
	bob4 = new Bob(360,450,40);
	bob5 = new Bob(400,450,40);
    rope1 = new Rope(bob1.body,roof.body,-110,-5);
	rope2 = new Rope(bob2.body,roof.body,-70,-5);
	rope3 = new Rope(bob3.body,roof.body,-30,-5);
	rope4 = new Rope(bob4.body,roof.body,10,-5);
	rope5 = new Rope(bob5.body,roof.body,50,-4);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100});
  
	}
}



