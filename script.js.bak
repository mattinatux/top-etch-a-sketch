let numDivsPerAxis = 16;

// Select the grid container
const gridContainer = document.querySelector('#gridContainer');

// And create the needed Row nodes
for (i = 0; i < numDivsPerAxis; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowDiv');
    gridContainer.appendChild(rowContainer);
}

// Select the new Row nodes we just created
const allRows = document.querySelectorAll('.rowDiv');

// Entering the forEach loop on ALL ROWS
allRows.forEach( (row) => {
    // Add square divs to each
    for (i = 0; i < numDivsPerAxis; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        row.appendChild(squareDiv);
    }
});

// Select all of these new square divs
const allSquares = document.querySelectorAll('.squareDiv');

// Entering the forEach loop on ALL SQUARES (for event listeners)
allSquares.forEach( (square) => {
    square.addEventListener('mouseenter', etched);
});

// function used to etch squares on mouseenter
function etched (e) {
    e.target.classList.add('etched');
}

// select the reset button on the page
const resetButton = document.getElementById('resetButton');

// add event listener for reset button click
resetButton.addEventListener('click', resetEtch);

// reset function to run when reset button is clicked
function resetEtch () {
    allSquares.forEach( (square) => {
        square.classList.remove('etched');
    });
}