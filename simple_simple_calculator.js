let currentInput = "";   // Holds the number you are currently typing
let previousInput = "";  // Holds the first number before an operator is clicked
let operation = null;    // Tracks whether you clicked +, -, *, or /

const screen = document.getElementById("screen");

// Runs when a number (0-9) button is clicked
function pressNum(num) {
    if (currentInput === "0") currentInput = ""; // Remove default zero
    currentInput += num;
    updateScreen(currentInput);
}

// Runs when +, -, *, or / is clicked
function pressOperator(op) {
    if (currentInput === "") return;
    operation = op;
    previousInput = currentInput;
    currentInput = ""; // Clear current input to ready up for the next number
}

// Clears everything when 'C' is pressed
function clearScreen() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateScreen("0");
}

// Helper function to show text on the screen element
function updateScreen(value) {
    screen.innerText = value;
}

// Runs when the '=' button is clicked
function calculate() {
    let result;
    let num1 = Number(previousInput);
    let num2 = Number(currentInput);

    if (isNaN(num1) || isNaN(num2) || operation === null) return;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return;
    }

    // Show the result on screen and reset variables for next operations
    updateScreen(result);
    currentInput = result.toString();
    previousInput = "";
    operation = null;
}