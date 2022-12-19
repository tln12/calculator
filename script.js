function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    switch(operator){
        case "+":
            return add(a,b);
            break;
        case "-": 
            return subtract(a,b);
            break;
        case "*": 
            return multiply(a,b);
            break;
        case "/": 
            return divide(a,b);
            break;
    }
}

const digits = document.querySelectorAll('.digit');
const display = document.querySelector('.output-display');
let displayValue = 0;

digits.forEach(button =>{
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});
