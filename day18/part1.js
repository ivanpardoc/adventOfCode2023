import { input, example, example2 } from "./input.js";

let grid = [];
// let gridRow = ['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.'];
let currentPoint = {y:10, x:10};
const data = example2;
let refinedData = [];

function solve() {

    for (let index = 0; index < 50; index++) {
        grid[index] = [];
        for (let indexC = 0; indexC < 50; indexC++) {
            grid[index].push('.')
        }
    }

    data.forEach((row) => {
        let splitted = row.split(' ');
        let direction = splitted[0];
        let steps = parseInt(splitted[1]);
        refinedData.push({steps, direction})
    })
    refinedData.forEach((input, inputIndex) => {
        
        let direction = input.direction;
        let steps = parseInt(input.steps);
        console.log(direction, steps);
        grid[currentPoint.y][currentPoint.x] = '.';
        if (direction === 'D') {
            for (let indexD = 0; indexD < steps; indexD++) {
                if (grid[currentPoint.y + indexD][currentPoint.x] === '.') {
                    console.log('here', currentPoint.y + indexD);
                    grid[currentPoint.y + indexD][currentPoint.x] = '|';
                }
            }
            currentPoint = {y:  currentPoint.y+steps, x: currentPoint.x};
        }
        if (direction === 'U') {
            for (let indexU = 0; indexU < steps; indexU++) {
                if (grid[currentPoint.y - indexU][currentPoint.x] === '.') {
                    grid[currentPoint.y - indexU][currentPoint.x] = '|';
                }
            }
            currentPoint = {y: currentPoint.y-steps, x: currentPoint.x};
        }
        if (direction === 'R') {
            for (let indexR = 0; indexR < steps; indexR++) {
                if (grid[currentPoint.y][currentPoint.x + indexR] === '.') {
                    grid[currentPoint.y][currentPoint.x + indexR] = '-';
                    if (inputIndex !== 0 && refinedData[inputIndex-1].direction === 'D' && indexR === 0) {
                        grid[currentPoint.y][currentPoint.x + indexR] = '|'
                    }
                    if (inputIndex !== refinedData.length-1 && refinedData[inputIndex+1].direction === 'D' && indexR === steps - 1) {
                        grid[currentPoint.y][currentPoint.x + indexR] = '|'
                    }
                    if (inputIndex !== refinedData.length-1 && refinedData[inputIndex+1].direction === 'U' && indexR === 0) {
                        console.log('up');
                        grid[currentPoint.y][currentPoint.x + indexR] = '-'
                    }
                    // grid[currentPoint.y][currentPoint.x + index] = '-'
                }
            }
            currentPoint = {y: currentPoint.y, x: currentPoint.x + steps};
        }
        if (direction === 'L') {
            for (let indexL = 0; indexL < steps; indexL++) {
                if (grid[currentPoint.y][currentPoint.x - indexL] === '.') {
                    grid[currentPoint.y][currentPoint.x - indexL] =  '-';
                    if (inputIndex !== 0 && refinedData[inputIndex-1].direction === 'D' && indexL === 0) {
                        grid[currentPoint.y][currentPoint.x - indexL] = '|'
                    }
                    if (inputIndex !== refinedData.length-1 && refinedData[inputIndex+1].direction === 'D' && indexL === steps - 1) {
                        grid[currentPoint.y][currentPoint.x - indexL] = '|'
                    }
                    // grid[currentPoint.y][currentPoint.x - indexL] = indexL === steps -1 ? '|' :'-';
                }
                // grid[currentPoint.y][currentPoint.x - indexL] = indexL === 0 ? '|' :'-';;
            }
            currentPoint = {y: currentPoint.y, x: currentPoint.x-steps};
        }
        console.log(currentPoint);
    })

    let insideHash = false
    grid.forEach((row, rowIndex) => {
        let hashCount = 0;
        let indArr = []
        for (let index = 0; index < row.length; index++) {
            const char = row[index];
            const charBefore = row[index-1]
            const charAfter = row[index+1]
            if (char === '|') {
                hashCount++;
                // if ((charAfter === '-' || charAfter === '|') || (charBefore === '-' || charBefore === '|')) {
                //     hashCount--;
                // }
            }
            if (hashCount%2 === 1 && char !== '|' && char !== '-') {
                grid[rowIndex][index] = '*';
            }
        }
        // row.forEach((char, charIndex) => {
        //     if (char === '#') {
        //         hashCount++;
        //     }
        //     if (row[charIndex-1] === '#') {
        //         hashCount--;
        //     }
        //     if (hashCount%2 === 1) {
        //         grid[rowIndex][charIndex] = '#';
        //     }
        // })
    });

    let count = 0;
    grid.forEach((row, rowIndex) => {
        row.forEach((char, charIndex) => {
            if (char === '|' || char === '-' || char === '*') {
                count++
            }
        })
    });
    console.log(count);
    grid.forEach((row)=> {
        console.log(row.join(''));
    })
}

solve();