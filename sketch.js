
var fish, fishIMG
var obstacle, obstacleIMG
var bg, bgIMG
function preload(){
 fishIMG = loadImage("fish.png")
 bgIMG = loadImage("bg.png")
 obstacleIMG = loadImage("obstacle.png");
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400,200,800,400);
  bg.addImage(bgIMG)
  bg.scale=3
  bg.velocityX = -8

  fish = createSprite(100,280,20,20);
  fish.addImage(fishIMG);
  fish.scale = 0.25
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  if(bg.x<200){
    bg.x = 500
  }

  if (keyDown("space")){
    fish.velocityY = -10
    
  }

  fish.velocityY = fish.velocityY+0.8

  edges = createEdgeSprites();
  fish.collide(edges[3])

  spawnObstacles();
  drawSprites();

 
}

function spawnObstacles(){
  if (frameCount%120===0){
    obstacles = createSprite(800,350,20,20);
    obstacles.addImage(obstacleIMG);
    obstacles.scale = 0.35
    obstacles.velocityX = -5
  }
}