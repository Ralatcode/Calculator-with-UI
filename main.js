const resultScreen = document.querySelector('#screen');
const numKeys = document.querySelectorAll('#num-keys');
const operators = document.querySelectorAll('#operations');
const equalBtn = document.querySelector('#equal-btn');
const clearBtn = document.querySelector('#clear');

numKeys.forEach(numKey => {
    numKey.addEventListener('click', clickNumber);
});

operators.forEach(operator => {
    operator.addEventListener('click', operateValues);
});

equalBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clear);

let num1 = '';
let num2 = '';
let currentOperator = '';
let n = 0; // operator counter
let counterArray = [];
let result;

function clickNumber() {
    if (currentOperator === '') {
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
            num1 = result;        
            resultScreen.textContent = Math.round(num1 * 10000000) / 10000000;
            num2 = '';
            result = '';
        }
        
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
            num1 = result;
            num2 = '';
            result = '';        
        }  
    }
    
}


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

