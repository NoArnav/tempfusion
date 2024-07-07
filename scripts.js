function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const resultDiv = document.getElementById('result');

    if (inputTemp === '') {
        resultDiv.innerHTML = 'Please enter a temperature value.';
        return;
    }

    let celsius;

    switch (inputUnit) {
        case 'Celsius':
            celsius = parseFloat(inputTemp);
            break;
        case 'Fahrenheit':
            celsius = (parseFloat(inputTemp) - 32) * 5 / 9;
            break;
        case 'Kelvin':
            celsius = parseFloat(inputTemp) - 273.15;
            break;
        default:
            celsius = parseFloat(inputTemp);
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    resultDiv.innerHTML = `
        <p>${celsius.toFixed(2)} °C</p>
        <p>${fahrenheit.toFixed(2)} °F</p>
        <p>${kelvin.toFixed(2)} K</p>
    `;
}
