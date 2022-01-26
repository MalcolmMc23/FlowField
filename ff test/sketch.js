// Malcolm McDonald
// 1/25/22
//ff test

var inc = 0.1;
var start = 0;
var cellSize = 20
var cols, rows;
var zoff = 0;

var fr;

var particals = [];

var flowField = []

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.position((windowWidth-width)/2, 30);

  fr = createP('')
  cols = floor(width/cellSize);
  rows = floor(height/cellSize);

  flowField = new Array()

  for(var i = 0; i < 10; i++) {
  particals[i] = new Partical();
  }
}

function draw() {
  background(200);

  var yoff = 0;
  for(var x = 0; x < rows; x++) {
    var xoff = 0;
    for(var y = 0; y < cols; y++) {
      var r = noise(xoff, yoff, zoff) * TWO_PI
      var v = p5.Vector.fromAngle(r);
      xoff += inc;
      stroke(0, 100);
      push();
      translate(x * cellSize, y * cellSize);
      rotate(v.heading())
      line(0, 0, cellSize, 0)

      pop();
      // fill(r);
      // rect(x * cellSize, y * cellSize, cellSize);
    }
    yoff += inc;
    // zoff += 0.001

  for(var i = 0; i < particals.length; i++) {
    particals[i].run();
    particals[i].update();
    }

    fr.html(floor(frameRate()));
  }
}
