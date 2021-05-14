const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball,Rball;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);


   var ball_option={
     restitution:1
   }

   ball=Bodies.rectangle(200,20,50,50,ball_option);
   World.add(world,ball);

   Rball=Bodies.circle(150,20,20,ball_option);
   World.add(world,Rball);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,50);

    rectMode(CENTER);
    rect(ball.position.x,ball.position.y,50,50)

    ellipseMode(RADIUS);
    ellipse(Rball.position.x,Rball.position.y,20,20);
}
