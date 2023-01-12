// Declares constants for HTML elements
const CONTAINER = document.querySelector(".grid-container")

// Generates the grid
function makeGrid(size){
    let count = 0
    // Calculates the total grid size
    let totalGridSize = size * size;
    // Generates the grid of divs
    while(count < totalGridSize){
        gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        // Sets the size of the grid square depending on the size of the grid
        gridSquare.style.height = `${600/size}`
        gridSquare.style.width = `${600/size}`
        // Sets the number of rows and columns to format as a square
        CONTAINER.style.gridTemplateColumns = `repeat(${size}, auto)`;
        CONTAINER.style.gridTemplateRows = `repeat(${size}, auto)`;
        CONTAINER.appendChild(gridSquare);
        // Increases the count
        count ++
    }
}


makeGrid(4)