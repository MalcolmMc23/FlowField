// Malcolm McDonald
// 01 04 2022
// flowField

let arr = [];
let cell;
let cellSize;
let cols, rows;
let ff;
let balls = [];
let xoff = 1;
let yoff = 1;


function setup() {
  var cnv = createCanvas(600, 600);
  cnv.position((windowWidth-width)/2, 30);
  ff = new FlowField()
  ff.render();
  // loadBalls(10);
}

function draw() {
  // background(20);
  // ff.render();
  // runBalls();


}

function loadBalls(n) {
for(let i = 0; i < n; i++) {
  balls[i] = new Balls(random(width), random(height))
  }
}

function runBalls() {
  for(let j = 0; j < balls.length; j++) {
    balls[j].run()
  }
}



