function clearInputs() {
    document.querySelectorAll('.calc-input, .calc-dropdown, .calc-slider').forEach(input => {
        if (input.type === 'range') {
            input.value = 50;
        } else {
            input.value = '';
        }
    });
    document.getElementById('calc-result').innerText = '0';
}

function performCalculation(operation) {
    let values = [];
    document.querySelectorAll('.calc-input').forEach(input => {
        let value = parseFloat(input.value) || 0;
        if (!isNaN(value)) values.push(value);
    });
    document.querySelectorAll('.calc-dropdown').forEach(select => {
        let value = parseFloat(select.value) || 0;
        if (!isNaN(value)) values.push(value);
    });
    document.querySelectorAll('.calc-slider').forEach(slider => {
        let value = parseFloat(slider.value) || 0;
        if (!isNaN(value)) values.push(value);
    });
    if (values.length === 0) {
        document.getElementById('calc-result').innerText = 'Please enter/select values';
        return;
    }
    let result;
    switch (operation) {
        case 'add':
            result = values.reduce((acc, num) => acc + num, 0);
            break;
        case 'subtract':
            result = values.slice(1).reduce((acc, num) => acc - num, values[0]);
            break;
        case 'multiply':
            result = values.reduce((acc, num) => acc * num, 1);
            break;
        case 'divide':
            result = values.slice(1).reduce((acc, num) => (num !== 0 ? acc / num : NaN), values[0]);
            break;
        case 'percentage':
            result = (values[0] / 100) * values[1];
            break;
        case 'average':
            result = values.reduce((acc, num) => acc + num, 0) / values.length;
            break;
        case 'max':
            result = Math.max(...values);
            break;
        case 'min':
            result = Math.min(...values);
            break;
        default:
            result = 0;
    }
    document.getElementById('calc-result').innerText = result;
}
document.querySelectorAll('#operations button').forEach(button => {
    button.addEventListener('click', () => {
        let operation = button.textContent.toLowerCase();
        performCalculation(operation);
    });
});
clearInputs();
