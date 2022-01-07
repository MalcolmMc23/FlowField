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
         arr[a][b] = new Cell(a, b, this.angle);
         arr[a][b].run()
      }
     }
    }
  }