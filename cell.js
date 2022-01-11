class Cell {
    constructor(x, y, angle) {
        // this.loc = createVector( x, y);
         this.x = x;
         this.y = y;
         this.angle = angle;
    }

    run() {
        this.render()
    }

    render() {
        cellSize = 40;
        cols = width / cellSize;
        rows = height / cellSize;
         this.x = this.x * cellSize;
         this.y = this.y * cellSize;
         //console.log(this.x)
        fill(0,200,0)
        rect(this.x, this.y, cellSize)
        this.center = createVector(cellSize/2, cellSize/2);
        this.point = createVector(this.center.x+random(this.x), this.center.y+ random(this.y))
        let x1 = this.center.x;
        let y1 = this.center.y;
        let x2 = x1+cos(this.angle)*cellSize/2// hor dist from center
        let y2 = y1+sin(this.angle)*cellSize/2// vert dist from center

        fill(255,0,0)
        line( x1, y1, x2, y2);
    }

}
