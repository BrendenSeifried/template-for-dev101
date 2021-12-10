
import { score, generateThrow } from '../game.js';
const buttons = document.querySelectorAll('.check');
const selectionDisplay = document.getElementById('selection-display');
for (let button of buttons) {
    button.addEventListener('click', () => {
        selectionDisplay.textContent = check.value;
        const player = check.value;
        const computer = generateThrows();
        const result = score(player, computer);
        console.log(player, computer, result);

    });
}



// console.log(generateThrow());
// console.log(generateThrow());
// console.log(generateThrow());



// subscribe to button click
// rock.addEventListener('click', () => {
//     const index = (0);
//     console.log(rock());
    
// });





