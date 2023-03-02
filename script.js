const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
  let newRow = document.createElement("div");
  newRow.classList.add("row");
  for (let j = 0; j < 16; j++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newRow.append(newSquare);
  }
  container.append(newRow);
}
