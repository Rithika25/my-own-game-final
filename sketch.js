var canvas,bg;
var together;
var jerry, jerryImg1,jerryImg2;
var cheese;
var coinGroup;
var score=0;
var gamestate="play";
function preload() {
    bg = loadImage("images/garden.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
cheese=loadImage("images/cheese.png");
}

function setup(){
    canvas = createCanvas(1000,800);


    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg3);
    jerry.scale = 0.15;
   coinGroup=createGroup();
}

function draw() {

    background(bg);
    if(gamestate==="play"){
if(keyDown("right")){
    jerry.addAnimation("jerryStanding", jerryImg2);
    jerry.x=jerry.x+5;
}
if(keyDown("left")){
    jerry.x=jerry.x-5;
    jerry.addAnimation("jerryStanding", jerryImg2);

}
spawnCoins();
if(jerry.isTouching(coinGroup)){
    score=score+1;
    coinGroup[0].destroy();
}
if(score==20){
    gamestate="win";
}
    }

    drawSprites();
    textSize(30);
    fill (0);
    text ("Score- "+score,100,100);

    if(gamestate==="win"){
        coinGroup.destroyEach();
        textSize(50);
        fill (0);
        stroke ("red");
        strokeWeight(4);
        text ("YOU WIN",370,400);
    
    }
}
function spawnCoins(){
    if (frameCount%70===0){
  coin=createSprite(random(50,750),-10,20,20);
  coin.addImage(cheese);
  coin.velocityY=+5;
  coin.scale=0.05;
  coin.liftime=(displayHeight+200)/7;
  
  coinGroup.add(coin);
    }
  }
  

 