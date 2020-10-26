var climberImg;
var doorImg;
var ghostImg;
var towerImg;

var ghost;

var play = 1;
var end = 0;
var gameStage = play;

var sound ;

var doorGroup;
var climberGroup;
var ibGroup;

function preload(){
  
climberImg=loadImage("climber.png")  ;
doorImg = loadImage("door.png")  ;
ghostImg = loadImage("ghost-standing.png")  ;
towerImg = loadImage("tower.png")  ;
sound = loadSound("spooky.wav")    ;
}


function setup(){
createCanvas(600,600)  ;
tower = createSprite(300,300,10,10) ;
tower.addImage("label1",towerImg)  ;
tower.velocityY= 5;
  
ghost = createSprite(300,300,10,10)   ;
ghost.addImage("label1",ghostImg)  ;
ghost.scale = 0.4;
  
doorGroup = new Group(); 
climberGroup = new Group(); 
ibGroup = new Group();   
  

 
}


function draw(){
background("white");  
  
if(gameStage === play)  {
  
  if(tower.y>600){
tower.y = 300;    
}
  
if(keyDown("right_arrow")) {
ghost.x = ghost.x + 5  ;
}
 
if(keyDown("left_arrow")) {
ghost.x = ghost.x - 5  ;
}  
  
if(keyDown("space")){
ghost.velocityY = -3;    
}
  
ghost.velocityY = ghost.velocityY +0.5;

if(ghost.isTouching(ibGroup)||(ghost.y>600))  {
 gameStage = end;   

}
  
if(ghost.isTouching(climberGroup))  {
 ghost.y = 0; 
  
}
 //sound.loop();   
spawnDoors();   
}
  
  
if(gameStage === end)   {
 fill("red") ;
 textSize(30);
 text("Game Over",300,300) ; 
}
  

 drawSprites();
}
  
 
function spawnDoors(){
if(frameCount%150===0)  {
var door = createSprite(300,0,100,10);
var climber = createSprite(300,70,100,10);  
var invisibleBlock = createSprite(300,80,100,10);
door.x = Math.round(random(100,500));
climber.x = door.x;
invisibleBlock.x = door.x;  
door.addImage("label1",doorImg)  ;
climber.addImage("label1",climberImg)  ; 
invisibleBlock.visible = false;  
  
door.velocityY = 5;  
climber.velocityY = 5;  
invisibleBlock.velocityY = 5;   
  
  
  
doorGroup.add(door);
climberGroup.add(climber)  ;
ibGroup.add(invisibleBlock)  ;
  
} 
}