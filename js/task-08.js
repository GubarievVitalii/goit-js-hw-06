const formEl = document.querySelector(".login-form");
formEl.addEventListener('submit', onChangeForm);

function onChangeForm(event) {
    event.preventDefault();
    const formArray = Array.from(document.querySelectorAll("input"));
    const formValueArray = formArray.map((element) => element.value);

    if (formValueArray.includes("")) {
        return alert('Усі поля треба заповнити!')
    };

    const formData = new FormData(event.currentTarget);
    const result = {};
    formData.forEach((value, name) => (result[name] = value));
    console.log(result);
    event.currentTarget.reset();
};
