const readline = require('readline-sync');

const heightInMeters = readline.questionFloat('Enter your height (in meters): ');
const weight = readline.questionFloat('Enter your weight (in kg): ');

calculateBMI(heightInMeters, weight);

function calculateBMI(height, weight) {
    const bmi = weight / (height * height);
    console.log(`Your BMI is: ${bmi.toFixed(2)}`);

    if (bmi < 18.5) {
        console.log('You are underweight');
        const minNormalWeight = 18.5 * height * height;
        const kgToGain = minNormalWeight - weight;
        console.log(`You should increase your weight by at least ${kgToGain.toFixed(2)} kg to reach a normal BMI.`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log('You have a normal weight');
    } else if (bmi > 24.9 && bmi <= 29.9) {
        console.log('You are overweight');
        const maxNormalWeight = 24.9 * height * height;
        const kgToLose = weight - maxNormalWeight;
        console.log(`You should decrease your weight by at least ${kgToLose.toFixed(2)} kg to reach a normal BMI.`);
    } else {
        console.log('You are obese');
    }
}