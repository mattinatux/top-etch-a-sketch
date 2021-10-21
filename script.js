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
        squareDiv.classList.add('flex-horizontal');
        row.appendChild(squareDiv);
    }
});

// Select all of these new square divs
const allSquares = document.querySelectorAll('.squareDiv');

// Entering the forEach loop on ALL SQUARES (for event listeners)
allSquares.forEach( (square) => {
    console.log("square.addEventListener()")
});