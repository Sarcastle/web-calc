const numberClick = (x) => {
    const currentValue = document.getElementById('data-current-operand').value;
    if (currentValue.length < 16) {
        if (currentValue === '0') {
            document.getElementById('data-current-operand').value = x;    
        } else {
            document.getElementById('data-current-operand').value += x;
        }
    }
};

const acClick = () => {
    document.getElementById('data-current-operand').value = '0';
};

