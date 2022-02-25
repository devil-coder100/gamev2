var hero, villian
var borders1, borders2, borders3, borders4
var heroImg, villianImg, heroSpecial, heroPunch, heroKick

function preload(){
 villianImg = loadImage("assets/villian.png")

 heroSpecial = loadAnimation("assets/special-1.png","assets/special-2.png","assets/special-3.png","assets/special-4.png","assets/special-5.png","assets/special-6.png")
 heroPunch = loadAnimation("assets/punch.gif")
 heroKick = loadAnimation("assets/kick.gif")
}

function setup() {
  createCanvas(1300, 600);
  
  villian = createSprite(650,300,50,50)
  hero = createSprite(650,220,50,50)
  
  borders1 = createSprite()
}

function draw() {

  background(352);
  if(keyDown("UP_ARROW")||touches.length>0){
    hero.y = hero.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   hero.y = hero.y+30
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
    hero.x = hero.x+30
  }
  if(keyDown("LEFT_ARROW")||touches.length>0){
   hero.x = hero.x-30
  }
  if(keyCode===90){
    hero.addAnimation("hero1",heroSpecial)
   }
   if(keyCode===88){
    hero.x = hero.x-30
   }
   if(keyCode===67){
    hero.x = hero.x-30
   }  

  drawSprites();
}

