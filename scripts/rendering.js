// CATCHING UL -----> RENDER PRODUCTS
const ulProducts = document.querySelector("#mainList");

function renderProducts(array) {
  ulProducts.innerHTML = "";
  array.forEach((element, index) => {
    const tagLi = document.createElement("li");
    tagLi.classList.add("container-product");
    const tagDiv1 = document.createElement("div");
    tagDiv1.classList.add("li-img");
    const tagImg = document.createElement("img");
    const tagDiv2 = document.createElement("div");
    tagDiv2.classList.add("li-content");
    const tagDiv3 = document.createElement("div");
    tagDiv3.classList.add("li-tags");
    const tagSmall1 = document.createElement("small");
    tagSmall1.classList.add("tags");
    const tagSmall2 = document.createElement("small");
    tagSmall2.classList.add("tags");
    const tagP1 = document.createElement("p");
    tagP1.classList.add("titles-cards");
    const tagDiv4 = document.createElement("div");
    tagDiv4.classList.add("li-buy");
    const tagP2 = document.createElement("p");
    tagP2.classList.add("price");
    const tagButton = document.createElement("button");
    tagButton.classList.add("button-buy");

    tagImg.src = element.img;
    tagSmall1.innerText = element.band;
    tagSmall2.innerText = element.year;
    tagP1.innerText = element.title;
    tagP2.innerText = element.price.toFixed(2);
    tagButton.innerText = "Comprar";
    tagButton.id = index;

    tagLi.append(tagDiv1, tagDiv2, tagP1, tagDiv4);
    tagDiv1.appendChild(tagImg);
    tagDiv2.append(tagDiv3, tagP1, tagDiv4);
    tagDiv3.append(tagSmall1, tagSmall2);
    tagDiv4.append(tagP2, tagButton);

    ulProducts.append(tagLi);
  });
}
