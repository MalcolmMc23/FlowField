class FlowField {

    constructor() {
     cellSize = 20;
     cols = width / cellSize;
     rows = height / cellSize;
     let x = floor(random(cols)) * cellSize;
     let y = floor(random(rows)) * cellSize;
     let loc = createVector(width/2, height/2);
     this.render()

    }


    render() {
    for(let i = 0; i < 20; i++) {
        arr[i] = [];
       //  arr[i] = new Cell( 10, 10);
     
     for(let i = 0; i < cals.length; i++) {
       for(let j = 0; j < rows.length; j++) {
           arr[i][j] = new Cell(i, j);
        //    arr[i][j].run()
           // cell[i][j].run()
       }
     }
     }
    }

}