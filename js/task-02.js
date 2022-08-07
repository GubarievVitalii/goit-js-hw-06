const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const itemsEl = ingredients.map(el => {
  const li = document.createElement("li");
  li.textContent = el;
  li.classList.add("item")
  return li;
});
listEl.append(...itemsEl);

console.log(itemsEl);