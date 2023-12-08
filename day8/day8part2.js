import { movements, movementsExample2, input, inputExample2 } from './input.js';
let dataProcessed = [];
let currentPosition = 'AAA';
let found = false;
let maxLoop = 999999999;
let steps = 0;
const currentMovements = movements.split('');
const data = input;

function solveDay8() {
    processData();
    const startingPoints = dataProcessed.filter((d) => d.position.substring(2, 3) === 'A');
    let endings = startingPoints.filter((d) => d.currentPosition.substring(2, 3) === 'Z');
    while (endings.length !== startingPoints.length) {

        endings = startingPoints.filter((d) => d.currentPosition.substring(2, 3) === 'Z');
        // console.log(startingPoints);
        currentMovements.forEach(movement => {
            startingPoints.forEach(startingPoint => {
                // if (startingPoint.currentPosition.substring(2, 3) !== 'Z') {
                    const currentPositionData = dataProcessed.find((d) => d.position === startingPoint.currentPosition);
                    startingPoint.currentPosition = currentPositionData[movement];
                // } else {
                    // console.log(startingPoint.currentPosition, movement);
                // }
            })
            if (endings.length !== startingPoints.length) {
                steps++;
                if (steps % 100000 === 0) {
                    console.log(`Steps: ${steps}`);
                }
            }
        })
    }
    // for (let index = 0; index < maxLoop; index++) {
    //     currentMovements.forEach(movement => {
    //         endings = startingPoints.filter((d) => d.currentPosition.substring(2, 3) === 'Z');
    //         if (endings.length === startingPoints.length) {
    //             index = maxLoop;
    //             return;
    //         }
    //         startingPoints.forEach(startingPoint => {
    //             const currentPositionData = dataProcessed.find((d) => d.position === startingPoint.currentPosition);
    //             startingPoint.currentPosition = currentPositionData[movement];
    //         })
    //         steps++;
    //     })
    // }
    console.log('steps', steps);
}

function processData() {
    data.forEach(element => {
        const splittedEqual = element.split(' = ');
        const position = splittedEqual[0];
        const movements = splittedEqual[1];
        dataProcessed.push({
            position,
            L: movements.split(', ')[0].substring(1),
            R: movements.split(', ')[1].substring(0,( movements.split(', ')[1].length-1)),
            currentPosition: position
        });
    });
}

function checkEndingString(str, end) {
    return str.substring(2, 3) !== end;
}

function move() {
    currentMovements.forEach(movement => {
        console.log('currentPosition', currentPosition);
        if (currentPosition.substring(2, 3) !== 'Z') {
            const currentPositionData = dataProcessed.find((d) => d.position === currentPosition);
            currentPosition = currentPositionData[movement];
            steps++;
        }
    });
}

solveDay8();