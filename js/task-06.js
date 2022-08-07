const inputEl = document.querySelector("#validation-input");


const onChangeInput = (event) => {
    if (event.target.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");

        return;
    }
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
}

inputEl.addEventListener('blur', onChangeInput);