var sss, bg, sq, s, s1, sqi, sssi, sqSpeedX, sqSpeedY, score;
var GameState = 0
function preload(){
    bg = loadImage("bg2.jpg");
    bg1 = loadImage("bg3.jpg");
    bg2 = loadImage("bg4.jpg");
    bg3 = loadImage("bg5.jpg");
    bg4 = loadImage("bg6.jpg");
    bg5 = loadImage("bg7.jpg");
    
    sqi = loadImage("sq1.png");
    sssi = loadImage("sss1.png");
}

function setup(){
    createCanvas(400, 400);
    sq = createSprite(200, 10);
    sq.addImage(sqi);
    sss = createSprite(150, 350);
    sss.addImage(sssi);
    sq.debug = true;
    sss.debug = true;
    sss.scale = 0.2;
    sqSpeedX = Math.random(1,3);
    sqSpeedY = Math.random(1,3);
    score = 0
}

function draw(){
    background(bg);
    fill("white");
    text("score: " + score, 25, 50);
   
    sss.x = mouseX;
    sss.y = mouseY;
    dx = sss.x - sq.x;
    dy = sss.y - sq.y;

        if(GameState!=0 && GameState!=8 &&frameCount % 1 === 0){
            score = score + 1;
        }
        
    if(GameState === 0){
        textSize(15)
        text("Press Space to play", 150, 200);
    }
    if(GameState===0 &&keyDown("SPACE")){
        GameState = 1;
    } 
    if(GameState === 1){

    
    
    //sq.setVelocity(1,1);
    //sq.getSpeed(1);
    //sq.x = sss.x - 20;
    //sq.y = sss.y - 20;
    //sq.pointTo(sss.x, sss.y);
    
    //if(dx>150 || dy>150){
     //   sq.velocityX = sqSpeedX;
     //   sq.velocityY = sqSpeedY;
    //}
    sq.velocityX = dx/25;
    sq.velocityY = dy/25;
    if(sq.isTouching(sss)){
        GameState = 8;
        
    }
    if(score >=100){
        GameState = 2;
    }}
    if(GameState===8){
        text("Press Space To Play", 200, 200);
        background("black")
        textSize(30);
        fill("Yellow")
        text("Game Over",170,200);
        sq.visible = false;
        sss.visible = false;
    }
    if(GameState===2){
        background(bg1);
        text("Level 2:",200,200)
        text("score: " + score, 25, 50);
       
        
        sq.velocityX = dx/20;
        sq.velocityY = dy/20;
        if(sq.isTouching(sss)){
            GameState = 8;
            
        }
        if(score > 200){
            GameState = 3
        }
    }
    if(GameState===3){
        background(bg2);
        text("Level 3:",200,200)
        text("score: " + score, 25, 50);
       
        
        sq.velocityX = dx/15;
        sq.velocityY = dy/15;
        if(sq.isTouching(sss)){
            GameState = 8;
            
        }
        if(score > 300){
            GameState = 4
        }
    }
    if(GameState===4){
        background(bg3);
        text("Level 4:",200,200)
        text("score: " + score, 25, 50);
       
        
        sq.velocityX = dx/10;
        sq.velocityY = dy/10;
        if(sq.isTouching(sss)){
            GameState = 8;
            
        }
        if(score > 400){
            GameState = 5
        }
    }
    if(GameState===5){
        background(bg4);
        text("Level 5:",200,200)
        text("score: " + score, 25, 50);
       
        
        sq.velocityX = dx/5;
        sq.velocityY = dy/5;
        if(sq.isTouching(sss)){
            GameState = 8;
            
        }
        if(score > 500){
            GameState = 6
        }
    }
    if(GameState===6){
        background(bg5);
        text("Level 6:",200,200)
        text("score: " + score, 25, 50);
       
        
        sq.velocityX = dx/5;
        sq.velocityY = dy/5;
        if(sq.isTouching(sss)){
            GameState = 8;
            
        }
        if(score > 599){
            GameState = 7
        }
    }
    if(GameState === 7){
       textSize(40) 
    test("You Win!!!", 200,200)
    sq.visible = false;
    sss.visible = false;
    }
    drawSprites();
}