function renderGrid() {
    let boxes;
    do {
        boxes = prompt("Enter the Dimensions: ");
    } while (isNaN(parseInt(boxes)))
    const box = parseInt(boxes);
    if (box > 100) {
        alert("Dimensions cannot be more than 100!")
    }
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

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const container = document.querySelector(".container");

// Adding Event listener to Start Button
const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
    resetGrid();
    renderGrid();
});