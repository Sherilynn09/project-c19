var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var gameover , gameImg;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
   
  ghost =createSprite(200,200);
  ghost .addImage("ghost",ghostImg);
  ghost.scale=0.3
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    spawndoors()
    if(keyDown("RIGHT_ARROW")) {
        ghost.x = ghost.x + 6;
        }
         
    if(keyDown("LEFT_ARROW")) {
         ghost.x = ghost.x - 6;
        }
         
    if(keyDown("UP_ARROW")) {
         ghost.y = ghost.y -8;
         }
    if(keyDown("DOWN_ARROW")) {
        ghost.y = ghost.y +8;
        }
        if(ghost.isTouching(door,climber))
        {
            
        }
        
drawSprites()}


function spawndoors(){
  if(frameCount %250===0 ){
    door = createSprite(200,-50)
    door.addImage("door",doorImg)
    climber = createSprite(200,10)
    climber. addImage("climber",climberImg)
    door.velocityY=1
    climber.velocityY=1
    door.x=Math.round(random(100,400))
    climber.x=door.x
    door.depth=ghost.depth
    ghost.depth = ghost.depth+1
  }

}
