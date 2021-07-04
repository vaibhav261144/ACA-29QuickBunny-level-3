var player;
var target;
var edges;
var sankegroup;

function preload() {
  snakeImage = loadImage("image/snake.png") ;
  bgImage = loadImage("image/bg.png") ;
  playerImage = loadImage("image/bunnyimg.png") ;
  targetImage = loadImage("image/carrot.png") ;
}

function setup() {
createCanvas(600,600);
swamp = createSprite(300,300) ; 
swamp.scale = 2.5 ;
swamp.addImage(bgImage) ;

edges=createEdgeSprites();
player = createSprite(40,550,30,30); 
player.addImage(playerImage) ;
player.scale = 0.4 ;

target = createSprite(560,40,30,30);
target.addImage(targetImage) ;
target.scale = 0.2 ;

obs1 = createSprite(300,320,100,20);
obs2 = createSprite(100,320,100,20);
obs3 = createSprite(500,320,100,20);
obs4 = createSprite(50,220,100,20);
obs5 = createSprite(250,220,100,20);
obs6 = createSprite(450,220,100,20);
target.shapeColor = "orange"
obs6.shapeColor = "brown"
obs5.shapeColor = "brown"
obs4.shapeColor = "brown"
obs3.shapeColor = "brown"
obs2.shapeColor = "brown"
obs1.shapeColor = "brown"
sankegroup = new Group();
}

function draw() {
background("green");  

player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);

if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}

for(var i = 0 ; i < (sankegroup).lenght ; i++){
  var temp = (sankegroup).get(i) ;
  if (player.isTouching(temp)) {
  player.x = 40 ;
  player.y = 550 ;
  }
}

if(frameCount % 30===0){
  var snake = createSprite(random(70,520),random(250,500),40,5);
  snake.shapeColor = "yellow"
  snake.addImage(snakeImage) ;
  snake.scale = 0.4 ;
  snake.velocityX = random(-3,5);
  snake.velocityY = random(-3,5);
}

if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs3)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs4)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs5)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs6)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
  drawSprites();
}