let counterValue = 0;
const btnDecrementEl = document.querySelector(`[data-action="decrement"]`);
const btnIncrementEl = document.querySelector(`[data-action="increment"]`);
const valueEl = document.querySelector("#value");

btnDecrementEl.addEventListener("click", clickBtnDecrementEl);
btnIncrementEl.addEventListener("click", clickBtnIncrementEl);

function clickBtnDecrementEl() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

function clickBtnIncrementEl() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};