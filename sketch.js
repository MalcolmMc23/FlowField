// Malcolm McDonald
// 01 04 2022
// cell project

let arr = [];
let cell;
let row;
let col;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.position((windowWidth-width)/2, 30);
  loadCell();
  // runCell();
  // console.log(arr);
  console.log(arr[2][5]);
}

function draw() {
  // background(20);
}


function loadCell() {
  for(let i = 0; i < 20; i++) {
     arr[i] = [];
    //  arr[i] = new Cell( 10, 10);
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
        arr[i][j] = new Cell( i, j);
        arr[i][j].run()
        // cell[i][j].run()
    }
  }
  }
}

function runCell(){
  for(let h = 0; h < 20; h++) {
    // cell[h].run()
  }
}