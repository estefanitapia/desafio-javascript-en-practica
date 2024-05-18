//Seleccionamos el elemento
const button1 = document.querySelector("#btn-1");
const button2 = document.querySelector("#btn-2");
const button3 = document.querySelector("#btn-3");
const button4 = document.querySelector("#btn-4");
const button5 = document.querySelector("#btn-5");
const button6 = document.querySelector("#btn-6");
const box = document.querySelector("#caja");

//Realizamos la acción por medio de un click para que cambie de color
button1.addEventListener("click", changeRed);
button2.addEventListener("click", changeOrange);
button3.addEventListener("click", changeYellow);
button4.addEventListener("click", changeGreen);
button5.addEventListener("click", changeBlue);
button6.addEventListener("click", changePink);

//Función para que realice la acción de cambio de color del cuadro
function changeRed(e) {
  caja.style.backgroundColor = button1.style.backgroundColor;
}
function changeOrange(e) {
  caja.style.backgroundColor = button2.style.backgroundColor;
}
function changeYellow(e) {
  caja.style.backgroundColor = button3.style.backgroundColor;
}
function changeGreen(e) {
  caja.style.backgroundColor = button4.style.backgroundColor;
}
function changeBlue(e) {
  caja.style.backgroundColor = button5.style.backgroundColor;
}
function changePink(e) {
  caja.style.backgroundColor = button6.style.backgroundColor;
}
