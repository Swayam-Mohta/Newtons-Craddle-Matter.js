class Mb {
  constructor(x, y, r, options) {
    var options = {
      density: 1,
    };
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);

    this.show = function () {
      ellipse(this.body.position.x, this.body.position.y, r * 2);
      fill(0);
      stroke(255);
    };
  }
}
