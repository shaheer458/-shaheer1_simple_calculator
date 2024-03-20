#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`let start calculations`);
    await sleep();
    rainbowTitle.stop();
    let layout = chalkAnimation.rainbow(`
 ______________________
|  _________________  |
| | CALCULATOR  1.0 | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);
    await sleep();
    layout.stop();
}
welcome();
async function performCalculation() {
    let continueCalculation = true;
    do {
        const answer = await inquirer.prompt([
            {
                type: "number",
                name: "numberOne",
                message: "Insert first number:"
            },
            {
                type: "number",
                name: "numberTwo",
                message: "Insert second number:"
            },
            {
                type: "list",
                name: "operator",
                choices: ["+", "-", "*", "/"],
                message: "Select operation:"
            }
        ]);
        const { numberOne, numberTwo, operator } = answer;
        if (numberOne !== undefined && numberTwo !== undefined && operator) {
            let result = 0;
            switch (operator) {
                case "+":
                    result = numberOne + numberTwo;
                    break;
                case "-":
                    result = numberOne - numberTwo;
                    break;
                case "*":
                    result = numberOne * numberTwo;
                    break;
                case "/":
                    result = numberOne / numberTwo;
                    break;
                default:
                    console.log("Invalid operator.");
            }
            console.log("Your result is:", result);
        }
        else {
            console.log("Please insert valid numbers.");
        }
        const { continueCalc } = await inquirer.prompt([
            {
                type: "confirm",
                name: "continueCalc",
                message: "Do you want to perform another calculation?",
                default: true
            }
        ]);
        continueCalculation = continueCalc;
    } while (continueCalculation);
}
performCalculation();
