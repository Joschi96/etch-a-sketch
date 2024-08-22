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
    // Create a DocumentFragment to hold the new grid elements
    let fragment = document.createDocumentFragment();
    let container = document.querySelector('.container');

    for (let i = 0; i < length*length; i++) {
        let element = document.createElement('div');
        element.classList.add("gridElement");
        element.style.display = "flex";
        element.style.width = boxSize+'px';
        element.style.height = boxSize+'px';
        
        // Adding "hover" effect directly after creating each element
        element.addEventListener("mouseenter", function() {  
            let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
            this.style.backgroundColor = randomColor;
        });

        // Append the new element to the fragment
        fragment.appendChild(element);
    }

    // Append the entire fragment to the container at once
    container.appendChild(fragment);
}

btn.addEventListener("click", function changeGrid() {
    let input = prompt("Enter the number of pixels per side!\nMin 1, Max 100");    
    if (input < 1 || input > 100){
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    size = input;
    boxSize = (containerWidth/size);

    // Clear the container
    container.innerHTML = '';

    // Rebuild  the grid with the new size
    addGrid(size);
});
