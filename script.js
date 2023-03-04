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
        e.target.classList.add("filled");
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

sizeBtn.addEventListener("click", () => {
  clearChildren(container);
  let squareCount = prompt("Squares per row:");
  if (squareCount < 2 || squareCount > 100)
    squareCount = prompt("Squares per row:");
  let newSize = 800 / squareCount;
  drawGrid(squareCount, newSize);
});

drawGrid(16, 50);
