var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
car1Image=loadImage("images/car1.png")
car2Image=loadImage("images/car2.png")
car3Image=loadImage("images/car3.png")
car4Image=loadImage("images/car4.png")
trackImage=loadImage("images/track.jpg")
track2Image=loadImage("images/track.png")
groundImage=loadImage("images/ground.png")
f1Image=loadImage("images/f1.png")
silver=loadImage("images/silver.png")
gold=loadImage("images/gold.png")
bronze=loadImage("images/bronze.png")

carSound=loadSound("sound/car.mp3")
slidingSound=loadSound("sound/sliding.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  obstacles=createGroup();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  for(var i=0; i < 5; i++){
  w=random(200,950)
  h=random(-height*4,height-350)
  f1=createSprite(w,h);
  f1.addImage(f1Image);
  f1.debug="true"
  obstacles.add(f1)
  }
  xVel = 0;
  yVel = 0;
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
