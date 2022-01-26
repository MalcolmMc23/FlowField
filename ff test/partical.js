class Partical {
        constructor() {
            this.loc = createVector(random(width), random(height));
            this.vel = p5.Vector.random2D()
            this.acc = createVector(0, 0)
            this.diam = 1
        }
    
        run() {
            this.render();
            this.checkEdges()
        }
    
        render() {
            fill(20, 20, 20);
            ellipse(this.loc.x, this.loc.y, this.diam);
        }
        update() {
            this.loc.add(this.vel);
            this.vel.add(this.acc);
        }
    
        checkEdges() {
        if (this.loc.x < 0) this.loc.x = width;
        if (this.loc.x > width) this.loc.x = 0;
        if (this.loc.y < 0) this.loc.y = height;
        if (this.loc.y > height) this.loc.y = 0; 
        }
}