import { input, example } from "./input.js";

const data = input;
let refinedData = [];
let results = [];
function solve() {
    refinedData = data.split(',');
    refinedData.forEach((field) => {
        let value = 0
        field.split('').forEach((char) => {
            value = getValue(char, value);
        });
        results.push(value);
    });
    const sum = results.reduce((previousValue, currentValue) => {
        return parseInt(previousValue) + parseInt(currentValue);
    }, 0);
    console.log('total', sum);
}

function getValue(char, currentValue) {
    currentValue += char.charCodeAt(0);
    currentValue = currentValue * 17;
    currentValue = currentValue%256;
    return currentValue;
};

solve()