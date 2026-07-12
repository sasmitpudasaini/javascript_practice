let currentInput = "";   
let previousInput = "";  
let operation = null;    

const screen = document.getElementById("screen");


function pressNum(num) {
    if (currentInput === "0") currentInput = ""; 
    currentInput += num;
    updateScreen(currentInput);
}


function pressOperator(op) {
    if (currentInput === "") return;
    operation = op;
    previousInput = currentInput;
    currentInput = ""; 
}


function clearScreen() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateScreen("0");
}

function updateScreen(value) {
    screen.innerText = value;
}


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

   
    updateScreen(result);
    currentInput = result.toString();
    previousInput = "";
    operation = null;
}