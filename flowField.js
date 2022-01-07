class FlowField {

 constructor() {
  //  cellSize = 20;
  //    cols = width / cellSize;
  //    rows = height / cellSize;
  //    let x = floor(random(cols)) * cellSize;
  //    let y = floor(random(rows)) * cellSize;
  //    let loc = createVector(width/2, height/2);

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
          ellipse(this.center.x, this.center.y, 10);
         arr[a][b] = new Cell(x, y);


      }
     }
    }
  }