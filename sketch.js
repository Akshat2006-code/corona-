

var play

function preload(){
  photo=loadImage("download.png");
  
  }

  function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    play=createSprite(340,380,30,30);
    play.addImage(photo); 
    play.scale=1.4;
  }


function draw() {
  background(255,255,255);  

 
  fill("Grey");
  textSize(105);
  text("2021", 220, 90);

  fill("Red");
  textSize(25);
  text("Welcome to Bacchus Marsh College!", 140, 200);
  ///fill("Blue");
  //textSize(25);
  //text("The Visual Communication students have made a 2021 poster that represents our time in covid-19.", 170, 230);
  

  drawSprites();

}