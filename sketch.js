var PLAY = 1;

var END = 0;

var gameState = PLAY;

var black, blackImg;

var bg;

var enemy, enemy_moving;

var f1, f1Img;

var f2,f2Img;

var f3, f3Img;

var f4, f4Img;

var f5, f5Img;

var gameover, gameoverImg;

var Friendgroup;

var Enemygroup;

function preload(){
  
  blackImg = loadImage("black.png");
  
  bg = loadImage("background.png");
  
  f1Img = loadImage("f1.png");
  
  f2Img = loadImage("f2.png");
  
  f3Img = loadImage("f3.png");
  
  f4Img = loadImage("f4.png");
  
  f5Img = loadImage("f5.png");
  
  enemy_moving = loadImage("alien1.png");
  
  gameoverImg = loadImage("gameover.png");
  
}

function setup(){
  
  createCanvas(680, 610);
  
  black = createSprite(320, 265);
  black.addImage("blackImg", blackImg);
  black.scale = 1.7;
  
  gameover = createSprite(320, 250);
  gameover.addImage("gameover", gameoverImg);
  gameover.scale = 1.5;
  
  friendGroup = createGroup();
  
  enemyGroup = createGroup();
  
}

function draw(){
  
  background(bg);
  
  Friends();
  
  Enemies();
  
  if(gameState === PLAY){
    
    gameover.visible = false;
    
    if(black.isTouching(enemyGroup)){
      
      gameState = END;
      
    }
    
  }
  
  else if(gameState === END){
    
    gameover.visible = true;

    //set lifetime
    friendGroup.destroyEach();
    
    enemyGroup.destroyEach();
    
    friendGroup.setVelocityXEach(0);
    
    enemyGroup.setVelocityXEach(0);
    
    friendGroup.setLifetimeEach(-1);
    
    enemyGroup.setLifetimeEach(-1);
    
    black.addImage(gameoverImg);
    black.x = 200;
    black.y = 200;
    
  }  
  
  black.x = World.mouseX;
  black.y = World.mouseY;
  
  drawSprites();
  
}

function Enemies(){
  
  if(frameCount % 200 === 0){
    
    var enemy = createSprite(400, 0, 20, 20);
    
    enemy.y = Math.round(random(100, 300));
    
    enemy.addImage("enemy_moving", enemy_moving);
    
    enemy.scale = 2;
    
    enemy.velocityX = 5;
    
    enemy.lifetime = 100;
    
    //add enemy to the group
    enemyGroup.add(enemy);
    
  }
  
}

function Friends(){
  
  if(World.frameCount % 60 === 0){
   
      friend = createSprite(400, 200, 20, 20);
      friend.scale = 2;
      
      //friend.debug = true;
      r = Math.round(random(1, 5));
      
      if(r == 1){
        friend.addImage(f1Img);
      }
      else if(r == 2){
        friend.addImage(f2Img);
      }
      else if(r == 3){
        friend.addImage(f3Img);
      }
      else if(r === 4){
        friend.addImage(f4Img);
      }
      else{
        friend.addImage(f5Img);
      }
      
      friend.y = Math.round(random(50, 340));
      
      //set lifetime and velocity
      friend.velocityX = -7;
      
      friend.setLifetime = 100;
      
      //add each friend to the group
      friendGroup.add(friend);
    }
  
}
