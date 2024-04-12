const BOX = 10;
const container = document.querySelector(".container");
const length = Math.round(800 / BOX) - 2; //-2 for border


for (let i = 0; i < BOX; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    for (let j = 0; j < BOX; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("style", `min-height: ${length}px; min-width: ${length}px;`)
        column.appendChild(row);
    }
}