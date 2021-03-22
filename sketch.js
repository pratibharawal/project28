
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree, stone,launcherobj;

var ground, m1, m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12;


function preload()
{
	boy=loadImage("images/boy.png");
  tree_img=loadImage("images/tree.png");
}

function setup() {
	createCanvas(1300, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,600,width,20);
	//tree = new Tree(1050,300);
  stone = new Stone(235,420,30);

	m1=new Mango(1100,100,30);
  m2=new Mango(1170,130,30);
	m3=new Mango(1010,140,30);
	m4=new Mango(1000,70,30);
	m5=new Mango(1100,70,30);
	m6=new Mango(1000,230,30);
	m7=new Mango(900,230,25);
	m8=new Mango(1140,150,25);
	m9=new Mango(1100,230,25);
	m10=new Mango(1200,200,25);
	m11=new Mango(1120,50,25);
	m12=new Mango(900,160,25);

  launcherobj = new Launcher(stone.body,{x: 235,y : 420});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  
  image(boy ,200,340,200,300);
  image(tree_img ,800,30,500,600);


  ground.display();
  //tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  m12.display();
  stone.display();
  launcherobj.display();


  detectcollision(stone,m1);
  detectcollision(stone,m2);
  detectcollision(stone,m3);
  detectcollision(stone,m4);
  detectcollision(stone,m5);

  detectcollision(stone,m6);

  detectcollision(stone,m7);

  detectcollision(stone,m8);

  detectcollision(stone,m9);

  detectcollision(stone,m10);

  detectcollision(stone,m11);
  detectcollision(stone,m12);

  
 // drawSprites();
 
}

function mouseDragged()
  {
    Matter.Body.setPosition(stone.body,{ x: mouseX, y: mouseY})
  }

function mouseReleased()
{
  launcherobj.fly();
}



function detectcollision(s1,M1)
{
  s1pos = s1.body.position;
  M1pos = M1.body.position;

  var distance = dist(s1pos.x,s1pos.y , M1pos.x, M1pos.y)
  console.log("Distance ", distance)
  console.log("add radii ", s1.r + M1.r)
 if(distance<= s1.r + M1.r)
 {

  console.log(" if ")
  Matter.Body.setStatic(M1.body, false);
 }

}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
    launcherobj.attach(stone.body);
  }
  }
