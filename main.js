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
let result = '';

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
    counterArray[n - 1] = this.textContent;
    currentOperator = this.textContent;
    resultScreen.textContent = '0';
    if (n >= 2 && num1 !== '' && num2 !== '') {
        result = operate(counterArray[n - 2], num1, num2);
        console.log(num1, counterArray[n - 2], num2);
        num1 = result;        
        resultScreen.textContent = num1;
        num2 = '';
        result = '';
    }
}

function calculate() {
    console.log(num1, currentOperator, num2);
    result = operate(currentOperator, num1, num2);
    resultScreen.textContent = result;
    num1 = result;
    num2 = '';
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
    result = '';
    n = 0;
    counterArray = [];
}
