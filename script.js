const display = document.getElementById("display");

function appendValue(value) {
  // Sirf wahi value add hogi jo button dabaya gaya hai
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;

    // Convert sin, cos, tan from degrees to radians
    expression = expression.replace(/Math\.sin\(([^)]+)\)/g,
      (match, p1) => `Math.sin((${p1}) * Math.PI / 180)`);
    expression = expression.replace(/Math\.cos\(([^)]+)\)/g,
      (match, p1) => `Math.cos((${p1}) * Math.PI / 180)`);
    expression = expression.replace(/Math\.tan\(([^)]+)\)/g,
      (match, p1) => `Math.tan((${p1}) * Math.PI / 180)`);

    // Evaluate safely
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
