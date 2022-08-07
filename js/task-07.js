const inputEl = document.querySelector("#font-size-control");
inputEl.addEventListener('input', onChangeInput);
const spanEl = document.querySelector("#text");

function onChangeInput(event) {
    console.dir(event.target.value)
    spanEl.style.fontSize = `${event.target.value}px`;
    
};
