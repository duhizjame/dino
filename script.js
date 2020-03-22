// function for refreshing the jump every 30 miliseconds
window.setInterval(jump, 30);
// pressing a button starts the move function
document.addEventListener("keydown", move);
// on load start the begin function
window.onload = begin;

// global variables
var screenW=0;
var canJump = false;
var playerX = 50;
var playerY = 50;
var speedX = 0;
var speedY = 0;
var playerH = 70;
var x = 1;
var groundX = 0;
var groundY = 800;

function begin(){
    screenW = screen.width;
    document.getElementById("ground").style.width=screenW+"px";
}


function move(e){
    if(e.keyCode==87 && canJump){
        //pressing the W key
        speedY = -15;
        playerY -= 15;
        canJump = false;
    }
    if(e.keyCode==65){
        //pressing the A key
        speedX = -10;
    }
    if(e.keyCode==68){
        //pressing the D key
        speedX = 10;
    }
}

function jump(){
    document.getElementById("player").style.top=playerY+"px";
    document.getElementById("player").style.left=playerX+"px";
    
    // moving the player to the bottom
    playerY += speedY;
    //gravity
    speedY += 1;
    

    if(playerY>(groundY-playerH)){
    // we stop the fall when the player hits ground
        playerY=groundY-playerH;
        speedY=0;
        canJump=true;// i dozvoljavamo ponovni skok
    }

    // moving the player along the X axis
    playerX+=speedX;
    // braking
    if(speedX>0) 
    speedX--;
    if(speedX<0)
    speedX++;
}