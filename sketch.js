var spaceship, laser, powerUp, explosion, bigAsteriod, mediumAsteriod, spaceBackground, spaceBackground2;
var spaceshipImg, laserImg, powerUpImg, explosionImg, bigAsteriodImg, mediumAsteriodImg, spaceBackgroundImg, spaceBackgroundImg2;
var distance = 0
var laserG, powerUpG, asteriodG;

//Game states
var START = 1
var PLAY = 2
var END = 0
gameState = 1



function preload(){
//loading images/animations
spaceshipImg = loadImage("spaceship.png");
laserImg = loadImage("laser.png");
powerUpImg = loadImage("laserPowerUp.png");
explosionImg = loadAnimation("2_explosion.png","3_explosion.png", "4_explosion.png" );
bigAsteriodImg = loadImage("big_asteriod.png");
mediumAsteriodImg = loadImage("medium_asteriod.png");
spaceBackgroundImg = loadImage("space_background.jpg");
spaceBackgroundImg2 = loadImage("space_background.jpg")

}

function setup() {
 createCanvas(1270, 645);
 //creating sprites/groups
 spaceBackground = createSprite(1270/2, 645/2, 10,10);
 spaceBackground.scale = 1.85
 spaceBackground.addImage("spaceBackground", spaceBackgroundImg);
 spaceBackground.velocityX = -7;

 spaceBackground2 = createSprite(2265, 645/2, 10,10);
 spaceBackground2.scale = 1.85
 spaceBackground2.addImage("spaceBackground2", spaceBackgroundImg2);
 spaceBackground2.velocityX = -7;
 
 laserG = new Group();
 powerUpG = new Group();
 asteriodG = new Group();

 spaceship = createSprite(120, 645/2, 10, 10)
 spaceship.scale = 0.85;
 spaceship.addImage("spaceship", spaceshipImg);
 spaceship.debug = true

}

function draw() {
 
  //infinte background
  if(spaceBackground.x < -1000){
      spaceBackground.x = 2265;
  }

  if(spaceBackground2.x < -1000){
    spaceBackground2.x = 2265;
}

if(gameState === START){

spaceship.setCollider("rectangle", 300, 0, 800, 100)

spawnAsteriods();
 }










drawSprites();
}




function spawnAsteriods(){

    if (frameCount % 60 === 0){
        var asteriod = createSprite(1270/2, 645/2,10,10);
        asteriod.velocityX = -7;
        asteriod.y =  Math.round(random(40, 605))
         //making random asteriods
         var rand = Math.round(random(1,2));
         switch(rand) {
           case 1: asteriod.addImage(bigAsteriod);
                   break;
           case 2: asteriod.addImage(mediumAsteriod);
                   break;
           default: break;
         }          
         asteriod.scale = 0.5;
         asteriod.lifetime = 1000;
         asteriodG.add(asteriod);
         asteriod.debug = true
      }
}