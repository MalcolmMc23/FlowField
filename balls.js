class Balls{
    constructor( x, y) {
        this.loc = createVector( x, y);
        this.vel = createVector( random(-.1, .1), random(-.1, .1))
        this.diam = 10
        // this.angle = createVector(random(-.02, .02), random(-.2, .2))
    }

    run() {
        this.render();
        this.update();
        // this.checkEdges()
    }

    render() {
        fill(200, 0, 0);
        ellipse(this.loc.x, this.loc.y, this.diam);
    }
    update() {
        // this.angle = createVector(random(-2, 2), random(-2, 2))
        this.loc.add(this.vel);
        this.vel.add(this.angle);
    }

    checkEdges() {
    if (this.loc.x < 0) this.vel.x = -this.vel.x;
    if (this.loc.x > width) this.vel.x = -this.vel.x;
    if (this.loc.y < 0) this.vel.y = -this.vel.y;
    if (this.loc.y > height) this.vel.y = -this.vel.y;
    }
}
