var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,500);

    //create 4 different surfaces
    
    surface1=createSprite(430,490,110,20)
    surface2=createSprite(310,490,110,20)
    surface3=createSprite(190,490,110,20)
    surface4=createSprite(60,490,110,20)

    surface1.shapeColor="green";
    surface2.shapeColor="red";
    surface3.shapeColor="orange";
    surface4.shapeColor="blue";

    //create box sprite and give velocity

     box=createSprite(220,100,20,20)
     box.shapeColor="white";
      box.velocityX=5;
      box.velocityY=-4;
}

function draw() {
    background(rgb(169,169,169));
    //create edges of canvas 
    
    edges =createEdgeSprites()
    box.bounceOff(edges[0])
    box.bounceOff(edges[1])
    box.bounceOff(edges[2])
    box.bounceOff(edges[3])
    
    //add condition to check if box touching surface and make it box
    
if(surface1.isTouching(box) && box.bounceOff(surface1)){
     box.shapeColor="green";
    }
    
if(surface2.isTouching(box) && box.bounceOff(surface2)){
box.shapeColor="red";
}
    
if(surface3.isTouching(box) && box.bounceOff(surface3)){
     box.shapeColor="orange";
}

if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="blue";
}
 
    


    drawSprites();
}

