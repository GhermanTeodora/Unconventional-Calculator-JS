const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //when declaring an array we add [] empty or not

function getUserNumberInput() {
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operaionIdentifier,
    previousResult,
    operationNumber,
    newResult
) {
    //this whole thing kept repeating itself so we made a function
    const logEntry = {
        operation: operaionIdentifier,
        previousResult: previousResult,
        number: operationNumber,
        result: newResult
    }; //object
    logEntries.push(logEntry); //pushes a new element into the array
    console.log(logEntries); //built in command which allows us to print sumn in the developer tools console
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if ( //we dont continue (return;) if all conditions are not met -> we wanna use this
        calculationType !== 'ADD' &&
        calculationType !== 'SUBSTRACT' &&
        calculationType !== 'MULTIPLT' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber 
    ) {
        return;
    }

    // if (
    //     //we go into it if at least one of the conditions are met -> we dont wanna use this
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBSTRACT' ||
    //     calculationType === 'MULTIPLT' ||
    //     calculationType === 'DIVIDE'
    // ) {
    //   //the long ass ifs would be inserted here but we no like it 
    // }

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
