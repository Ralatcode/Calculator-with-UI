const resultScreen = document.querySelector('#screen');
const numKeys = document.querySelectorAll('#num-keys');

numKeys.forEach(numKey => {
    numKey.addEventListener('click', clickNumber);
});

function clickNumber() {
    if (resultScreen.textContent === '0') {
        resultScreen.textContent = this.textContent;
    } else {
        resultScreen.textContent += this.textContent;
    } 
    
    const displayValue = resultScreen.textContent;
    return displayValue;
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
