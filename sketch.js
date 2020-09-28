const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ouEengine, ourWorld,object;


function setup(){

    createCanvas(400,400);
    ourEngine = Engine.create();
    ourWorld = ourEngine.world;

    var object_options = {
        isStatic:true
    }
     
    object= Bodies.rectangle(200,100,20,20,object_options);
    World.add(ourWorld,object);
     
    console.log(object);
    console.log(object.position.x);
    console.log(object.position.y);
}

function draw(){
    background(0);
    Engine.update(ourEngine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);

   
}