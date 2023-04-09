const decrementButton = document.getElementById("decrementButton");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");
const value = document.getElementById("value");

// for increment button
decrementButton.addEventListener("click", () => {
  const num = Number(value.innerText);
  if (num > 0) {
    value.innerText = num - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// for increment button

incrementButton.addEventListener("click", () => {
  const num = Number(value.innerText);
  if (num >= 50) {
    alert("50+ value not allowed");
  } else {
    value.innerText = num + 1;
  }
});

// for reset button

resetButton.addEventListener("click", () => {
  value.innerText = 0;
});
