const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gr;
var bb1,bb2,bb3,bb4,bb5;
var yb1,yb2,yb3;
var mb;
var sling;


function setup() {
var canvas =   createCanvas(800,500);
engine = Engine.create();
world = engine.world;

gr = new Ground(570,350,250,20);

bb1 = new BlueBox(470,315,50,50);
bb2 = new BlueBox(520,315,50,50);
bb3 = new BlueBox(570,315,50,50);
bb4 = new BlueBox(620,315,50,50);
bb5 = new BlueBox(670,315,50,50);

yb1 = new YellowBox(520,265,50,50);
yb2 = new YellowBox(570,265,50,50);
yb3 = new YellowBox(620,265,50,50);

mb = new MagentaBox(570,215,50,50);

shooter = new Shooter(200,200,30,30);

sling = new SlingShot(shooter.body,{x : 200, y : 200 })



  
}

function draw() {
  background(0); 
  Engine.update(engine);

  gr.display();

  bb1.display();
  bb2.display();
  bb3.display();
  bb4.display();
  bb5.display();

  yb1.display();
  yb2.display();
  yb3.display();

  mb.display();

  shooter.display();

  sling.display();

  mouseDragged.display();

  mouseReleased.display();
  
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY})}


function mouseReleased(){
  slingshot.fly();
}



  

