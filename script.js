document.body.onload = addGrid;

let size = 16; //Number of squares in one row/column
let boxSize = 10; // Size of each square in pixels

let container = document.querySelector(".container");
container.style.maxWidth = size * boxSize+'px'; // Dynamically limiting canvas width to size*boxSize

// Function for adding the initial 16x16 grid
function addGrid(){
    for (let i = 0; i < size*size; i++) {
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

