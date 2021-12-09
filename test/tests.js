// IMPORT MODULES under test here:
// import { add } from '../calc.js';


import { score } from '../game.js';

const test = QUnit.test;

test('player rock, computer rock is tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'tie';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player rock, computer scissors is player', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'player';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player rock, computer paper is computer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'paper';
    const expected = 'computer';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player paper, computer paper is tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'paper';
    const expected = 'tie';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player paper, computer scissors is computer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'computer';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player paper, computer rock is player', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'rock';
    const expected = 'player';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player scissors, computer paper is player', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'player';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player scissors, computer scissors is tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'tie';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player scissors, computer rock is computer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'computer';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});