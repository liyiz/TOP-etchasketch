const defaultSize = 16;
const gridMaxSize = 100;


document.addEventListener('DOMContentLoaded',() => {
    // handle DOMContentLoaded event
    createGrid(defaultSize, defaultSize);

    const resetBtn = document.querySelector('#reset');

    resetBtn.addEventListener('click', () => {

        let gridSize = prompt('Enter size of grid', defaultSize);

        while (isNaN(gridSize) || gridSize > gridMaxSize) {
            alert('You did not enter a number or you tried a number larger than 100, try again');
            gridSize = prompt('Enter size of grid', defaultSize);
        } 
        
        createGrid(gridSize);
    })
});


function createGrid(gridSize) {

    const container = document.querySelector('#container');
    
    // clears previous grid
    container.innerHTML = '';

    for (let i = 0; i < gridSize; i++) {

        for (let j = 0; j < gridSize; j++) {

            const gridCell = document.createElement('div');
            css( gridCell, { width: `calc(100%/${gridSize})`, height: `calc(100%/${gridSize})` });
            
            gridCell.classList.add('cell', 'fill');
            gridCell.classList.toggle('fill'); // initially flip off the fill

            gridCell.addEventListener('mouseenter', () => { 
                gridCell.classList.add('fill'); 
            });

            container.appendChild(gridCell);

        }

    }

}


// css helper function, to add inline css to js generated elements
function css(e, styles) {
    for (const property in styles)
        e.style[property] = styles[property];
}