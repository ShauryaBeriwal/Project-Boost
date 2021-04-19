const Engine = Matter.Engine;
const World = Matter.World ;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine ;
var world;

var ground1,ground2,ground3;
var block1,block2,block3,block4,blo

function preload(){
     ballImage = loadImage("polygon.png");
}




function setup(){
createCanvas(1500,600);
engine = Engine.create();
world = engine.world;

ground1 = new Ground(600,285,200,10);
ground2 = new Ground(900,195,200,10);
ground3 = new Ground(750,600,1500,10);

block1 = new Block(600,260,30,40);
block2 = new Block(570,260,30,40)
block3 = new Block(540,260,30,40);
block4 = new Block(630,260,30,40);
block5 = new Block(660,260,30,40);
block6 = new Block(585,220,30,40);

ball = Bodies.circle(50,200,20);
World.add(world,ball);
sling = new Slingshot(this.ball,{x:150,y:160})
}

function draw(){
background = color("gray");
Engine.update(engine);
ground1.display();
ground2.display();
ground3.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

imageMode(CENTER);
image(ballImage,ball.position.x,ball.position.y,40,40);

sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

