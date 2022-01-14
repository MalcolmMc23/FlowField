class FlowField {

  constructor() {
    cellSize = 40;
    cols = width / cellSize;
    rows = height / cellSize;
    
    for(let a = 0; a < cols; a++) {
      arr[a] = []
      for(let b = 0; b < rows; b++) {
        arr[a][b] = new Cell(a, b);
      }
    }
  }


  render() {

    for(let a = 0; a < arr.length; a++) {
      for(let b = 0; b < arr[0].length; b++) {
        arr[a][b].run()
      }
    }
  }
}//++++++++++++++++++++++++++++++++++++++  ff class
