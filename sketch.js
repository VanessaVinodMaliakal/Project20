var object1,object3;

function setup() {

  createCanvas(800,400);

 object1= createSprite(50, 100, 50, 20);
 object1.shapeColor="lightGreen"
 object1.velocityY=2;


  object3=createSprite(50,200,50,20)
  object3.shapeColor="violet"
  object3.velocityY=-2;
}

function draw() {
 
 BounceOff(object1,object3); 
 
  background(255,255,255);  
  drawSprites();

}

function BounceOff(obj1,obj2){
if( obj2.x-obj1.x < obj1.width/2 + obj2.width/2 
  && obj1.x-obj2.x < obj1.width/2 + obj2.width/2) {
 obj1.velocityX=-1*obj1.velocityX;
 obj2.velocityX=-1*obj2.velocityX;
 }

 if(obj2.y-obj1.y < obj1.height/2 + obj2.height/2
  && obj1.y-obj2.y < obj1.height/2 + obj2.height/2){
    obj1.velocityY=-1*obj1.velocityY;
    obj2.velocityY=-1*obj2.velocityY;
  }
}