const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

//GAME VAR AND CONSTS

let frames= 0;


//LOAD SPRITE IMAGE

const sprite = new Image();
sprite.src = "img/sprite.png";

//BACKGROUND
const bg = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvs.height - 226,
    
    draw : function(){
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
       
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x + this.w ,this.y,this.w,this.h);
    }
}

//FOREGROUND
const fg = {
    sX : 276,
    sY : 0,
    w : 224,
    h : 112,
    x : 0,
    y : cvs.height - 112,
    
    draw : function(){
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
       
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x + this.w ,this.y,this.w,this.h);
    
    }
}
// Bird

const bird = {
    animation : [
        { sX : 276, sY : 112},//this.animation[0],
        { sX : 276, sY : 139},//this.animation[1],
        { sX : 276, sY : 164},//this.animation[2],
        { sX : 276, sY : 139},//this.animation[3],
    ],
    x: 50,
    y: 150,
    w: 34,
    h: 26,
    frame : 0,
    draw : function(){
        let bird = this.animation[this.frame];
        ctx.drawImage(sprite, bird.sX,bird.sY,this.w,this.h,this.x - this.w/2,this.y - this.h/2,this.w,this.h);
 
    }
}
//GET READY MESSAGE
const getReady = {
    sX : 0,
    sY : 228,
    x : cvs.width/2 - 173/2,
    y : 80,
    w : 173,
    h : 152,

    draw : function(){
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
       
}
}
//GAME OVER MESSAGE
const gameOver = {
    sX : 175,
    sY : 228,
    w : 225,
    h : 202,
    x : cvs.width/2 - 225/2,
    y : 80,

    draw : function(){
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
       
}
}

//DRAW

function draw(){
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0 , 0,cvs.width, cvs.height);

    bg.draw();
    fg.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
}
//UPDATE

function update(){

    
}
//LOOP
function loop(){
    update();
    draw();
    frames++;
    
    requestAnimationFrame(loop);
}
loop();

bg.draw();


// sprite.src = img/"sprite.png";
// const name = {
//     sX : 276,
//     SY : 112,
//     w : 34,
//     h : 26,
//     x:  0,
//     y: 0,
    
//     draw : function(){
//         ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
//     }
// }

// ctx.drawImage(sprite, sX,sY,sWidth,sHeigth,dX,dY,dWidth,dHeight);
