const price = document.querySelector(".price-input");
const weight = document.querySelector(".weight-input");
const calculate = document.querySelector(".calculate-button");

calculate.addEventListener("click", (e) => {
  price.value = `${(weight.value * 5).toFixed(2)} AZN`;
});

weight.addEventListener("keyup", (e) => {
  price.value = `${(weight.value * 5).toFixed(2)} AZN`;
});
