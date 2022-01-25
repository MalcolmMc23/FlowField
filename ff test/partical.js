class Partical {
        constructor() {
            this.loc = createVector(random(width), random(height));
            this.vel = createVector(random(-0.1, 0.1), random(-0.1, 0.1))
            this.acc = createVector(random(.0002,.0002), random(.0002,.0002))
            this.diam = 10
        }
    
        run() {
            this.render();
            this.update();
            this.checkEdges()
        }
    
        render() {
            fill(200, 0, 0);
            ellipse(this.loc.x, this.loc.y, this.diam);
        }
        update() {
            this.loc.add(this.vel);
            this.vel.add(this.acc);
        }
    
        checkEdges() {
        if (this.loc.x < 0) this.vel.x = -this.vel.x;
        if (this.loc.x > width) this.vel.x = -this.vel.x;
        if (this.loc.y < 0) this.vel.y = -this.vel.y;
        if (this.loc.y > height) this.vel.y = -this.vel.y;
        }
}