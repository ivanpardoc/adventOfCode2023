import { input, example, example2, resultsPart1 } from "./input.js";

let dataRefined = [];
let dataVertical = [];
let results = []
const data = input;

function foundMatches(pattern, indexPattern, direction, secondTime) {
    let matches = [];
    pattern.forEach((row, indexRow) => {
        if (indexRow + 1 === pattern.length) {
            return;
        }
        let nextRow = pattern[indexRow + 1];
        const diff = getDifference(row, nextRow);
        // if (diff.result.length === 1) {
        const rowsModified = dataRefined[indexPattern].rowsModified;
        console.log('here', secondTime);
        if (!secondTime) {
            if (diff.result.length === 1 && (!dataRefined[indexPattern].modified || !dataRefined[indexPattern].modified)) {
                // console.log('row, pattern[indexRow + 1]', row, pattern[indexRow + 1]);
                // console.log(diff.result.length, diff, ' row[diff.indexNotEqual]',  pattern[indexRow + 1]);
                let newPattern = nextRow.slice(0, diff.indexNotEqual) + (diff.result === '#' ? '.' : '#') + nextRow.substring(diff.indexNotEqual+1);
                if (direction === 'horizontal') {
                    dataRefined[indexPattern].pattern[indexRow+1] = newPattern;
                    dataRefined[indexPattern].modified = true;
                    dataRefined[indexPattern].rowsModified = [indexRow, indexRow+1]
                    refineVerticalAgain(dataRefined[indexPattern].pattern, indexPattern);
                } else {
                    dataVertical[indexPattern].pattern[indexRow+1] = newPattern;
                    dataVertical[indexPattern].modified = true;
                }
            }
        } else if (secondTime) {
            if (diff.result.length === 1 && rowsModified[0] !== indexRow) {
                let newPattern = nextRow.slice(0, diff.indexNotEqual) + (diff.result === '#' ? '.' : '#') + nextRow.substring(diff.indexNotEqual+1);
                if (direction === 'horizontal') {
                    dataRefined[indexPattern].pattern[indexRow+1] = newPattern;
                    dataRefined[indexPattern].modified = true;
                    dataRefined[indexPattern].rowsModified = [indexRow, indexRow+1]
                    refineVerticalAgain(dataRefined[indexPattern].pattern, indexPattern);
                } else {
                    dataVertical[indexPattern].pattern[indexRow+1] = newPattern;
                    dataVertical[indexPattern].modified = true;
                }
            }
        }
        if (row === pattern[indexRow + 1]) {
            matches.push([indexRow, indexRow+1])
        }
    });
    return matches
}

function getDifference(a, b) {
    let i = 0;
    let j = 0;
    let result = "";
    let indexNotEqual = 0;

    while (j < b.length) {
        if (a[i] != b[j] || i == a.length) {
            result += b[j];
            indexNotEqual = i;
        }
        i++;
        j++;
    }
    return {result, indexNotEqual};
}
function solve() {
    part1solve();
    refineData();
    dataRefined.forEach((pattern, indexPattern) => {
        let flagPushed = false;
        let flagFoundHorizontal = false;
        let flagFoundVertical = false;
        const horizontalPattern = pattern.pattern
        const verticalPattern = dataVertical[indexPattern].pattern;
        let indexesFoundHoriz = foundMatches(horizontalPattern, indexPattern, 'horizontal', false);
        let indexesFoundVertical = foundMatches(verticalPattern, indexPattern, 'vertical', false);

        const resultHorizontal = loopCommon(indexesFoundHoriz, horizontalPattern, 'horizontal', indexPattern);
        // let numberEqualHorizontal = resultHorizontal.
        let horSimmetryFound = resultHorizontal.simmetryFound;
        let horReachedEnd = resultHorizontal.reachedEnd;
        let notSimmetryHor = resultHorizontal.notSimmetry;
        
        const resultVertical = loopCommon(indexesFoundVertical, verticalPattern, 'vertical', indexPattern);
        let verReachedEnd = resultVertical.reachedEnd;
        let verSimmetryFound = resultVertical.simmetryFound
        let notSimmetryVer = resultVertical.notSimmetry;
        console.log(' indexPattern',  indexPattern);
        // console.log('verSimmetryFound', verSimmetryFound);
        // console.log('horSimmetryFound', horSimmetryFound);

        let resultsVer = 0;
        if (verSimmetryFound.length === 1 && horSimmetryFound.length === 0) {
            resultsVer = verSimmetryFound[0][1];
            flagPushed = true;
            results.push(resultsVer)
        }
        
        if (horSimmetryFound.length === 1 && verSimmetryFound.length === 0) {
            resultsVer = horSimmetryFound[0][1] * 100;
            flagPushed = true;
            results.push(resultsVer)
        }

        if (verSimmetryFound.length > 1) {
            // console.log('more than one vertical', indexPattern);
            if (verSimmetryFound[0] === part1results[indexPattern].symGroup) {
                resultsVer = verSimmetryFound[1][1];
                flagPushed = true;
                results.push(resultsVer);
            } else {
                resultsVer = verSimmetryFound[0][1];
                flagPushed = true;
                results.push(resultsVer);
            }
        }
        let resultsHor = 0;
        
        if (horSimmetryFound.length > 1) {
            if (horSimmetryFound[0] === part1results[indexPattern].symGroup) {
                resultsHor = horSimmetryFound[1][1] * 100;
                flagPushed = true;
                results.push(resultsHor)
            } else {
                resultsHor = horSimmetryFound[0][1] * 100;
                flagPushed = true;
                results.push(resultsHor)
            }
        }

        if (horSimmetryFound.length === 1 && verSimmetryFound.length === 1) {
            // console.log('verSimmetryFound[0]', verSimmetryFound[0], verSimmetryFound[0] === part1results[indexPattern].symGroup, horSimmetryFound[0] === part1results[indexPattern].symGroup, horSimmetryFound[0]);
            // console.log('part1results[indexPattern].symGroup', part1results[indexPattern].symGroup);
            if (verSimmetryFound[0][1] === part1results[indexPattern].symGroup[1]) {
                resultsHor = horSimmetryFound[0][1] * 100;
                if (resultsHor === 0) {
                    resultsVer = verSimmetryFound[0][1];
                    results.push(resultsHor)
                }
                flagPushed = true;

                results.push(resultsHor)
            } else if (horSimmetryFound[0][1] === part1results[indexPattern].symGroup[1]){
                console.log('else');
                resultsHor = horSimmetryFound[0][1] * 100;
                flagPushed = true;
                results.push(resultsHor)
            }
        }
        // indexPattern 77
        // verSimmetryFound []
        // horSimmetryFound [ [ 0, 1 ] ]
        // if (verReachedEnd) {
        //     resultsVer = verSimmetryFound[1];
        // }
        // if (horReachedEnd) {
        //     resultsHor = horSimmetryFound[1] * 100;
        // }
        if (!dataRefined[indexPattern].modified && !dataVertical[indexPattern].modified) {
            // console.log('NOT MODIFIED', indexPattern);
        }
        if (!flagPushed) {
            dataRefined[indexPattern].pattern = part1dataRefined[indexPattern];
            dataRefined[indexPattern].modified = false;
            console.log(dataRefined[indexPattern]);
            let newMatches = foundMatches(dataRefined[indexPattern].pattern, indexPattern, 'horizontal', true);
            const resultHorizontalN = loopCommon(newMatches, dataRefined[indexPattern].pattern, 'horizontal', indexPattern);
            results.push(resultHorizontalN.simmetryFound[0][1] * 100);

            console.log('newMatches', resultHorizontalN);
            // console.log('NOT PUSHED', indexPattern);
            // console.log(dataRefined[indexPattern]);
            // console.log(part1dataRefined[indexPattern]);
        }
        console.log('resultsHor', resultsHor);
        console.log('resultsVer', resultsVer);
        
    })
    // console.log(dataRefined);
    const sum = results.reduce((previousValue, currentValue) => {
        return parseInt(previousValue) + parseInt(currentValue);
    }, 0);
    console.log('total', sum);
    console.log('results', results.length);
    // 18030 too low
    // 22080 too low
    // 46218 not right
    // 46418
    // 38066
}

function loopCommon(indexsFound, pattern, direction, indexPattern) {
    let numberEqualHorizontal = 0
    let simmetryFound = [];
    let reachedEnd = false;
    let notSimmetry = false;
    
    indexsFound.forEach((equals => {
        reachedEnd = false;
        notSimmetry = false;
        numberEqualHorizontal++;
        let indexToCompare = equals[1];
        // console.log('equals', equals);
        for (let index = equals[0]; index >= 0; index--) {
            if (reachedEnd || notSimmetry) {
                return;
            }
            let currentRow = pattern[index];
            let compareTo = pattern[indexToCompare];
            if ((equals[1] === pattern.length -1 || index === 0) && currentRow === compareTo ) {
                reachedEnd = true;
                simmetryFound.push([equals[0], equals[1]]);
                return;
            }
            indexToCompare++;
            const diff = getDifference(currentRow, compareTo);
            if (diff.result.length === 1 && (!dataRefined[indexPattern].modified || !dataRefined[indexPattern].modified)) {
                // console.log('diff', diff);
                // console.log(currentRow, compareTo);
                let newPattern = currentRow.slice(0, diff.indexNotEqual) + (diff.result) + currentRow.substring(diff.indexNotEqual+1);
                // console.log('1 char', newPattern);
                if (direction === 'horizontal') {
                    dataRefined[indexPattern].pattern[index] = newPattern;
                    dataRefined[indexPattern].modified = true;
                } else {
                    dataVertical[indexPattern].pattern[index] = newPattern;
                    dataVertical[indexPattern].modified = true;
                }
                currentRow = newPattern;
                refineVerticalAgain(dataRefined[indexPattern].pattern, indexPattern);
            }

            if (currentRow === compareTo ) {
                numberEqualHorizontal++;
                if (!reachedEnd && index=== 0 || indexToCompare === pattern.length) {
                    simmetryFound.push([equals[0], equals[1]]);
                    reachedEnd = true;
                }
            } else {
                notSimmetry = true;
            }
        }
    }))

    return {
        simmetryFound,
        reachedEnd,
        notSimmetry
    }
}


function getVerticalPatterns(pattern) {
    let verticalRows = [];
    let newRow = ''
    for (let column = 0; column < pattern[0].length; column++) {
        for (let row = 0; row < pattern.length; row++) {
            const element = pattern[row][column];
            newRow += element;
        }
        verticalRows.push(newRow);
        newRow = '';
    }
    dataVertical.push({pattern: verticalRows, modified: false, original: verticalRows})
}

function refineVerticalAgain(pattern, patternIndex) {
    let verticalRows = [];
    let newRow = ''
    for (let column = 0; column < pattern[0].length; column++) {
        for (let row = 0; row < pattern.length; row++) {
            const element = pattern[row][column];
            newRow += element;
        }
        verticalRows.push(newRow);
        newRow = '';
    }
    dataVertical[patternIndex].pattern = verticalRows;
}
function refineData() {
    let pattern = [];
    
    data.forEach((element, index) => {
        if (element === '' || index === data.length - 1) {
            if (element !== '') {
                pattern.push(element);
            }
            dataRefined.push({pattern, modified: false, original: pattern});
            pattern = [];
        } else {
            pattern.push(element);
        }
    });

    
    dataRefined.forEach((pattern) =>{
        getVerticalPatterns(pattern.pattern);
    })
}


let part1dataRefined = [];
let part1dataVertical = [];
let part1results = []

function part1foundMatches(pattern) {
    let matches = []
    pattern.forEach((row, indexRow) => {
        // console.log(indexRow, pattern.length);
        if (indexRow + 1 === pattern.length) {
            // console.log('indexRow + 1 === row.length - 1');
            return;
        }
        // console.log(row, pattern[indexRow+1]);
        if (row === pattern[indexRow + 1]) {
            // flagFoundHorizontal = true;
            matches.push([indexRow, indexRow+1])
        }
    });
    return matches
}


function part1solve() {
    part1refineData();
    part1dataRefined.forEach((pattern, indexPattern) => {
        let flagFoundHorizontal = false;
        let flagFoundVertical = false;
        const verticalPattern = part1dataVertical[indexPattern];
        let indexesFoundHoriz = part1foundMatches(pattern);
        let indexesFoundVertical = part1foundMatches(verticalPattern)

        const resultHorizontal = part1loopCommon(indexesFoundHoriz, pattern, 'hor');
        // let numberEqualHorizontal = resultHorizontal.
        let horSimmetryFound = resultHorizontal.simmetryFound;
        let horReachedEnd = resultHorizontal.reachedEnd;
        let notSimmetryHor = resultHorizontal.notSimmetry;
        
        const resultVertical = part1loopCommon(indexesFoundVertical, verticalPattern, 'vertical');
        let verReachedEnd = resultVertical.reachedEnd;
        let verSimmetryFound = resultVertical.simmetryFound
        let notSimmetryVer = resultVertical.notSimmetry;

        // console.log('horsim', resultHorizontal);
        if (verReachedEnd) {
            part1results.push({value: verSimmetryFound[1], symGroup: verSimmetryFound, direction: 'ver'});
        }
        if (horReachedEnd) {
            part1results.push({ value: (horSimmetryFound[1]) * 100, symGroup: horSimmetryFound, direction: 'hor'});
        }
    })
    // const sum = part1results.reduce((previousValue, currentValue) => {
    //     return parseInt(previousValue) + parseInt(currentValue);
    // }, 0);
    console.log(part1results);
    // console.log('part 1 total', sum);
    console.log(part1dataRefined[73]);

    // 30486 -too low
    // 35868 -- too high
    // 35765 !not
    // 32400 NOT
    // 33182 no
    // 33157
    // 33195 yep
}

function part1loopCommon(indexsFound, pattern, direction) {
    let numberEqualHorizontal = 0
    let simmetryFound = [];
    let reachedEnd = false;
    let notSimmetry = false;
    indexsFound.forEach((equals => {
        let notSimmetry = false;
        numberEqualHorizontal++;
        let indexToCompare = equals[1];
        for (let index = equals[0]; index >= 0; index--) {
            if (reachedEnd || notSimmetry) {
                return;
            }
            let currentRow = pattern[index];
            let compareTo = pattern[indexToCompare];
            if ((equals[1] === pattern.length -1 || index === 0) && currentRow === compareTo ) {
                reachedEnd = true;
                simmetryFound.push(equals[0], equals[1]);
                return;
            }
            indexToCompare++;
            if (currentRow === compareTo ) {
                numberEqualHorizontal++;
                if (!reachedEnd && index=== 0 || indexToCompare === pattern.length) {
                    simmetryFound.push(equals[0], equals[1]);
                    reachedEnd = true;
                }
            } else {
                notSimmetry = true;
            }
        }
    }))

    return {
        simmetryFound,
        reachedEnd,
        notSimmetry
    }
}


function part1getVerticalPatterns(pattern) {
    let verticalRows = [];
    let newRow = ''
    for (let column = 0; column < pattern[0].length; column++) {
        for (let row = 0; row < pattern.length; row++) {
            const element = pattern[row][column];
            newRow += element;
        }
        verticalRows.push(newRow);
        newRow = '';
    }
    part1dataVertical.push(verticalRows)
}

function part1refineData() {
    let pattern = [];
    
    data.forEach((element, index) => {
        if (element === '' || index === data.length - 1) {
            if (element !== '') {
                pattern.push(element);
            }
            part1dataRefined.push(pattern);
            pattern = [];
        } else {
            pattern.push(element);
        }
    });

    
    part1dataRefined.forEach((pattern) =>{
        part1getVerticalPatterns(pattern);
    })
}

solve();