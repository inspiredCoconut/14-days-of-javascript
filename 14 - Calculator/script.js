let displayValue = '0'; // Holds the current value of the display

function updateDisplay() {
  const e_display = document.getElementById('display');
  e_display.textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number.toString();
  } else {
    displayValue += number.toString();
  }
  updateDisplay();
}

function appendOperator(operator) {
  // Prevent appending multiple operators in a row
  const lastChar = displayValue[displayValue.length - 1];
  if ('+-*/'.includes(lastChar)) return;
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function backspace() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = '0';
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString(); // Evaluate the math expression
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}