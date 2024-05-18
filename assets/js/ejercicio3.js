const firstNumber = document.querySelector("#valor1");
const secondNumber = document.querySelector("#valor2");
const btnAdd = document.querySelector("#btn-sumar");
const btnSubtract = document.querySelector("#btn-restar");
const result = document.querySelector(".resultado");

btnAdd.addEventListener("click", adittion);
function adittion(e) {
  let add = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  result.innerHTML = add;
}

btnSubtract.addEventListener("click", subtract);
function subtract(e) {
  let subtraction = parseInt(firstNumber.value) - parseInt(secondNumber.value);
  if (subtraction < 0) {
    subtraction = 0;
  }
  result.innerHTML = subtraction;
}
