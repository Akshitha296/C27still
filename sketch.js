const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var b1

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	b1 = new Bob(100, 400, 40);
	b2 = new Bob(180, 400, 40);
	b3 = new Bob(260, 400, 40);
	b4 = new Bob(340, 400, 40);
	b5 = new Bob(420, 400, 40);
	b6 = new Bob(500, 400, 40);

	g = new ground(300, 100, 480, 30)

	rope1 = new cLog(b1.body, g.body, -40*2, 0)

	Engine.run(engine);
}


function draw() {
  background(170, 178, 173);
  g.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
}



