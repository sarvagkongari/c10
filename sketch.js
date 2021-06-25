var ship,shipImg;
var sea,seaImg;

function preload(){
  shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(400,200)
  sea.addImage("sea",seaImg)
  sea.velocityX=-3
  sea.scale=0.25
  ship=createSprite(200,200)
  ship.addAnimation("ship",shipImg)
  ship.scale=0.2
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/8
  }
 drawSprites()
}