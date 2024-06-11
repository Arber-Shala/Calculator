// This is a calculator program programmed in javascript
console.log("Welcome to the calculator!");

// Idea for this input method found from https://www.geeksforgeeks.org/how-to-take-input-in-javascript-in-vs-code-terminal/ on 6/11/2024
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter your operation: ", (operation) => {
    console.log(`Your operation is: ${operation}`);
    console.log("Printed operation: " + operation);
    rl.close();
});



