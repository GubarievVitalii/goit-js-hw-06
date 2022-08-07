function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
btnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor()
  document.body.style.backgroundColor = newColor;
  textColor.textContent = newColor;
}