var tom,tomRunning,tomImg1,tomImg2,tomImg3,tomImg4;
var jerry,jerryImg1,jerryImg2,jerryImg3,jerryImg4;
var garden,gardenImg;

function preload() {
  tomImg1=loadImage("tomOne.png");
  tomImg2=loadImage("tomTwo.png");
  tomImg3=loadImage("tomThree.png");
  tomImg4=loadImage("tomFour.png");

  jerryImg1=loadImage("jerryOne.png");
  jerryImg2=loadImage("jerryTwo.png");
  jerryImg3=loadImage("jerryThree.png");
  jerryImg4=loadImage("jerryFour.png");

  gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1200,800);
 tom=createSprite(900,200,40,40);
 tom.addImage("tom",tomImg1);

 jerry=createSprite(200,200,30,30);
 jerry.addImage("jerry",jerryImg1)

 garden=createSprite(1200,800);
 garden.addImage("garden" , gardenImg);

}

function draw() {

    background(255);
    if(isTouching(tom,jerry)){
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.addAnimation("tomImg3" , tomImg3);
       tom.changeAnimation("tomImg3");
       tom.velocityX=0;
 }
        
    }
    
    drawSprites();
}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
      tom.velocityX=4;
      tom.addAnimation("tomRunning" , tomImg2);
      tom.changeAnimation("tomRunning");
  }
}
