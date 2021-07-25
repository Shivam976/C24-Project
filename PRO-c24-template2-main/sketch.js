const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
stoneShivam = new Stone(50,150)
stone2 = new Stone(250,150)
ironIngot = new Iron(370,150)
rubber = new Rubber(450,150,10)
rubber2= new Rubber(500,150,20)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stoneShivam.display();
    stone2.display();
    ironIngot.display();
    rubber.display();
    rubber2.display();

    
 
}