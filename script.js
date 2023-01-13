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
    whatMathAreWeDoing = 'add';
    doingSomeMath = true;
    resetInput = true;
};

const doMultiply = () => {

};

const doDivide = () => {

};

const doMinus = () => {

};

const decimalClick = () => {

};

const doEquals = () => {
    if (doingSomeMath) {
        operand2 = Number(document.getElementById('txtRunningTotal').value);

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