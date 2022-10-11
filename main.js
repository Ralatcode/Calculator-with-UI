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
            num1 = resultScreen.textContent;
        } else {
            resultScreen.textContent += this.textContent;
            num1 = resultScreen.textContent;

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
    currentOperator = this.textContent;
    resultScreen.textContent = '0';
    if (currentOperator !== '' && num1 !== '' && num2 !== '') {
        calculate();
        num1 = resultScreen.textContent;
        currentOperator = '';
        num2 = '';
    }
}

function calculate() {
    console.log(num1, currentOperator, num2);
    const result = operate(currentOperator, num1, num2);
    resultScreen.textContent = result;
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
