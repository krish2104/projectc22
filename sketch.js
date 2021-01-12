var bullet,speed,weight;
var thickness,wall;

function setup() {
  createCanvas(1600,400);
   
  thickness=Math.round(random(22,83));
  bullet=createSprite(200,200,30,30);
  bullet.shapeColor="white";
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=80;
  speed=Math.round(random(2,3));
  bullet.velocityX=speed;
  weight=Math.round(random(30,52));
  

  

}

function draw() {
  background(0,0,0);
  var damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;
  if(damage>10){
    bullet.shapeColor="red";
  } else if(damage<10){
    bullet.shapeColor="green";
  }
    console.log(damage);
  drawSprites();
}