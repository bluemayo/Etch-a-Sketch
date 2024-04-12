function renderGrid() {
    let boxes;
    do {
        boxes = prompt("Enter the Dimensions: ");
    } while (Number(boxes) == NaN)
    const box = Number(boxes);
    const length = Math.round(800 / box) - 2; //-2 for border
    
    for (let i = 0; i < box; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);
        for (let j = 0; j < box; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.setAttribute("style", `min-height: ${length}px; min-width: ${length}px;`)
            column.appendChild(row);
        }
    }
}

const container = document.querySelector(".container");

// Adding Event listener to Start Button
const startButton = document.querySelector("#start");
startButton.addEventListener("click", renderGrid);