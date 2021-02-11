const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage,superheroImage;
var engine,world;
var ground,hero,fly;

function preload() {
//preload the images here
backgroundImage = loadImage("GamingBackground.png");
superheroImage = loadImage("Superhero-01.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(300,600,600,10);
  hero = new Hero(100,300,50);
  fly = new Fly(hero.body,{x:100,y:100});

}

function draw() {
  background(backgroundImage);

  ground.display();
  hero.display();
  fly.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

