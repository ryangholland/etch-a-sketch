const container = document.getElementById("grid-container");
const sizeBtn = document.getElementById("size-btn");

function drawGrid(squares, size) {
  for (let i = 0; i < squares; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < squares; j++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newSquare.style.height = `${size}px`;
      newSquare.style.width = `${size}px`;
      newSquare.addEventListener("mouseover", (e) => {
        let colorChoice = getColor();
        if (colorChoice === "black") {
          e.target.classList.add("filled");
        }
        if (colorChoice === "random") {
          e.target.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
        }
        if (colorChoice === "shaded") {
          if (!e.target.style.backgroundColor) {
            e.target.style.backgroundColor = "rgb(230, 230, 230)";
            return;
          }

          let currentShade = e.target.style.backgroundColor.slice(4, 7);
          let newShade = Math.floor(currentShade - 25);
          e.target.style.backgroundColor = `rgb(${newShade}, ${newShade}, ${newShade})`;
        }
      });

      newRow.append(newSquare);
    }
    container.append(newRow);
  }
}

function clearChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function getRandomRGB() {
  min = 0;
  max = 255;
  return Math.floor(Math.random() * (max - min) + min);
}

function resizeGrid() {
  clearChildren(container);
  let squareCount = prompt("Squares per row:");
  if (squareCount < 2 || squareCount > 100)
    squareCount = prompt("Squares per row:");
  let newSize = 800 / squareCount;
  drawGrid(squareCount, newSize);
}

function getColor() {
  let blackButton = document.getElementById("black");
  let randomButton = document.getElementById("random");
  let shadedButton = document.getElementById("shaded");
  if (blackButton.checked) return "black";
  if (randomButton.checked) return "random";
  if (shadedButton.checked) return "shaded";
}

sizeBtn.addEventListener("click", resizeGrid);

drawGrid(16, 50);
