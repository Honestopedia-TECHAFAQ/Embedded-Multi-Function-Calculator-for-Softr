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
                    result = values.slice(1).reduce((acc, num) => acc / num, values[0]);
                    break;
                case 'percentage':
                    result = (values[0] / 100) * values[1];
                    break;
                default:
                    result = 0;
            }
            document.getElementById('calc-result').innerText = result;
        }
