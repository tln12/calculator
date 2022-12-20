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
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.output-display');
const equal = document.querySelector('#equal-sign');

function calculate(){
    let firstNum = 0;
    let secondNum = 0;
    let result;
    let operator;
    let firstNumSet = false;

    digits.forEach(button => {
        button.addEventListener('click', () => {

            if (typeof operator == 'undefined'){
                firstNum += button.textContent;

                console.log(`First Num: ${Number(firstNum)}`);
            } else if (typeof operator !== 'undefined'){
                secondNum += button.textContent;

                console.log(`Second Num: ${Number(secondNum)}`);
            }
        });
    });

    operators.forEach(button => {
        button.addEventListener('click', () => {
            operator = button.id;
            firstNumSet = true;

            console.log(operator);
        });
    });

    equal.addEventListener('click', () => {
        if(typeof operator != 'undefined' && firstNumSet){
            result = operate(operator, Number(firstNum), Number(secondNum));
            firstNum = result;
            secondNum = 0;
            operator = 'undefined';
            console.log(`RESULT: ${result} FIRSTNUM: ${firstNum} OPERATOR: ${operator}` );
        }
    });
}


calculate();