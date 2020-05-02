const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,200,200);
    box2 = new Box(60,250,20,300);
    box3 = new Box(340,250,20,300);
    box4 = new Box(60,100,10,10);
    box5 = new Box(340,100,10,10);
    box6 = new Box(200,180,160,20);
    box7 = new Box(200,160,120,20);
    box8 = new Box(200,140,80,20);
    box9 = new Box(200,120,40,20);

    ground = new Ground(200,height,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box3.body.position.x);
    console.log(box3.body.position.y);
    console.log(box3.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ground.display();
}