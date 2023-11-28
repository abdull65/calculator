const displayScreen = document.getElementById("displayEl");
const numericKeys = document.querySelectorAll(".numKey");
const operationKeys = document.querySelectorAll(".operatorKey");
const evalKey = document.querySelector(".evalKey");
const resetKey = document.querySelector(".resetKey");
const delKey = document.querySelector(".delKey");
const inputArr = [];
numericKeys.forEach((numKey) => {
  numKey.addEventListener("click", () => {
    if (displayScreen.value === "0") {
      displayScreen.value = numKey.value;
    } else {
      displayScreen.value += numKey.value;
    }
    inputArr.push(numKey.value)
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
delKey.addEventListener("click", () => {
inputArr.pop()
displayScreen.value = inputArr.join("")
if(displayScreen.value === "") {
  displayScreen.value = "0"
}
})
