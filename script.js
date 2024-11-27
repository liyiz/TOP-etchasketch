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

    // set grid size
    // set cell size

    // generate cells

    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('cell', 'fill');
            gridCell.classList.toggle('fill'); // initially flip off the fill
            gridCell.addEventListener('mouseenter', () => { 
                gridCell.classList.toggle('fill'); 
            });
            container.appendChild(gridCell);
        }
    }


}