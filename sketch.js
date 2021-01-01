var fixedRect,movingRect;





function setup() {

  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(500,200,100,100);
  movingRect.shapeColor = "red";
  
}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<(movingRect.width/2+fixedRect.width/2) && 
  fixedRect.x-movingRect.x<(movingRect.width/2+fixedRect.width/2) && 
  movingRect.y-fixedRect.y<(movingRect.height/2+fixedRect.height/2) && 
  fixedRect.y-movingRect.y<(fixedRect.height/2+movingRect.height/2) ){
   fixedRect.shapeColor="green";
   movingRect.shapeColor="green";

  }  
  drawSprites();
}