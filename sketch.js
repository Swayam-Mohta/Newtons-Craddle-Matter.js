var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse;
MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var metalBall;
var metalBall1;
var metalBall2;
var metalBall3;
var metalBall4;
var metalBall5;

var WoodenPart;
var WoodenPart1;
var WoodenPart2;
var WoodenPart3;
var WoodenPart4;
var WoodenPart5;

var mConstraint;

function setup() {
  var canvas = createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  metalBall = new Mb(100, 100, 20);
  metalBall1 = new Mb(150, 100, 20);
  metalBall2 = new Mb(200, 100, 20);
  metalBall3 = new Mb(250, 100, 20);
  metalBall4 = new Mb(300, 100, 20);
  metalBall5 = new Mb(350, 100, 20);

  WoodenPart = new Wp(100, 10, 20, 10);
  WoodenPart1 = new Wp(150, 10, 20, 10);
  WoodenPart2 = new Wp(200, 10, 20, 10);
  WoodenPart3 = new Wp(250, 10, 20, 10);
  WoodenPart4 = new Wp(300, 10, 20, 10);
  WoodenPart5 = new Wp(350, 10, 20, 10);

  var options = {
    bodyA: metalBall.body,
    bodyB: WoodenPart.body,

    lenght: 10,
    stiffness: 1,
  };

  var constraint = Constraint.create(options);
  World.add(world, constraint);

  var options1 = {
    bodyA: metalBall1.body,
    bodyB: WoodenPart1.body,

    lenght: 10,
    stiffness: 0,
  };

  var constraint1 = Constraint.create(options1);
  World.add(world, constraint1);

  var options2 = {
    bodyA: metalBall2.body,
    bodyB: WoodenPart2.body,

    lenght: 10,
    stiffness: 0,
  };

  var constraint2 = Constraint.create(options2);
  World.add(world, constraint2);

  var options3 = {
    bodyA: metalBall3.body,
    bodyB: WoodenPart3.body,

    lenght: 10,
    stiffness: 0,
  };

  var constraint3 = Constraint.create(options3);
  World.add(world, constraint3);

  var options4 = {
    bodyA: metalBall4.body,
    bodyB: WoodenPart4.body,

    lenght: 10,
    stiffness: 0,
  };

  var constraint4 = Constraint.create(options4);
  World.add(world, constraint4);

  var options5 = {
    bodyA: metalBall5.body,
    bodyB: WoodenPart5.body,

    lenght: 10,
    stiffness: 0,
  };

  var constraint5 = Constraint.create(options5);
  World.add(world, constraint5);

  var canavsMouse = Mouse.create(canvas.elt);
  canavsMouse.pixelRatio = pixelDensity();
  var optionsm = {
    mouse: canavsMouse,
  };
  mConstraint = MouseConstraint.create(engine, optionsm);
  World.add(world, mConstraint);
}

function draw() {
  background(50);
  metalBall.show();
  metalBall1.show();
  metalBall2.show();
  metalBall3.show();
  metalBall4.show();
  metalBall5.show();

  WoodenPart.show();
  WoodenPart1.show();
  WoodenPart2.show();
  WoodenPart3.show();
  WoodenPart4.show();
  WoodenPart5.show();

  line(
    metalBall.body.position.x,
    metalBall.body.position.y,
    WoodenPart.body.position.x,
    WoodenPart.body.position.y
  );

  line(
    metalBall1.body.position.x,
    metalBall1.body.position.y,
    WoodenPart1.body.position.x,
    WoodenPart1.body.position.y
  );

  line(
    metalBall2.body.position.x,
    metalBall2.body.position.y,
    WoodenPart2.body.position.x,
    WoodenPart2.body.position.y
  );

  line(
    metalBall3.body.position.x,
    metalBall3.body.position.y,
    WoodenPart3.body.position.x,
    WoodenPart3.body.position.y
  );

  line(
    metalBall4.body.position.x,
    metalBall4.body.position.y,
    WoodenPart4.body.position.x,
    WoodenPart4.body.position.y
  );

  line(
    metalBall5.body.position.x,
    metalBall5.body.position.y,
    WoodenPart5.body.position.x,
    WoodenPart5.body.position.y
  );
}
