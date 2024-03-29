const display = document.querySelector(".app__display");
keys = document.getElementsByClassName("app__keypad-key");
let expression = "";
let canClear = false;

for (const key of keys) {
  const keyText = key.innerText;
  const opp = "%÷x-+";
  key.addEventListener("click", (event) => {
    if (canClear) {
      clear();
      canClear = false;
    }

    if (keyText == "C") {
      clear();
      canClear = false;
    } else if (keyText == "+/-") {
      display.innerText = `-${display.innerText}`;
      expression = "-" + expression;
    } else if (keyText == "=") {
      expression = expression.replace("x", "*");
      try {
        display.innerText = eval(expression);
      } catch {
        display.innerText = "ERROR";
      } finally {
        expression = "";
        canClear = true;
      }
    } else if (opp.includes(keyText)) {
      display.innerText = "";
      expression += keyText;
    } else {
      display.innerText += keyText;
      expression += keyText;
    }
  });
}

function clear() {
  display.innerText = "";
  expression = "";
}
