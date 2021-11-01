// moved code for creating grid into a function so we can reset
// with a new grid count
function createGrid (size) {
    let numDivsPerAxis = size || 16;

    // Select the grid container
    const gridContainer = document.querySelector('#gridContainer');

    gridContainer.innerHTML = "";

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
}

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
    // Prompt the user for how big they want this new grid to be
    // defaults to 16 in createGrid function if no input provided
    let userEntry = Number(prompt(`I'll create a new square grid for you.
How many squares wide and tall would you like it to be? (Max 100)`));

    // numerical data validation
    while ( (userEntry < 1) || (userEntry > 100) ) {
        alert(`Hey! You entered ${userEntry}. That is
either not a negative number, or greater than 100!`);

    userEntry = prompt('Try again! Pick a size, 1-100.');
    }

    if (!Number(userEntry) || (userEntry == null)) {
        alert(`I'll default you to 16x16 since you
entered non-numeric characters...`)

        userEntry = 16;
    }

    createGrid(userEntry);
}

createGrid()