// Get display element
const display = document.getElementById("display");

// Get number buttons
const numberButtons = document.querySelectorAll(".number");

// Get operator buttons
const operatorButtons = document.querySelectorAll(".operator");

// Get other buttons
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalButton = document.getElementById("equal");
const decimalButton = document.getElementById("decimal");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let currentInput = "";

// Number button event listeners
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

// Operator button event listeners
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (currentInput === "") {
            return;
        }

        firstNumber = currentInput;
        operator = button.textContent;
        currentInput = "";

        display.value = firstNumber + " " + operator;
    });
});

// Decimal button
decimalButton.addEventListener("click", () => {

    if (!currentInput.includes(".")) {
        currentInput += ".";
        display.value = currentInput;
    }
});

// Equal button
equalButton.addEventListener("click", () => {

    if (firstNumber === "" || currentInput === "" || operator === "") {
        return;
    }

    secondNumber = currentInput;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    let result;

    // if-else statements for calculations
    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {

        if (num2 === 0) {
            display.value = "Error";
            return;
        }

        result = num1 / num2;
    } 
    else if (operator === "%") {
        result = num1 % num2;
    }

    display.value = result;

    currentInput = result.toString();
    firstNumber = "";
    secondNumber = "";
    operator = "";
});

// Clear button
clearButton.addEventListener("click", () => {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    currentInput = "";
});

// Delete button
deleteButton.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
});