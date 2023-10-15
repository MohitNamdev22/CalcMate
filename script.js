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
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

// Mode shift
let shiftOn = 0;
function shiftMode() {
  if (shiftOn == 0){
    document.querySelector('.buttons2').style.display = "grid";
    document.querySelector('.buttons').style.display = "none";
    shiftOn = 1;
  }else{
    document.querySelector('.buttons2').style.display = "none";
    document.querySelector('.buttons').style.display = "grid";
    shiftOn = 0;}
  }
