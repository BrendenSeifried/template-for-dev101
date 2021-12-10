


//import { score, generateThrow, rockThrow, paperThrow, scissorsThrow } from './game.js';

import { score, generateThrow } from './game.js';

// console.log(generateThrow());
// console.log(generateThrow());
// console.log(generateThrow());

const buttons = document.querySelectorAll('.throwButton');
const selectionDisplay = document.getElementById('selection-display');
for (let button of buttons) {
    button.addEventListener('click', () =>{
        selectionDisplay.textContent = button.value;
        const player = button.value;
        const computer = generateThrow();
        const result = score(player, computer);
        //console.log(player, computer, result);
        // if (result === 'player') {
        //     const playercount = o;
        //     playerCount++
        // }
        // else if (result === 'computer' 
        //     const computerCount = 0;
        //     computer count +=
        // }
        selectionDisplay.textContent = result;

    });
}


// subscribe to button click
// rock.addEventListener('click', () => {
//     const index = (0);
//     console.log(rock());
    
// });






