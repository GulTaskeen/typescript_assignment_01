export function showNumberEight(){const targetNumber: number = 8;

const additionNumbers: [number, number] = [6, 2];
const subtractionNumbers: [number, number] = [10, 2];
const multiplicationNumbers: [number, number] = [4, 2];
const divisionNumbers: [number, number] = [16, 2];

const add: number = additionNumbers[0]+additionNumbers[1];
const subtract: number = subtractionNumbers[0]-subtractionNumbers[1];
const multiply: number = multiplicationNumbers[0]*multiplicationNumbers[1];
const divide: number = divisionNumbers[0]/divisionNumbers[1];

console.log(`${additionNumbers[0]} + ${additionNumbers[1]} = ${add}`);
console.log(`${subtractionNumbers[0]} - ${subtractionNumbers[1]} = ${subtract}`);
console.log(`${multiplicationNumbers[0]} * ${multiplicationNumbers[1]} = ${multiply}`);
console.log(`${divisionNumbers[0]} / ${divisionNumbers[1]} = ${divide}`);
}