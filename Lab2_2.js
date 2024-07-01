const readlineSync = require('readline-sync');

const number = readlineSync.questionInt('Enter a number: ');
if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}