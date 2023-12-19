import { input, example, example2 } from "./input.js";

let grid = [];
// let gridRow = ['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.'];
let currentPoint = {y: 200, x:200};
let points = [];
const data = input;

function solve() {
    let stepsCount = 0;
    data.forEach((row) => {
        let splitted = row.split(' ');
        let direction = splitted[0];
        let steps = parseInt(splitted[1]);
        console.log(direction, steps);
        if (direction === 'D') {
            for (let index = 0; index < steps; index++) {
                points.push(currentPoint.y + index, currentPoint.x)
                stepsCount++
            }
            currentPoint = {y:  currentPoint.y+steps, x: currentPoint.x};
        }
        if (direction === 'U') {
            for (let index = 0; index < steps; index++) {
                points.push(currentPoint.y-index,currentPoint.x)
                stepsCount++
            }
            currentPoint = {y: currentPoint.y-steps,x: currentPoint.x};
        }
        if (direction === 'R') {
            for (let index = 0; index < steps; index++) {
                points.push(currentPoint.y,currentPoint.x + index)
                stepsCount++
            }
            currentPoint = {y: currentPoint.y, x: currentPoint.x + steps};
        }
        if (direction === 'L') {
            for (let index = 0; index < steps; index++) {
                points.push(currentPoint.y,currentPoint.x-index)
                stepsCount++
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
    grid.forEach((row) => {
        console.log(row.join(''))
    })
    grid.forEach((row) => {
        console.log(row.join(''))
    })
    const area = Math.area(points); 
    let total =  area - stepsCount / 2 + 1;
    console.log('total', total + stepsCount);
}

Math.area = Math.area || function(polygon){
    const length = polygon.length;
  
    let sum = 0;
  
    for(let i = 0; i < length; i += 2){
      sum += polygon[i    ] * polygon[(i + 3) % length]
           - polygon[i + 1] * polygon[(i + 2) % length];
    }
  
    return Math.abs(sum) * 0.5;
}

solve();