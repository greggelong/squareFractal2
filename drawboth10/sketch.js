let sz = 20;
let binnum = "101010101";
let cnv;
function setup() {
  cnv = createCanvas(900, 900);
  pixelDensity(1);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  background(127);
  rectMode(CENTER);
  mySelect = createSelect();
  mySelect.position(0, 100);

  // Add color options.
  mySelect.option(1);
  mySelect.option(2);
  mySelect.option(3);
  mySelect.option(4);
  mySelect.option(5);
  mySelect.changed(doit);
  doit();
  /* let dep = 5;
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
  } */
}

function doit() {
  background(255);
  let dep = mySelect.value();
  sz = width / 3 ** dep;
  print(sz);
  let d = sz;
  drawShape(width / 2, height / 2, d, dep, 0);
  print(binnum[4]);
  // take care of the center square if it is zero
  if (binnum[4] == "0") {
    fill(255);
    noStroke();
    rect(width / 2, height / 2, sz, sz);
  }
}

function drawShape(x, y, d, depth, clr = 0) {
  // d is disance to place the shape/ sz
  if (clr == 1) {
    fill(0);
  } else {
    fill(255);
  }
  noStroke();

  rect(x, y, sz - 1, sz - 1);

  //print(d)
  if (depth > 0 && d < width) {
    let newD = d * 3; // need to the steps
    if (binnum[0] == "1") {
      drawShape(x - d, y - d, newD, depth - 1, 1); // top left
    } else {
      drawShape(x - d, y - d, newD, depth - 1, 0); // top left
    }
    if (binnum[1] == "1") {
      drawShape(x, y - d, newD, depth - 1, 1); // top middle
    } else {
      drawShape(x, y - d, newD, depth - 1, 0); // top middle
    }
    if (binnum[2] == "1") {
      drawShape(x + d, y - d, newD, depth - 1, 1); // top right
    } else {
      drawShape(x + d, y - d, newD, depth - 1, 0); // top right
    }
    if (binnum[3] == "1") {
      drawShape(x - d, y, newD, depth - 1, 1); // left
    } else {
      drawShape(x - d, y, newD, depth - 1, 0); // left
    }
    if (binnum[4] == "1") {
      drawShape(x, y, newD, depth - 1, 1); //cente
    } else {
      drawShape(x, y, newD, depth - 1, 0); //cente
    }
    if (binnum[5] == "1") {
      drawShape(x + d, y, newD, depth - 1, 1); // right
    } else {
      drawShape(x + d, y, newD, depth - 1, 0); // right
    }
    if (binnum[6] == "1") {
      drawShape(x - d, y + d, newD, depth - 1, 1); // bottom left
    } else {
      drawShape(x - d, y + d, newD, depth - 1, 0); // bottom left
    }

    if (binnum[7] == "1") {
      drawShape(x, y + d, newD, depth - 1, 1); // bottom middle
    } else {
      drawShape(x, y + d, newD, depth - 1, 0); // bottom middle
    }

    if (binnum[8] == "1") {
      drawShape(x + d, y + d, newD, depth - 1, 1); // bottom right
    } else {
      drawShape(x + d, y + d, newD, depth - 1, 0); // bottom right
    }
  }

  //rect(x,y,sz,sz)
}
