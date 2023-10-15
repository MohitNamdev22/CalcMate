let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

//Added Backspace Functionality
function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}  

function calculateResult() {
  console.log(displayValue)
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function setDecimalPlaces(decimalPlaces) {
  displayValue = Number(displayValue).toFixed(decimalPlaces);
  document.getElementById('display').value = displayValue;
}
