//Seleccionamos el elemento
const button1 = document.querySelector("#btn-1");
const button2 = document.querySelector("#btn-2");
const button3 = document.querySelector("#btn-3");
const button4 = document.querySelector("#btn-4");
const button5 = document.querySelector("#btn-5");
const button6 = document.querySelector("#btn-6");
const box = document.querySelector("#caja");

//Realizamos la acción por medio de un click y la función para que cambie de color 
button1.addEventListener("click", function changeRed(e) {
  caja.style.backgroundColor = button1.style.backgroundColor;
});
button2.addEventListener("click", function changeOrange(e) {
  caja.style.backgroundColor = button2.style.backgroundColor;
});
button3.addEventListener("click", function changeYellow(e) {
  caja.style.backgroundColor = button3.style.backgroundColor;
});
button4.addEventListener("click", function changeGreen(e) {
  caja.style.backgroundColor = button4.style.backgroundColor;
});
button5.addEventListener("click", function changeBlue(e) {
  caja.style.backgroundColor = button5.style.backgroundColor;
});
button6.addEventListener("click", function changePink(e) {
  caja.style.backgroundColor = button6.style.backgroundColor;
});







