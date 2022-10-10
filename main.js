const resultScreen = document.querySelector('#screen');
const numKeys = document.querySelectorAll('#num-keys');
const operators = document.querySelectorAll('#operations');
const equalBtn = document.querySelector('#equal-btn');

numKeys.forEach(numKey => {
    numKey.addEventListener('click', clickNumber);
});

operators.forEach(operator => {
    operator.addEventListener('click', operateValues);
});

equalBtn.addEventListener('click', calculate);

let num1 = '';
let num2 = '';
let currentOperator = '';

function clickNumber() {
    if (currentOperator === '') {
        if (resultScreen.textContent === '0') {
            resultScreen.textContent = this.textContent;
        } else {
            resultScreen.textContent += this.textContent;
        }
    } else {
        if (resultScreen.textContent === '0') {
            resultScreen.textContent = this.textContent;
            num2 = resultScreen.textContent;
        } else {
            resultScreen.textContent += this.textContent;
            num2 = resultScreen.textContent;
        }
    }
}

function operateValues() {
    num1 = resultScreen.textContent;
    currentOperator = this.textContent;
    resultScreen.textContent = '0';
}

function calculate() {
    const result = operate(currentOperator, num1, num2);
    resultScreen.textContent = result;
    console.log(currentOperator);
    console.log(num1);
    console.log(num2);
    console.log(result);
}


function operate(operator, num1, num2) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    }
}
