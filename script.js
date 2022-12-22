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
    if (b==0) {
        return "yikes..";
    }
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

function clearAll(){
    firstNum = "";
    secondNum = "";
    firstNumSet = false;
    display.textContent = 0;
}

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.output-display');
const equal = document.querySelector('#equal-sign');
const clear = document.querySelector('#clear-btn');

let firstNum = "";
let secondNum = "";
let result;
let operator;
let firstNumSet = false;
let calculationDone = false;

clear.addEventListener('click', clearAll());

digits.forEach(button => {
    button.addEventListener('click', () => {
        if (!firstNumSet || operator == ""){
            if(calculationDone) {
                firstNum = "";
            }
            firstNum += button.textContent;
            display.textContent = Number(firstNum);
            console.log(`Digits First Num: ${Number(firstNum)}`);
        } else {
            secondNum += button.textContent;
            display.textContent = Number(secondNum);
            console.log(`Digits Second Num: ${Number(secondNum)}`);
        }
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        
        // 12 + 7 +
        if(firstNumSet && secondNum != "")
        {
            result = operate(operator, Number(firstNum), Number(secondNum));
            display.textContent = result;
            if (typeof result != Number) calculationDone = true;    
            firstNum = result;
            secondNum = "";
            console.log(`Operators First Num: ${firstNum}`);
            console.log(`Operators Second Num: ${secondNum}`);
        }

        // 12 +
        // +
        // 12 ++
        operator = button.id;
        firstNumSet = true;

        console.log(operator);
    });
});

equal.addEventListener('click', () => {
    // (12 + 7) + 5 =
    if(firstNumSet && secondNum != "" && operator != ""){
        result = operate(operator, Number(firstNum), Number(secondNum));
        firstNum = result;
        secondNum = "";
        operator = "";
        display.textContent = result;
        calculationDone = true;
        console.log(`RESULT: ${result} FIRSTNUM: ${firstNum} OPERATOR: ${operator}` );
    }
    // 12 + =
    else {
        console.log("Do nothing.")
        operator = "";
        console.log(operator);
    }
});
