const valueDisplay = document.querySelector(".num");
const interval = 1000;

let starValue = 0;
const endValue = parseInt(valueDisplay.getAttribute("data-val"));

const duration = Math.floor(interval / endValue);

let counter = setInterval(function() {
  starValue += 1;
  valueDisplay.textContent = starValue;
  if (starValue == endValue) {
    clearInterval(counter);
  }
}, duration);