function subtract() {
    let firstInputField = document.getElementById('firstNumber').value;
    let secondInputField = document.getElementById('secondNumber').value;

    let result = Number(firstInputField) - Number(secondInputField);

    let resulting = document.getElementById('result');
    resulting.textContent = result;
}