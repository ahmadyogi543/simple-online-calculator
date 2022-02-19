// Global variables
const displayBox = document.querySelector(".display-box");
let expression = "";

// Some useful functions
const removeLastChar = (str) => {
    if (str.length > 0) {
        str = str.substring(0, str.length - 1);
    }
    return str;
}

const clearExpression = () => {
    expression = "";
}

const setDisplay = (value) => {
    displayBox.value = value;
}

const updateDisplay = () => {
    displayBox.value = expression;
}

const addToExpression = (value) => {
    const operators = ["+","−", "×", "÷", "."];

    let expLastChar = expression[expression.length - 1];

    if (operators.includes(value)) {
        if (expression.length === 0) {
            value = "";
        }
        else if (operators.includes(expLastChar)) {
            expression = removeLastChar(expression);
        }
    }
    expression += value;

    updateDisplay();
}

const translateOperators = (exp) => {
    const operators = {
        '−': '-',
        '×': '*',
        '÷': '/'
    };
    exp = exp.replace(/[−×÷]/g, op => operators[op]);

    return exp;
}


// Function to handle when the user click the button
const handleACBtn = () => {
    clearExpression();
    updateDisplay();
}

const handleCEBtn = () => {
    expression = removeLastChar(expression);
    updateDisplay();
}

const handleEqualBtn = () => {
    if (expression.length !== 0) {
        let result = eval(translateOperators(expression));
        expression = result;
    }
    
    updateDisplay();
}

// When the button is click, this function bellow is called
const getValue = (button) =>  {
	let value = button.innerHTML;
    switch (value) {
        case "AC":
            handleACBtn();
            break;
        case "CE":
            handleCEBtn();
            break;
        case "=":
            handleEqualBtn();
            break;
        default:
            addToExpression(value);
    }
}