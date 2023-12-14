import { input, example } from "./input.js";
const data = input;
let refinedData = [];

function solve() {
    data.forEach((row) => {
        refinedData.push(row.split(''));
    })
    tiltRocks()
}

function tiltRocks() {
    
    for (let indexCol = 0; indexCol < refinedData[0].length; indexCol++) {
        let rocks = [];
        for (let indexRow = refinedData.length-1; indexRow >= 0; indexRow--) {
            const row = refinedData[indexRow];
            const char = row[indexCol];
            console.log('row', indexRow, indexCol);
            console.log('char', char);
            
            if (char === 'O') {
                rocks.push({indexCol, indexRow});
                refinedData[indexRow][indexCol] = '.';
            }

            if (char === '#') {
                if (rocks.length !== 0) {
                    for (let index = indexRow + rocks.length; index > indexRow; index--) {
                        refinedData[index][indexCol] = 'O';
                        console.log('indexrow', indexRow, 'index', index);
                    }
                }
                rocks = [];
            }
            if (indexRow === 0) {
                console.log('endOfColumn');
                if (rocks.length !== 0) {
                    for (let index = rocks.length - 1; index >= 0; index--) {
                        refinedData[index][indexCol] = 'O';
                        console.log('indexrow', indexRow, 'index', index);
                    }
                }
                rocks = [];
            }
        }
        }
    refinedData.forEach((row, index) => {
        console.log(index, refinedData.length - index, row.join(''));
    })

    let totalCount = 0
    refinedData.forEach((row, index) => {
        const value = refinedData.length - index;
        let count = row.filter((v => v === 'O'));
        totalCount += count.length * value;
    })
    console.log(totalCount);
}

solve();