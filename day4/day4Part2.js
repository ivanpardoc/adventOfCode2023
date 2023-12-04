import { input, example, exampleCustom } from './input.js';
const total = [];

function solveDay4() {
    const inputData = example;

    inputData.forEach((card, indexCard) => {
        let winningNumbers = card.split(' | ')[0];
        let myNumbers = card.split(' | ')[1];
        const cardId = winningNumbers.split(': ')[0];
        winningNumbers = winningNumbers.split(': ')[1].split(' ');
        myNumbers = myNumbers.split(' ');
        const matchingNumbers = myNumbers.filter((num) => winningNumbers.includes(num) && num !== '');
        matchingNumbers.forEach((element, indexW) => {
            inputData.splice(indexCard + indexW + 1);
        });
        console.log(inputData);
        total.push(value);
    });

    const sum = total.reduce((previousValue, currentValue) => {
        return parseInt(previousValue) + parseInt(currentValue);
    }, 0);
    console.log(sum);
}
solveDay4();

// 24160 - OK 