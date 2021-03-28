const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob6;
var roof;
var rope1;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  roof= new Roof(380,60,325,15);

  bob1=new Bob(380,300,30);
  bob2=new Bob(440,300,30);
  bob3=new Bob(500,300,30);
  bob4=new Bob(320,300,30);
  bob5=new Bob(260,300,30);

  rope1=new Rope(bob1.body,roof.body,0,0);
  rope2=new Rope(bob2.body,roof.body,60,0);
  rope3=new Rope(bob3.body,roof.body,120,0);
  rope4=new Rope(bob4.body,roof.body,-60,0);
  rope5=new Rope(bob5.body,roof.body,-120,0);

}

function draw() {
  background("lightgrey");  

  Engine.update(engine);
 
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

function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    Body.applyForce(bob5.body,bob3.body.position,{x:-115,y:-115});
  }
}