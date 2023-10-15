let displayValue = '';
let scientificMode = false;

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

function log(){
  displayValue = Math.log(displayValue);
  document.getElementById('display').value = displayValue;
}

function log2(){
  displayValue = Math.log2(displayValue);
  document.getElementById('display').value = displayValue;
}

function log10(){
  displayValue = Math.log10(displayValue);
  document.getElementById('display').value = displayValue;
}

function sin(){
  let radians = displayValue * Math.PI/180
  displayValue = Math.sin(radians);
  document.getElementById('display').value = displayValue;
}

function cos(){
  let radians = displayValue * Math.PI/180
  displayValue = Math.cos(radians);
  document.getElementById('display').value = displayValue;
}

function tan(){
  let radians = displayValue * Math.PI/180
  displayValue = Math.tan(radians);
  document.getElementById('display').value = displayValue;
}

function squareRoot(){
  displayValue = Math.sqrt(displayValue);
  document.getElementById('display').value = displayValue;
}

function toggleScientificMode(){
  if(scientificMode){
    document.getElementById('more').style.display = 'grid';
    document.getElementById("calculator").style.width = "80vw";
    document.getElementById("buttons").style.gridTemplateColumns = "repeat(3, 1fr)";
    document.getElementById("icon").classList.replace("fa-flask", "fa-xmark");
    scientificMode = false;
  } else {
    document.getElementById('more').style.display = 'none';
    document.getElementById("calculator").style.width = "auto";
    document.getElementById("buttons").style.gridTemplateColumns = "repeat(2, 1fr)";
    document.getElementById("icon").classList.replace("fa-xmark", "fa-flask");
    scientificMode = true;
  }
}