function renderGrid() {
    let box;
    mouseDown = false;
    do {
        box = userPrompt();
        if (box > 100) {
            alert("Dimensions cannot be more than 100!")
        }
    } while (box > 100)

    const length = Math.round(800 / box);
    
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

    rowEventListener();
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function userPrompt() {
    let boxes;
    do {
        boxes = prompt("Enter the Dimensions: ");
    } while (isNaN(parseInt(boxes)))
    
    return parseInt(boxes);
}

function rowEventListener() {
    const rows = document.querySelectorAll(".row");
    
    
    rows.forEach((row) => {
        row.addEventListener("mouseenter", () => {
            if (mouseDown) {
                row.classList.replace("row", "rowed");
            }
        })
    })

    container.addEventListener("mousedown", toggleMouse);
    container.addEventListener("mouseup", toggleMouse);
}

function toggleMouse() {
    if (mouseDown) {
        mouseDown = false;
    } else {
        mouseDown = true;
    }
}

const container = document.querySelector(".container");
let mouseDown = false;

// Adding Event listener to Start Button
const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
    resetGrid();
    renderGrid();
});