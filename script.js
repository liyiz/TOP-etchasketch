document.addEventListener('DOMContentLoaded',() => {
    // handle DOMContentLoaded event
    createGrid();
});

function createGrid() {
    // create rows
    // create columns
    const container = document.querySelector('#container');


    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    container.appendChild(gridCell);

}