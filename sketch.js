
function setup() {
  createCanvas(500,500);
  background("black");
}

function draw() 
{


  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("red");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("blue");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  if (keyIsDown(RIGHT_ARROW))
  {
   background("yellow");
  }
  
  drawSprites();
}

