import { input, example, example2 } from "./input.js";

let grid = [];
// let gridRow = ['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.'];
let currentPoint = {y: 0, x:0};
let points = [];
const data = example2;

function solve() {
    data.forEach((row) => {
        let splitted = row.split(' ');
        let direction = splitted[0];
        let steps = parseInt(splitted[1]);
        console.log(direction, steps);
        // grid[currentPoint.y][currentPoint.x] = '#';
        if (direction === 'D') {
            for (let index = 0; index < steps; index++) {
                // grid[currentPoint.y + index][currentPoint.x] = '#';
                points.push({y: currentPoint.y + index, x: currentPoint.x})
            }
            currentPoint = {y:  currentPoint.y+steps, x: currentPoint.x};
            // currentPoint.y += steps;
        }
        if (direction === 'U') {
            for (let index = 0; index < steps; index++) {
                // grid[currentPoint.y - index][currentPoint.x] = '#';
                points.push({y: currentPoint.y-index, x: currentPoint.x})
            }
            currentPoint = {y: currentPoint.y-steps, x: currentPoint.x};
        }
        if (direction === 'R') {
            for (let index = 0; index < steps; index++) {
                // grid[currentPoint.y][currentPoint.x + index] = '#';
                points.push({y: currentPoint.y, x: currentPoint.x + index})
            }
            currentPoint = {y: currentPoint.y, x: currentPoint.x + steps};
        }
        if (direction === 'L') {
            for (let index = 0; index < steps; index++) {
                // grid[currentPoint.y][currentPoint.x - index] = '#';
                points.push({y: currentPoint.y, x: currentPoint.x-index})
            }
            currentPoint = {y: currentPoint.y, x: currentPoint.x-steps};
        }
        console.log(currentPoint);
    })

   

    let maxX = Math.max(...points.map(o => o.x))
    let maxY =  Math.max(...points.map(o => o.y))
    let minX = Math.min(...points.map(o => o.x))
    let minY =  Math.min(...points.map(o => o.y))
    console.log('maxx', maxX, 'maxy', maxY, 'minx', minX, 'miny', minY);
    for (let index = 0; index < maxY + 1; index++) {
        console.log(index);
        grid[index] = [];
        for (let indexC = 0; indexC < maxX + 1; indexC++) {
            grid[index].push('.')
        }
    }
    console.log('grid', grid);
    grid.forEach((row) => {
        console.log(row.join(''))
    })
    points = points.sort((a, b) => {
        // Only sort on age if not identical
        if (a.y < b.y) return -1;
        if (a.y > b.y) return 1;
        // Sort on name
        if (a.x < b.x) return -1;
        if (a.x > b.x) return 1;
        // Both idential, return 0
        return 0;
      });
    points = points.filter((point, ind) => {
        return point !== points[ind+1]
    });
    // points.forEach((point) => {
    //     grid[point.y][point.x] = '#'
    // })
    grid.forEach((row) => {
        console.log(row.join(''))
    })
    let result = points.length;
    points.forEach((point, pointInd) => {
        console.log(point, points[pointInd+1], pointInd, points.length);
        if (pointInd +1 != points.length ) {
            if(point.x != points[pointInd+1].x && point.y != points[pointInd+1].y) {
                if (point.y === points[pointInd+1].y && (point.x + 1 != points[pointInd+1].x)) {
                    result = result + (points[pointInd+1].x - point.x) - 1;
                    console.log('space', (points[pointInd+1].x - point.x) - 1);
                }
            }
        }
    })
    // console.log(points);
    // grid.forEach((row, rowIndex) => {
    //     let hashCount = 0;
    //     let indArr = []
    //     row.forEach((char, charIndex) => {
    //         if (char === '#') {
    //             indArr.push(charIndex)
    //         }
    //     })
    //     indArr.forEach((hashInd, hashindind) => {
    //         if (hashindind === indArr.length - 1) {
    //             return
    //         }
    //         if (hashInd+1 === indArr[hashindind+1]) {
    //             // console.log('no space between');
    //         } else {
    //             for (let index = hashInd; index < indArr[hashindind+1]; index++) {
    //                 grid[rowIndex][index] = '#';
                    
    //             }
    //         }
    //     })
    // });

    // let count = 0;
    // grid.forEach((row, rowIndex) => {
    //     row.forEach((char, charIndex) => {
    //         if (char === '#') {
    //             count++
    //         }
    //     })
    // });
    // grid.forEach((row) => {
    //     console.log(row.join(''));
    // })
    console.log(result);
    // 58970 too high
    // 44121 too low
    // 45526 too low
}

solve();