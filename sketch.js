

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

 

function preload(){
    bgImg = loadImage("sprites/background.jpg");
    ship1Img = loadImage("sprites/ship1.png");
    ship2Img = loadImage("sprites/ship2.png");
    ship3Img = loadImage("Sprites/ship3.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    start = createButton("START");
    start.position(windowWidth/2, windowHeight/2);

  
    
    ship1 = createSprite(windowWidth/4, windowHeight/2, 10,10);
    ship1.addImage(ship1Img);
    ship1.scale = 0.2
    ship1.visible = false;

    ship2 = createSprite(windowWidth/2 + 100, windowHeight/2, 10,10);
    ship2.addImage(ship2Img);
    ship2.scale = 0.2
    ship2.visible = false;

    ship3 = createSprite(windowWidth/8 +500, windowHeight/2, 10,10);
    ship3.addImage(ship3Img);
    ship3.scale = 0.2
    ship3.visible = false;

}

function draw(){
    background(bgImg);

  start.mousePressed(
      ()=>{
          ship1.visible = true;
          ship2.visible = true;
          ship3.visible = true;

         choose = createElement("h1")
          choose.html("choose your wanderer");
          choose.position(200,100);
      }
      
  )
  choose.hide();

    drawSprites();
}