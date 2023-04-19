// Declares constants and variables for HTML elements
const CONTAINER = document.querySelector(".grid-container")
const resetButton = document.getElementById("reset-button");
var slider = document.getElementById("myRange");
var squaresNumber = document.querySelector(".squaresnumber")



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
    addListeners()
    squaresNumber.textContent = `Squares on Grid: \n ${slider.value} x ${slider.value}`
}

// Resets the grid by removing all grid squares
function resetGrid(){
    const gridSquares = document.querySelectorAll(".gridSquare");
    for(let i = 0; i < gridSquares.length; i++){
        gridSquares[i].remove();
    }
}

// Adds listeners
function addListeners() {
    let mouseDown = false; // Variable to keep track of whether the mouse button is down
    const gridSquares = document.querySelectorAll(".gridSquare");
    for (let i = 0; i < gridSquares.length; i++) {
        // When mouse hovers over
        gridSquares[i].addEventListener("mouseenter", function () {
            if (mouseDown) {
                gridSquares[i].classList.add("active");
                gridSquares[i].classList.add("coloured");
            } else {
                gridSquares[i].classList.add("active");
            }
    });
        // When mouse leaves square
        gridSquares[i].addEventListener("mouseleave", function () {
            gridSquares[i].classList.remove("active");
        });

        // When mouse is clicked
        gridSquares[i].addEventListener("mousedown", function () {
            mouseDown = true; // Set mouseDown to true when mouse button is held down
            gridSquares[i].classList.toggle("coloured");
        });
    }
        // Add event listener to document for when mouse button is released
        document.addEventListener("mouseup", function () {
            mouseDown = false; // Set mouseDown to false when mouse button is released
        });
        // Adds a listener to the slider that changes the size of the grid
        slider.oninput = function () {
            document.querySelector(".squaresnumber").value = this.value;
            resetGrid();
            makeGrid(slider.value);
        };
        // Adds a listener to reset the grid on click
        resetButton.addEventListener("click", function () {
            resetGrid();
            makeGrid(slider.value);
        })
}





// Makes default grid of 4x4
makeGrid(4)
