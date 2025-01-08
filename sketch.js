let sz = 20;
let binnum = "111101101";
function setup() {
  createCanvas(900, 900);
  background(127);
  rectMode(CENTER);
  let dep = 5;
  sz = width / 3 ** dep;
  print(sz);
  let d = sz;
  drawShape(width / 2, height / 2, d, dep);
  print(binnum[4]);
  // take care of the center square if it is zero
  if (binnum[4] == "0") {
    fill(127);
    noStroke();
    rect(width / 2, height / 2, sz, sz);
  }
}

function drawShape(x, y, d, depth) {
  // d is disance to place the shape/ sz

  fill(0);
  noStroke();

  rect(x, y, sz - 1, sz - 1);

  //print(d)
  if (depth > 0 && d < width) {
    let newD = d * 3; // need to the steps
    if (binnum[0] == "1") {
      drawShape(x - d, y - d, newD, depth - 1); // top left
    }
    if (binnum[1] == "1") {
      drawShape(x, y - d, newD, depth - 1); // top middle
    }
    if (binnum[2] == "1") {
      drawShape(x + d, y - d, newD, depth - 1); // top right
    }
    if (binnum[3] == "1") {
      drawShape(x - d, y, newD, depth - 1); // left
    }
    if (binnum[4] == "1") {
      drawShape(x, y, newD, depth - 1); //cente
    }
    if (binnum[5] == "1") {
      drawShape(x + d, y, newD, depth - 1); // right
    }
    if (binnum[6] == "1") {
      drawShape(x - d, y + d, newD, depth - 1); // bottom left
    }

    if (binnum[7] == "1") {
      drawShape(x, y + d, newD, depth - 1); // bottom middle
    }

    if (binnum[8] == "1") {
      drawShape(x + d, y + d, newD, depth - 1); // bottom right
    }
  }

  //rect(x,y,sz,sz)
}
