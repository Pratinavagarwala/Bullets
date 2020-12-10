var ob1,ob2,ob3,ob4;
var speed,weight;
var wall,thickness,damage,hieght;

 function setup() {
  createCanvas(1600,400);

  ob1=createSprite(100,50,10,20);
  ob1.shapeColor="white";

  ob2=createSprite(100,150,10,20);
  ob2.shapeColor="red"; 

  ob3=createSprite(100, 250, 10, 20);
  ob3.shapeColor="blue";

  ob4= createSprite(100,350,10,20);
  ob4.shapeColor="green";

  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  
  wall = createSprite(1120,200,1500,300);
  wall.shapeColor= "grey";
  

}

function draw() {
  background(0); 

  bounceoff(ob1,wall);
  bounceoff(ob2,wall);
  bounceoff(ob3,wall);
  bounceoff(ob4,wall);

  ob4.velocityX=speed;
  ob3.velocityX=speed;
  ob2.velocityX=speed;
  ob1.velocityX=speed;
  

   
   if(isTouching(ob4,wall)){
    ob4.velocityX= 0;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness); 
  }
  if(isTouching(ob3,wall)){
    ob3.velocityX= 0;
   damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness); 
  }
  
  if(isTouching(ob2,wall)){
    ob2.velocityX=0;
   damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness); 
  }
    
  if(isTouching(ob1,wall)){
    ob1.velocityX=0;
   damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness); 
  }
  
  if(damage>=3.68 && damage<10){
  wall.shapeColor="green";
  } else if(damage>10){
    wall.shapeColor="red";
    
  }

  drawSprites();
}














