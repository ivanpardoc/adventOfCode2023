import { input, example } from "./input.js";
const startingBeam = { XPoint: 0, YPoint: 0, direction: 'east', reachedEnd: false };
let beams = [];
const data = input;
let grid = [];
let gridToCheck = [];
const startedBeams = [];

function resolve() {
    grid = data.split(', ');
    grid.forEach((row) => {
        gridToCheck.push(row.split(''));
    })
    startingBeam.reachedEnd = moveBeam(startingBeam);
    // Don't look here Robson please, I have an infinite loop and I don't know why :D 
    let maxLoops = 20;
    let currentLoop = 0;
    while (currentLoop < maxLoops) {
        startedBeams.forEach((beam, indexB) => {
            beam.reachedEnd = moveBeam(beam);
        });
        currentLoop++;
        console.log('loop', currentLoop);
    }
    printModified();
    let countEnergy = 0;
    gridToCheck.forEach((row) => {
        row.forEach((ch) => {
            if (ch === '#') {
                countEnergy++;
            }
        })
    })
    console.log(countEnergy);
}

function printModified() {
    console.log('');
    console.log('   0123456789    0123456789');
    gridToCheck.forEach((row, index) => {
        console.log('0'+index, row.join(''),'0'+index, grid[index]);
    })
    console.log('   0123456789    0123456789');
    console.log('');
}

function moveBeam(beam) {
    let maxLoop = 500;
    let currentLoop = 0;
    while (beam.XPoint >= 0 && beam.YPoint >= 0 && beam.YPoint < grid.length && beam.XPoint < grid[beam.YPoint].length && currentLoop < maxLoop) {
        let charAtGrid = grid[beam.YPoint][beam.XPoint];
        gridToCheck[beam.YPoint][beam.XPoint] = '#';
        beam = checkMove(charAtGrid, beam);
        currentLoop++;
    }
    return true;
}

// TO BE ABLE TO RETURN WHEN MOVE IS DONE
function checkMove(charAtGrid, beam) {
    // console.log('beam', beam, 'chartat', charAtGrid);
    // printModified();

    if (charAtGrid === '.') {
        if (beam.direction === 'east') {
            beam.XPoint++;
            return beam;
        }
        if (beam.direction === 'west') {
            beam.XPoint--;
            return beam;
        }
        if (beam.direction === 'north') {
            beam.YPoint--;
            return beam;
        }
        if (beam.direction === 'south') {
            beam.YPoint++;
            return beam;
        }
    }
    if (charAtGrid === '/') {
        if (beam.direction === 'east') {
            beam.YPoint--;
            beam.direction = 'north';
            return beam;
        } else if (beam.direction === 'west') {
            beam.direction = 'south';
            beam.YPoint++;
            return beam;
        } else if (beam.direction === 'north') {
            beam.direction = 'east';
            beam.XPoint++;
            return beam;
        } else if (beam.direction === 'south') {
            beam.direction = 'west';
            beam.XPoint--;
            return beam;
        }
    }
    if (charAtGrid === '\\') {
        if (beam.direction === 'east') {
            beam.YPoint++;
            beam.direction = 'south';
            return beam;
        }
        if (beam.direction === 'west') {
            beam.YPoint--;
            beam.direction = 'north';
            return beam;
        }
        if (beam.direction === 'north') {
            beam.direction = 'west';
            beam.XPoint--;
            return beam;
        }
        if (beam.direction === 'south') {
            beam.direction = 'east';
            beam.XPoint++;
            return beam;
        }
    }

    if (charAtGrid === '|') {
        if (beam.direction === 'north') {
            beam.YPoint--;
            return beam;
        } else if (beam.direction === 'south') {
            beam.YPoint++
            return beam;
        } else if (beam.direction === 'east' || beam.direction === 'west') {
            let newBeam = { XPoint: beam.XPoint, YPoint: beam.YPoint - 1, direction: 'north', reachedEnd: false };
            let alreadyChecked = startedBeams.some((b) => b.XPoint === newBeam.XPoint && b.YPoint === newBeam.YPoint && b.direction === newBeam.direction);
            if (!alreadyChecked) {
                startedBeams.push(newBeam);
            }
            beam.YPoint++; // continue current beam to south
            beam.direction = 'south';
            return beam;
        }
    }

    if (charAtGrid === '-') {
        if (beam.direction === 'east') {
            beam.XPoint++;
            return beam;
        } else if (beam.direction === 'west') {
            beam.XPoint--;
            return beam;
        } else if (beam.direction === 'north' || beam.direction === 'south') {
            let newBeam = { XPoint: beam.XPoint + 1, YPoint: beam.YPoint, direction: 'east', reachedEnd: false };
            let alreadyChecked = startedBeams.some((b) => b.XPoint === newBeam.XPoint && b.YPoint === newBeam.YPoint && b.direction === newBeam.direction);
            if (!alreadyChecked) {
                startedBeams.push(newBeam);
            }
            beam.XPoint--; // CONTINUE west
            beam.direction = 'west';
            return beam;
        }
    }
    return beam;
}

resolve();