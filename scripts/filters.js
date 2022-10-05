// CATCHING BUTTONS FILTER

const btnAll = document.getElementById("btnAll");
const btnPop = document.getElementById("btnPop");
const btnMpb = document.getElementById("btnMpb");
const btnForro = document.getElementById("btnForro");
const btnSamba = document.getElementById("btnSamba");
const btnBaiao = document.getElementById("btnBaiao");
const btnRap = document.getElementById("btnRap");
const btnHipHop = document.getElementById("btnHipHop");
const btnRock = document.getElementById("btnRock");
const btnReggae = document.getElementById("btnReggae");
const btnCountry = document.getElementById("btnCountry");
const btnGospel = document.getElementById("btnGospel");
const btnPrice = document.getElementById("btnValue");
console.log(btnPrice.value);
function filterAlbuns() {
  btnAll.addEventListener("click", (event) => {
    event.preventDefault();
    renderProducts(products);
  });
  btnPop.addEventListener("click", (event) => {
    event.preventDefault();

    const filterPop = products.filter(
      (element) => element.category == 1 && element.price > btnPrice.value
    );

    renderProducts(filterPop);
  });
  btnMpb.addEventListener("click", (event) => {
    event.preventDefault();

    const filterMpb = products.filter((element) => element.category == 2);

    renderProducts(filterMpb);
  });
  btnForro.addEventListener("click", (event) => {
    event.preventDefault();

    const filterForro = products.filter((element) => element.category == 3);

    renderProducts(filterForro);
  });
  btnSamba.addEventListener("click", (event) => {
    event.preventDefault();

    const filterSamba = products.filter((element) => element.category == 4);

    renderProducts(filterSamba);
  });
  btnBaiao.addEventListener("click", (event) => {
    event.preventDefault();

    const filterBaiao = products.filter((element) => element.category == 5);

    renderProducts(filterBaiao);
  });
  btnRap.addEventListener("click", (event) => {
    event.preventDefault();

    const filterRap = products.filter((element) => element.category == 6);

    renderProducts(filterRap);
  });
  btnHipHop.addEventListener("click", (event) => {
    event.preventDefault();

    const filterHipHop = products.filter((element) => element.category == 7);

    renderProducts(filterHipHop);
  });
  btnRock.addEventListener("click", (event) => {
    event.preventDefault();

    const filterRock = products.filter((element) => element.category == 8);

    renderProducts(filterRock);
  });
  btnReggae.addEventListener("click", (event) => {
    event.preventDefault();

    const filterReggae = products.filter((element) => element.category == 9);

    renderProducts(filterReggae);
  });
  btnCountry.addEventListener("click", (event) => {
    event.preventDefault();

    const filterCountry = products.filter((element) => element.category == 10);

    renderProducts(filterCountry);
  });
  btnGospel.addEventListener("click", (event) => {
    event.preventDefault();

    const filterGospel = products.filter((element) => element.category == 11);

    renderProducts(filterGospel);
  });
}

filterAlbuns();

// function filterPrice(array, value) {
//   products.filter((element) => element < value);
//   return renderProducts(array);
// }
