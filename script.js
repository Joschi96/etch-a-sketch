let size = 16; //Number of squares in one row/column
let containerWidth = 400;
let boxSize = (containerWidth/size); // Size of each square in pixels

document.body.onload = addGrid(size);

let container = document.querySelector(".container");
container.style.maxWidth = containerWidth+'px'; // Dynamically limiting canvas width to size*boxSize
container.style.minWidth = containerWidth+'px';

let btn = document.querySelector("button");

// Function for adding the initial 16x16 grid
function addGrid(length){
    for (let i = 0; i < length*length; i++) {
        let element = document.createElement('div');
        element.classList.add("gridElement");
        element.style.display = "flex";
        element.style.width = boxSize+'px';
        element.style.height = boxSize+'px';
        document.querySelector('.container').appendChild(element);
        
        // Adding "hover" effect directly after creating each element
        element.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "red";
        });
    }
}

btn.addEventListener("click", function changeGrid() {
    let input = prompt("Enter the number of pixels per side!\nMin 1, Max 100");
    size = input;
    boxSize = (containerWidth/size);
    let oldGrid = document.querySelectorAll('.gridElement');
    oldGrid.forEach(element => {
        element.remove();
    });
    addGrid(size);
});
