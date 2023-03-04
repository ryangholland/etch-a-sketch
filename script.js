const container = document.getElementById("grid-container");
const sizeBtn = document.getElementById("size-btn");

function drawGrid(size) {
  for (let i = 0; i < 16; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < 16; j++) {
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

sizeBtn.addEventListener("click", () => {
  let squareCount = prompt("Squares per row:");
});

drawGrid(50);
