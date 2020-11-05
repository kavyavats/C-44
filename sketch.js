var genius;
var ground;
var background_img;
var scene,obstacleGroup;
var obstacle1_img;

function preload(){
    background_img=loadImage("background.jpg")
    obstacle1_img=loadImage("CACTUS2-removebg-preview.png")
    obstacle2_img=loadImage("emoji.png")
    
}

function setup(){
    createCanvas(displayWidth,displayHeight-150);

    scene=createSprite(width/2,height/2,width,height)
    scene.addImage("background",background_img)
    scene.scale=2;
    genius = createSprite(width/10,height/2,50,50);
    ground=createSprite(width/2,height,width,20);
    obstacleGroup= new Group();
}

function draw(){
    background("lightblue");
    if(keyDown("space") && genius.collide(ground)){
        genius.velocityY=-10;
    } 
    genius.velocityY = genius.velocityY+1;

    genius.collide(ground);

    scene.velocityX=-2;

    if(scene.x<500){
        scene.x=width/2;
    }
    spawnObstacles()
  
    drawSprites();
    if(obstacleGroup.isTouching(genius)){
        spawnQuestion()
    }
}

function spawnObstacles(){
    if(frameCount%60==0){
        var run=2;
        if(run==1){
       var obstacle1=createSprite(width,height-50,50,50)
       obstacle1.velocityX=-3
        obstacle1.lifetime=  - width/obstacle1.velocityX
        console.log(obstacle1.lifetime)
        obstacleGroup.add(obstacle1)
        obstacle1.addImage("obstacle",obstacle1_img)
        obstacle1.scale=0.5
        }

       
    }      
}


function spawnQuestion(){
    var number1=Math.round(random(20,200));
    var operator;
    var rand=Math.round(random(1,3))
    switch(rand){
        case 1:  operator = "+";
        break;

        case 2: operator = "-";
        break;

        case 3: operator = "*"
        break;

        default : break
    }

    var number2 = Math.round(random(20,200));

    fill("white")
    text(number1+operator+number2,50,100)
    
}