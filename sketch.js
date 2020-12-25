const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;
var pendulum1,pendulum2,pendulum3,pendulum4;
var chain1,chain2,chain3,chain4;

function setup() {
  canvas = createCanvas(1000,500)
  engine = Engine.create()
  world = engine.world;


 pendulum1 = new Pendulum(250,200,"white")
 chain1 = new Sling(pendulum1.body,{x:250,y:100})
 pendulum2 = new Pendulum(290,200,"white")
 chain2 = new Sling(pendulum2.body,{x:290,y:100})
 pendulum3 = new Pendulum(340,200,"white")
 chain3 = new Sling(pendulum3.body,{x:340,y:100})
 pendulum4 = new Pendulum(390,200,"white")
 chain4 = new Sling(pendulum4.body,{x:390,y:100})
 pendulum5 = new Pendulum(440,200,"white")
 chain5 = new Sling(pendulum5.body,{x:440,y:100})





  Engine.run(engine);
}

function draw() {
  background("black");
  Engine.update(engine)
  
  pendulum1.display()
  chain1.display()
  pendulum2.display()
  chain2.display()
  pendulum3.display()
  chain3.display()
  pendulum4.display()
  chain4.display()
  pendulum5.display()
  chain5.display()




}


function mouseDragged(){

Matter.Body.setPosition(pendulum1.body, {x:mouseX ,y:mouseY})

}



