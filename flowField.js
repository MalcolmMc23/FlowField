class FlowField {

 constructor() {
  //  cellSize = 20;
  //    cols = width / cellSize;
  //    rows = height / cellSize;
  //    let x = floor(random(cols)) * cellSize;
  //    let y = floor(random(rows)) * cellSize;
  //    let loc = createVector(width/2, height/2);
  this.angle = random(TWO_PI);

    }
  

render() {
     cellSize = 40;
     cols = width / cellSize;
     rows = height / cellSize;
     for(let a = 0; a < cols; a++) {
       arr[a] = []
        for(let b = 0; b < rows; b++) {
          let x = a * cellSize;
          let y = b * cellSize;
          fill(0,200,0)
          rect(x, y, cellSize)
          this.center = createVector(x+20, y+20);
          this.point = createVector(this.center.x+random(x), this.center.y+ random(y))
          let x1 = this.center.x;
          let y1 = this.center.y;
          let x2 = x1+cos(this.angle)*cellSize/2// hor dist from center
          let y2 = y1+sin(this.angle)*cellSize/2// vert dist from center

          fill(255,0,0)
          line( x1, y1, x2, y2);
         arr[a][b] = new Cell(x, y);


      }
     }
    }
  }