const svg = document.getElementById('startgame');
const text = document.getElementById('PLAY');
let clickCount = 0;

function changeColor() {
    console.log('click');
    const colors = ['red', 'blue', 'green' ,'yellow', 'purple', 'pink'];
    text.style.fill = colors[clickCount];
    clickCount++;
    if (clickCount > colors.length) {
        clickCount = 0;
    }
}

svg.addEventListener('click', changeColor);