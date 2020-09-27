var rectangle,rectangle2,r3,r4,r5








function setup() {
  createCanvas(800,400);
  rectangle=createSprite(100,200,10,20);
  r3=createSprite(200,200,30,10);
  r4=createSprite(350,200,50,10);
  r5=createSprite(270,40,20,5);
  rectangle2=createSprite(300,100,10,10);
  rectangle.shapeColor="red";
  rectangle2.shapeColor="green";

}


function draw() {
  background(255,255,255);  
  
  r4.velocityX=-3;
r3.velocityX=3;

  rectangle2.x=mouseX;
  rectangle2.y=mouseY;
  
isTouching(rectangle,rectangle2);
  drawSprites();
}


