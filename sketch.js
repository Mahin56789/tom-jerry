var canvas;
var garden,gardenImage;
var tom1,tom1Image,tom_2,tom_3;
var jerry1,jerry1Image,jerry_2,jerry_3;

function preload() {
    //load the images here
    gardenImage=loadImage("garden.png");
    tom1Image=loadImage("tomOne.png");
    jerry1Image=loadImage("jerryOne.png");
    jerry_2=loadAnimation("jerryTwo.png","jerryThree.png");
    tom_2=loadAnimation("tomTwo.png","tomThree.png");
    tom_3=loadImage("tomFour.png");
    jerry_3=loadImage("jerryFour.png");
}

function setup(){
   canvas= createCanvas(1000,800);
    //create tom and jerry sprites here;
garden=createSprite(300,300);
garden.addImage("garden",gardenImage);
garden.scale=1.4;

tom1=createSprite(800,600,100,40);
tom1.addImage(tom1Image);
tom1.scale=0.18;

jerry1=createSprite(150,600,0,40);
jerry1.addImage(jerry1Image);
jerry1.scale=0.16;

}

function draw() {
 
    background(255);
   
    //Write condition here to evalute if tom and jerry collide
    
  if(tom1.x-jerry1.x<(tom1.width-jerry1.width)/2){
      tom1.velocityX=0;
      jerry1.addImage("collided",jerry_3);
      tom1.x=300;
      tom1.scale=0.2;
      jerry1.changeImage("collided",jerry_3);
      tom1.addImage("collided",tom_3);
      jerry1.scale=0.15;
      tom1.changeImage("collided",tom_3);
      }
    drawSprites();
}

