// gets elements from the DOM
const resultScreen = document.querySelector('#screen');
const numKeys = document.querySelectorAll('#num-keys');
const operators = document.querySelectorAll('#operations');
const equalBtn = document.querySelector('#equal-btn');
const clearBtn = document.querySelector('#clear');
const decimalBtn = document.getElementById('dot');
const backspaceBtn = document.getElementById('delete');
// adds click event listener to each num keys in the numkeys nodelist
numKeys.forEach(numKey => {
    numKey.addEventListener('click', clickNumber);
});

// adds click event listener to each operator keys in the operators nodelist
operators.forEach(operator => {
    operator.addEventListener('click', operateValues);
});

decimalBtn.addEventListener('click', addDecimal);

backspaceBtn.addEventListener('click', deleteChar);

equalBtn.addEventListener('click', calculate);  // runs function when equal btn is clicked
clearBtn.addEventListener('click', clear); // runs function when clear btn is clickec

// default values
let num1 = '';
let num2 = '';
let currentOperator = ''; //saves current operator pressed
let n = 0; // operator counter
let counterArray = [];
let result;

// registers click action and add value to the result screen text content
function clickNumber() {
    if (currentOperator === '') { // empty operator string means the operator has not being selected and means the value inputted is num1 
        if (resultScreen.textContent === '0' || result === '') {
            resultScreen.textContent = this.textContent;
            num1 = resultScreen.textContent;
        } else {
            resultScreen.textContent += this.textContent;
            num1 = resultScreen.textContent;
        }
    } else {
        if (resultScreen.textContent === '0' || result === '') {
            resultScreen.textContent = this.textContent;
            num2 = resultScreen.textContent;
        } else {
            resultScreen.textContent += this.textContent;
            num2 = resultScreen.textContent;
        }
    }
}

function operateValues() {
    n++;
    counterArray[n - 1] = this.textContent; // keeps a record of the operator as an array
    currentOperator = this.textContent;
    resultScreen.textContent = '0';
    // using operator button to chain long calculation
    if (n >= 2 && num1 !== '' && num2 !== '') {
        if (num1 == '0' || num2 == '0' && counterArray[n - 2] === '/') {
            alert("Nothing is divisible by zero");
        } else {
            result = operate(counterArray[n - 2], num1, num2);
            num1 = result; //allocates the result to num1 so it can be used as another operand
            resultScreen.textContent = Math.round(num1 * 10000000) / 10000000;
            num2 = ''; // resets value after calculation
            result = '';
        }
        
    }
}
// adds decimal point if it does not exist in the current string
function addDecimal() {
    if(!(resultScreen.textContent.includes('.'))) {
        resultScreen.textContent += '.';
    }
}

function deleteChar() {
    if (resultScreen.textContent == '0') {
        alert('Input a value.');
    } else {
        resultScreen.textContent = resultScreen.textContent.slice(0, -1);
    }
}

function calculate() {
    if (currentOperator === '' || num1 === '' || num2 === '') {
        alert('Incomplete Parameter(s)');
    } else {
        if (num1 == '0' || num2 == '0' && currentOperator == '/') {
            alert("Nothing is divisible by zero");
        } else {
            result = operate(currentOperator, num1, num2);
            resultScreen.textContent = Math.round(result * 10000000) / 10000000;
            num1 = result; //allocates the result to num1 so it can be used as another operand
            num2 = ''; // resets value after calculation
            result = ''; // resets value after calculation
        }  
    }
    
}

// carrys out arithmetic operation and returns value
function operate(operator, num1, num2) {
    if (operator === '+') {
        return parseInt(num1) + parseInt(num2);
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
            return num1 / num2;
        }
}

function clear() {
    // resets values
    resultScreen.textContent = '0';
    num1 = '';
    num2 = '';
    currentOperator = '';
    result = undefined;
    n = 0;
    counterArray = [];
}

