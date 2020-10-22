const Engine =Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine, world;
var ground1;
var ball;
function setup() {
  createCanvas(400,400);
  
  engine= Engine.create();
world= engine.world;

var groundOptions={

  isStatic: true                                                                      
}

var balloptions={
  restitution: 7.0

}

ground1= Bodies.rectangle(200,380,500,50,groundOptions);
World.add(world,ground1);  
console.log(ground1.position.x)

ball=Bodies.circle(200,100,20,balloptions)
World.add(world,ball);
}                                                     
                                                                                            
function draw() {
  background("black");  
Engine.update(engine);

fill('red');
rectMode(CENTER);
  rect(ground1.position.x,ground1.position.y ,500,50);
 ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
  


}