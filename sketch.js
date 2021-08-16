var lion,lionImg;
var elephant,elephantImg;
var forestt,forestImg;
var monkey,monkeyImg;
var tiger,tigerImg;
var PLAY = 1,END = 0;
var gamestate = 1;
var score = 0
var animals,ani;
var gameoImg,game;

function preload(){
  lionImg = loadImage("lion.png");
  elephantImg = loadImage("elephant.png");
  forestImg = loadImage("forest.png");
  tigerImg = loadImage("tiger.png");
  monkeyImg = loadImage("monkey.png")
  gameoImg = loadImage("gameOver.png");
}

function setup() {
  createCanvas(1270,650);
 
  forestt=createSprite(100,500,40,50);
  forestt.addImage(forestImg);
  forestt.scale=3;

  tiger = createSprite(635,325,30,30);
  tiger.addImage(tigerImg);
  tiger.scale = 0.8;

  game = createSprite(635,325,30,30);
  game.addImage(gameoImg);
  game.scale = 3

  lionG = createGroup();
  animalG = createGroup();


  
}

function draw() {
  background(255,255,255);
  
  if(gamestate === PLAY){
  tiger.x = World.mouseX;
  tiger.y = World.mouseY;
  lions();
  animal();
  game.visible = false;

  if(animalG.isTouching(tiger)){
    animalG.destroyEach();
    score=score+2
  }
  else{
    if(lionG.isTouching(tiger)){
      gamestate=END;
      lionG.destroyEach();
      animalG.destroyEach();
      lionG.setVelocityXEach(0);
      animalG.setVelocityXEach(0)
      game.visible = true;
    }
  }
  }

 drawSprites();

  textSize(45);
  text("Score:"+score,200,50)
}

function lions(){
if(World.frameCount%120===0){
lion = createSprite(800,30,30,30);
lion.addImage("moving",lionImg);
lion.y = Math.round(random(10,500));
lion.velocityX = -(8+score/10);
lionG.add(lion);
lion.scale = 0.6
}}

function animal(){
 if (World.frameCount%100 === 0){
  position = round(random(1,2))
  animals = createSprite(30,30,30,30);
  if(position == 1){
    animals.x = 600;
    animals.y = Math.round(random(50,600));
    animals.velocityX = -(7+score/10);
  }
  else
  {
if(position == 2){
  animals.x = 0;
  animals.velocityX = (7+score/10);
  }
}
animals.scale = 0.2;
ani = Math.round(random(1,2));
  if (ani == 1){
    animals.addImage(elephantImg);
  }
  else{
    animals.addImage(monkeyImg);
  }

  animalG.add(animals);
}









}




