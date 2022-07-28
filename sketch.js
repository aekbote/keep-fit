
 var play,about,info
 var mangoImg,mango
 var pizzaImg,pizza
 var waitimg

 function preload(){
    
    mangoImg = loadImage("/assets/mango.png");
    pizzaImg = loadImage("/assets/pizza.png");
    waitimg=loadImage("/assets/splashScreenOne.png")
    
}

function setup(){
    createCanvas(windowWidth,windowHeight)
  
    // all the buttons
play= createButton("Play")
play.position(50,100)

about= createButton("About")
about.position(50,150)

play= createButton("Info")
play.position(50,200)


// healthy food sprites
/*mango= createSprite(100,100)
mango.addImage(mangoImg)

pizza= createSprite(100,200)
pizza.addImage(pizzaImg)*/


}

function draw(){
background(waitimg)
//text("Keep Fit",width/2,height/2)


drawSprites()
}