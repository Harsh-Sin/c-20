var bgImg;
var mimg, mani, mlas, clas, cani, cimg;
var mouse, cat;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    mimg = loadAnimation("images/mouse1.png");
    mani = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mlas = loadAnimation("images/mouse4.png");
    cimg = loadAnimation("images/cat1.png");
    cani = loadAnimation("images/cat2.png", "images/cat3.png");
    clas = loadAnimation("images/cat4.png");
}

function setup() {
    createCanvas(1000, 800);
    //create tom and jerry sprites here
    mouse = createSprite(200, 500, 50, 50);
    mouse.addAnimation("mousing", mimg);
    mouse.scale = 0.2;
    cat = createSprite(700, 500, 50, 50);
    cat.addAnimation("catting", cimg);
    cat.scale = 0.2;
    cat.setCollider("circle", 0, 0, 670);
    // cat.debug = true;
    mouse.setCollider("circle", 0, 0, 440);
    // mouse.debug = true;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if (keyCode === RIGHT_ARROW) {
        cat.velocityX = -5;
    }
    if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {

        // cat.x = cat.x + 50;
        cat.velocityX = 0;
        cat.addAnimation("catting", clas);
        cat.changeAnimation("catting");
        mouse.addAnimation("mousing", mlas);
        mouse.changeAnimation("mousing");
    }
    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here
    if (keyCode === RIGHT_ARROW) {
        mouse.addAnimation("mousing", mani);
        mouse.changeAnimation("mousing");
        mouse.frameDelay = 25;
        cat.addAnimation("catting", cani);
        cat.changeAnimation("catting");

        cat.frameDelay = 25;

    }

}