const resultScreen = document.querySelector('#screen');
const numKeys = document.querySelectorAll('#num-keys');
const operators = document.querySelectorAll('#operations');

numKeys.forEach(numKey => {
    numKey.addEventListener('click', clickNumber);
});

operators.forEach(operator => {
    operator.addEventListener('click', operateValues);
});

function clickNumber() {
    if (resultScreen.textContent === '0') {
        resultScreen.textContent = this.textContent;
    } else {
        resultScreen.textContent += this.textContent;
    } 
}

function operateValues() {
    console.log(this.textContent);
}
let num1;
let num2;

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
