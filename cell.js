class Cell {
    constructor(x, y) {
        // this.loc = createVector( x, y);
         this.x = x;
         this.y = y;
         this.angle = random(TWO_PI)
         this.r = noise(xoff, yoff) * TWO_PI
         this.v = p5.Vector.fromAngle(this.r);
         this.inc = 0.01

    }

    run() {
        this.render()
    }

    render() {
        // let xoff = xoff + inc;
        // let yoff = yoff + inc;
        // let r = noise(xoff, yoff) * TWO_PI


        cellSize = 40;
         this.x = this.x * cellSize;
         this.y = this.y * cellSize;
         console.log(this.x)
        fill(0,200,0)
        rect(this.x, this.y, cellSize)
        this.center = createVector(this.x + cellSize/2, this.y + cellSize/2);
        this.point = createVector(this.center.x+random(this.x), this.center.y+ random(this.y))
        let x1 = this.center.x;
        let y1 = this.center.y;
        let x2 = x1+cos(this.angle)*10//*cellSize/2// hor dist from center
        let y2 = y1+sin(this.angle)*10//*cellSize/2// vert dist from center

        // fill(255,0,0)
        // line( x1, y1, x2, y2);
        xoff += this.inc;
        push();
        translate(this.center.x, this.center.y)
        rotate(this.v.heading())
        stroke(10)
        line( 0, 0, cellSize, 0)
        pop();
        yoff += this.inc;
    }

}
