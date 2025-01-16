let sz = 20;
let binnum = "111101101";
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
  mySelect.position(10, 140);
  mySelect.style("font-size", "60px"); // Larger font size
  mySelect.style("width", "120px"); // Wider dropdown
  mySelect.style("height", "120px"); // Taller dropdown
  mySelect.style("padding", "20px"); // Add padding
  mySelect.style("border", "2px solid black"); // Add a border
  mySelect.style("outline", "2px solid blue"); // Add an outline
  mySelect.style("background-color", "#f0f0f0"); // Set background color
  mySelect.style("border-radius", "10px"); // Add rounded corners
  mySelect.style("box-shadow", "5px 5px 15px rgba(0, 0, 0, 0.2)"); // Add a shadow effect

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
  drawShape(width / 2, height / 2, d, dep);
  print(binnum[4]);
  // take care of the center square if it is zero
  if (binnum[4] == "0") {
    fill(255);
    noStroke();
    rect(width / 2, height / 2, sz, sz);
  }
}

function drawShape(x, y, d, depth) {
  // d is disance to place the shape/ sz

  fill(0);
  noStroke();

  //rect(x, y, sz - 1, sz - 1);

  //print(d)
  if (depth >= 0 && d < width) {
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

  rect(x, y, sz - 1, sz - 1);
}
