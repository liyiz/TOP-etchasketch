const gridX = 16;
const gridY = 16;

document.addEventListener('DOMContentLoaded',() => {
    // handle DOMContentLoaded event
    createGrid();
});

function createGrid() {
    // create rows
    // create columns
    const container = document.querySelector('#container');

    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('cell');
            container.appendChild(gridCell);
        }
    }


}