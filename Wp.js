class Wp {
  constructor(x, y, w, h, options) {
    var options = {
      isStatic: true,
    };
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);

    this.show = function () {
      push();
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, w, h);
      noFill();
      stroke(255);
      pop();
    };
  }
}
