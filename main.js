// This is a calculator program programmed in javascript
console.log("Welcome to the calculator!");

function GetUserInput(){
    // Idea for this input method found from https://www.geeksforgeeks.org/how-to-take-input-in-javascript-in-vs-code-terminal/ on 6/11/2024
    // Create an input and output interface
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // Take in the input and map that input to the operationv variable
    rl.question("Enter your operation: ", (operation) => {
        console.log(`Your operation is: ${operation}`);
        console.log("Printed operation: " + operation);
        rl.close;
    });

    
}

function PrintOutput(){
    console.log("Returned Operation", returned_operation);
}

returned_operation = GetUserInput();
if(returned_operation != undefined){
    PrintOutput(returned_operation);
}









