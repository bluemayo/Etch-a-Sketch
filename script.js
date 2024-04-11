const BOX = 4;
const container = document.querySelector(".container");


for (let i = 0; i < BOX; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
}