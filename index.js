const displayScreen = document.getElementById("displayEl");
const numericKeys = document.querySelectorAll(".numKey");
const operationKeys = document.querySelectorAll(".operatorKey");
const evalKey = document.querySelector(".evalKey");
const resetKey = document.querySelector(".resetKey");
numericKeys.forEach((numKey) => {
  numKey.addEventListener("click", () => {
    if (displayScreen.value === "0") {
      displayScreen.value = numKey.value;
    } else {
      displayScreen.value += numKey.value;
    }
  });
});
operationKeys.forEach((assignKey) => {
  assignKey.addEventListener("click", () => {
    displayScreen.value += assignKey.value;
  });
});
evalKey.addEventListener("click", () => {
  const result = eval(displayScreen.value);
  displayScreen.value = result;
});
resetKey.addEventListener("click", () => {
  displayScreen.value = 0;
});
