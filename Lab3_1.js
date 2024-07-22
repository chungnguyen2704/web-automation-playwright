let intArr = [1, 2, 3, 4, 5];
let evenCount = 0;
let oddCount = 0;

intArr.forEach(number => {
    if (number % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
});

console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);