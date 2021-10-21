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

// And add divs to each
allRows.forEach( (row) => {
    for (i = 0; i < numDivsPerAxis; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        squareDiv.classList.add('flex-horizontal');
        row.appendChild(squareDiv);
    }
})