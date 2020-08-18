//creating local variables
var backImg,backgro;
var player, player_running;
var ground,ground_img;

var foodGroup, bananaImg;
var obstaclesGroup, obstacle_img;

var gameOver;
var score=0;


function preload(){
//loading the image for each item

backImage=loadImage("jungle2.jpg");

 player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaImg = loadImage("Banana.png");
obstacle_img = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(800,400);
  
  //creating sprites for each item
  backgro=createSprite(0,0,800,400);
  backgro.addImage(backImg);
  backgro.scale=1.5;
  backgro.x=backgro.width/2;
  backgro.velocityX=-4;
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("Running",player_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  //creating groups
  foodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  
  background(255);
  
  //continous ground
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  //continous background
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
  //destroying the bananas when the monkey touches it
    if(FoodGroup.isTouching(player)){
      FoodGroup.destroyEach();
    score = score + 2;
    }
  
  //making sure the monkey doesn't always stay at one size
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  
  //making the monkey jump and have gravity
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
  //making sure the monkey doesn't fall through the ground
    monkey.collide(ground);
    
  //calling each group
  Food();
  Obstacles();
 
  //reducing the size after it hits an obstacles
    if(obstaclesGroup.isTouching(player)){ 
        player.scale=0.08;
     // score=score-2;
    }
  
  drawSprites();
  
  //the score
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}

function spawnFood() {
  
  if (frameCount % 80 === 0) {
    
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImag);
    
    banana.scale = 0.05;
    banana.velocityX = -5;
    
    banana.lifetime = 300;
    player.depth = banana.depth + 1;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle_img);
    
         
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    

    obstaclesGroup.add(obstacle);
  }
}


  




  
