var player, playerAnimation, playerImg;
var backGround, backgroundImg;
var dino, dinoImg;
var stumpImg, stumpGroup;
var invisibleGround




function preload(){
dinoImg = loadImage("./assets/dinosaur.png")
backgroundImg = loadImage("./assets/background.png")
playerImg = loadImage("./assets/player.png")
stumpImg = loadImage("./assets/stump.png")
}

function setup() {
    createCanvas(1000,580)
    backGround = createSprite(500, 290, 10, 10)
    backGround.addImage("background", backgroundImg)
    backGround.scale = 3.5
    backGround.velocityX = 3
    player = createSprite(500, 480, 10, 10)
    player.addImage("player",playerImg)
    player.scale = 0.04
    dino = createSprite(750, 480, 10, 10)
    dino.addImage("dino", dinoImg)
    dino.scale = 0.08
    invisibleGround = createSprite(500, 580, 1000,5)
    invisibleGround.visible = false;
    dino.velocityX = 0.01
    dino.setCollider("rectangle", 0, 0, 2000, 2000, 0);

    stumpGroup = new Group()
}

function draw() {
background("black")
    if (backGround.x > 525){
        backGround.x = 475
    }
    if(keyDown("space")){
        player.velocityY = -12;
        }
        player.velocityY = player.velocityY + 0.5
        player.collide(invisibleGround)
        dino.collide(invisibleGround)
       if(stumpGroup.isTouching(player)){
        backGround.velocityX = 0;
        stumpGroup.setVelocityXEach(0)
        dino.velocityX = 0
        
       }
     
     
    if (stumpGroup.isTouching(dino)) {
      dino.velocityY = -12
    }
        dino.velocityY = dino.velocityY + 0.5
    drawSprites()
    spawnStump()
    
}

function spawnStump() {
    //write code here to spawn the clouds
    if (frameCount % 500 === 0) {
        var stump = createSprite(-130,467);
        stump.setCollider("rectangle", 0, 0, 1400, 1400, 0);
        stump.addImage(stumpImg);
        stump.scale = 0.15;
        stump.velocityX = 3;
        stumpGroup.add(stump)
      
    }
    
  }