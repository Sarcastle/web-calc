let runningTotal = 0;
let operand1 = 0;
let operand2 = 0;
let whatMathAreWeDoing = '';
let doingSomeMath = false;
let resetInput = false;

document.addEventListener('DOMContentLoaded', e => {
	document.getElementById('txtRunningTotal').value = '0';
});

const numberClick = (x) => {
    if (doingSomeMath) {
        if (resetInput) {
            document.getElementById('txtRunningTotal').value = x;
            resetInput = false;
        } else {
            document.getElementById('txtRunningTotal').value += x;
        }
    } else {
        const currentValue = document.getElementById('txtRunningTotal').value;
        if (currentValue.length < 16) {
            if (currentValue === '0') {
                document.getElementById('txtRunningTotal').value = x;
            } else {
                document.getElementById('txtRunningTotal').value += x;
            }
        }
    }
};

const acClick = () => {
    document.getElementById('txtRunningTotal').value = '0';
    runningTotal = 0;
    operand1 = 0;
    operand2 = 0;
    doingSomeMath = false;
    whatMathAreWeDoing = '';
    resetInput = false;
};

const doAddition = () => {
    operand1 = Number(document.getElementById('txtRunningTotal').value);
    doingSomeMath = true;
    resetInput = true;
    whatMathAreWeDoing = 'add';
};

const doMultiply = () => {
    operand1 = Number(document.getElementById('txtRunningTotal').value);
    doingSomeMath = true;
    resetInput = true;
    whatMathAreWeDoing = 'multiply';
};

const doDivide = () => {
    operand1 = Number(document.getElementById('txtRunningTotal').value);
    doingSomeMath = true;
    resetInput = true;
    whatMathAreWeDoing = 'divide';
};

const doMinus = () => {
    operand1 = Number(document.getElementById('txtRunningTotal').value);
    doingSomeMath = true;
    resetInput = true;
    whatMathAreWeDoing = 'subtract';
};

const decimalClick = () => {
    if (resetInput){
        document.getElementById('txtRunningTotal').value = '0.';
        resetInput = false;
    } else {
        const currentValue = document.getElementById('txtRunningTotal').value;
        if (currentValue.length < 16 && !currentValue.includes('.')) {
            document.getElementById('txtRunningTotal').value += '.';
        }
    }
};

const doEquals = () => {
    if (doingSomeMath) {
        operand2 = Number(document.getElementById('txtRunningTotal').value);
        const hasDecimals = operand1.toString().includes('.') || operand2.toString().includes('.');

        if (hasDecimals) {
            if (whatMathAreWeDoing === 'add') {
                runningTotal = bigDecimal.add(operand1, operand2);
            } else if (whatMathAreWeDoing === 'multiply') {
                runningTotal = bigDecimal.multiply(operand1, operand2);
            } else if (whatMathAreWeDoing === 'subtract') {
                runningTotal = bigDecimal.subtract(operand1, operand2);
            } else if (whatMathAreWeDoing === 'divide') {
                runningTotal = bigDecimal.divide(operand1, operand2);
            } else {
                console.log('all is lost!');
            }        
        } else {
            if (whatMathAreWeDoing === 'add') {
                runningTotal = operand1 + operand2;
            } else if (whatMathAreWeDoing === 'multiply') {
                runningTotal = operand1 * operand2;
            } else if (whatMathAreWeDoing === 'subtract') {
                runningTotal = operand1 - operand2;
            } else if (whatMathAreWeDoing === 'divide') {
                runningTotal = operand1 / operand2;
            } else {
                console.log('all is lost!');
            }
        }

        document.getElementById('txtRunningTotal').value = runningTotal;
        doingSomeMath = false;
    }
};

const doDelete = () => {
    const currentValue = document.getElementById('txtRunningTotal').value;
    if (currentValue !== '0') {
        if (currentValue.length === 1) {
            document.getElementById('txtRunningTotal').value = '0';
        } else {
            const newValue = currentValue.substring(0, currentValue.length - 1);
            document.getElementById('txtRunningTotal').value = newValue;
        }
    }
};