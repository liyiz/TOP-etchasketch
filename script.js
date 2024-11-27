const defaultSize = 16;

document.addEventListener('DOMContentLoaded',() => {
    // handle DOMContentLoaded event
    createGrid(defaultSize, defaultSize);

    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', () => {
        let gridX = prompt('Enter size of x axis', defaultSize);
        while (isNaN(gridX) || gridX > 512) {
            alert('You did not enter a number or you tried a number larger than 512, try again');
            gridX = prompt('Enter size of x axis', defaultSize);
        }
        let gridY = prompt('Enter size of y axis ', defaultSize);
        while (isNaN(gridY) || gridY > 512) {
            alert('You did not enter a number or you tried a number larger than 512, try again');
            gridY = prompt('Enter size of y axis', defaultSize);
        }
        
        createGrid(gridX, gridY);
    })
});

function createGrid(gridX, gridY) {
    // create rows
    // create columns
    const container = document.querySelector('#container');
    
    // reset previous grid
    container.innerHTML = '';
    // set grid size
    // set cell size

    // generate cells

    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            const gridCell = document.createElement('div');
            css( gridCell, { width: `calc(100%/${gridX})`, height: `calc(100%/${gridY})` });
            gridCell.classList.add('cell', 'fill');
            gridCell.classList.toggle('fill'); // initially flip off the fill
            gridCell.addEventListener('mouseenter', () => { 
                gridCell.classList.add('fill'); 
            });
            container.appendChild(gridCell);
        }
    }

}


function css(e, styles) {
    for (const property in styles)
        e.style[property] = styles[property];
}