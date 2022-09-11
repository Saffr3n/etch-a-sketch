const btn = document.querySelector('button');
const container = document.querySelector('.container');

btn.addEventListener('click', () => createGrid(select()));

function createGrid (squares) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${squares}, calc(100% / ${squares}))`;

    for (let i = 0; i < squares * squares; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
    }

    const items = document.querySelectorAll('.item');

    items.forEach(item => item.style.boxShadow = '1px 1px gray inset');
    
    for (let i = squares - 1; i < squares * squares; i += squares)
        items[i].style.boxShadow = '1px 1px gray inset, -1px 0 gray inset';

    for (let i = squares * squares - 1; i >= squares * (squares - 1); i--)
        items[i].style.boxShadow = '1px 1px gray inset, 0 -1px gray inset';

    items[squares * squares - 1].style.boxShadow = '1px 1px gray inset, -1px -1px gray inset';

    items.forEach(item => item.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'black';
    }));
}

function select() {
    let selection = parseInt(prompt('Choose a desired amount of squares per side (1-100)'));

    if (!selection || selection < 1 || selection > 100)
        selection = select();

    return selection;
}

createGrid(16);
