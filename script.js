let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

//Added Backspace Functionality

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = displayValue;
}

function calculateResult() {
  console.log(displayValue);
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
document.addEventListener("keydown", handleKeyboardInput);
function handleKeyboardInput(event) {
  const key = event.key;
  switch (key) {
    case "C":
      clearDisplay();
      break;
    case ".":
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      appendToDisplay(key);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
    case "**":
      appendToDisplay(key);
      break;
    case "Backspace":
      backspace();
      break;
    case "Enter":
      calculateResult();
      break;
  }
}
