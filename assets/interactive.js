/*memory cache */

const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false //kind of flag
};

const buttons = document.querySelectorAll(".button")

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
};

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
};

function inputCalculator(digit){
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function inverseNumber(){
    if(calculator.displayNumber === '0'){
        return}
    calculator.displayNumber *= -1;
}

function handleOperator(operator){
    if (!calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        //set ulang display number ketika operator button being clicked
        calculator.displayNumber = '0';
    }
    else {
        alert("Operator sudah diterapkan, menunggu angka kedua!");
    }
}

function performCalculation(){
    if(calculator.firstNumber == null || calculator.operator == null){
        alert ("Angka pertama atau operator belum dipilih!");
        return
    }
    let result = 0;
    if(calculator.operator === '+'){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    }
    else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    const history = {
        firstNumber:calculator.firstNumber,
        secondNumber:calculator.displayNumber,
        operator:calculator.operator,
        result:result
    }
    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
}

for (let button of buttons) {
    button.addEventListener('click', function(event) {
        const target = event.target; //get object of the clicked element

        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            console.log('disp updated through clear method')
            return;
        }

        else if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }
        
        else if(target.classList.contains('operator')){
            handleOperator(target.innerText);
            updateDisplay();
            return;
        }
        
        else if(target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return;
        }

        console.log(target);
        inputCalculator(target.innerText);
        console.log('disp updated through ordinary method');
        updateDisplay();
})}
