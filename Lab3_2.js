let intArr = [1, 2, 3, 4, 5];

let minimum = intArr[0];
let maximum = intArr[0];

for (let i = 1; i < intArr.length; i++) {
    if (intArr[i] < minimum) {
        minimum = intArr[i];
    }
    if (intArr[i] > maximum) {
        maximum = intArr[i];
    }
}

console.log(`Minimum: ${minimum}`);
console.log(`Maximum: ${maximum}`);