// Malcolm McDonald
// 01 04 2022
// flowField

let arr = [];
let cell;
let cellSize;
let cols, rows;
let ff;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.position((windowWidth-width)/2, 30);
  ff = new FlowField()
  ff.render();
  // loadCell();
}

function draw() {
  // background(20);
  // ff.render();
}

function loadCell() {
  for(let i = 0; i < arr.length; i++ ) {
    // arr[i].run()
  }
}


