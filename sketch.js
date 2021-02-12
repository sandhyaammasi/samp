function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(800, 200, 50, 50);
 movingRect = createSprite(100, 200, 50, 50);
 //movingRect.velocityX = 2;
 //fixedRect.velocityX = -4;
 movingRect.shapeColor = "green"
 fixedRect.shapeColor = "blue"

}

function draw() {
  background("black"); 
 // movingRect.x = mouseX;
 // movingRect.y = mouseY;

  if(fixedRect.x-movingRect.x<=fixedRect.width/2 + movingRect.width/2
    && movingRect.x-fixedRect.x<=fixedRect.width/2 + movingRect.width/2
    &&fixedRect.y-movingRect.y<=fixedRect.height/2 + movingRect.height/2
    && movingRect.y-fixedRect.y<=fixedRect.height/2 + movingRect.height/2){
    //movingRect.shapeColor = "red"
    //fixedRect.shapeColor = "red"
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);

  }
 /* else{
    movingRect.shapeColor = "green"
 fixedRect.shapeColor = "green"
  } */

  drawSprites();
}
function keyPressed(){
  if(keyCode==37){
    movingRect.x = movingRect.x +10
  }

}