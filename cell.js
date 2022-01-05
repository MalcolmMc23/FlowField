class Cell {
    constructor(x, y) {
        this.loc = createVector( x, y);
        
    }

    run() {
        this.render()
    }

    render() {
        fill(0,255,0)
        rect(this.loc.x, this.loc.y, 100);
    }

}