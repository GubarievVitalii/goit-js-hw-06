const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);



const itemsAll = document.querySelectorAll("#categories > .item");

itemsAll.forEach(function (el) {
    const titleEl = el.querySelector("h2");
    const listEl = el.querySelector("ul");
    
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${listEl.children.length}`);
});
    
    
