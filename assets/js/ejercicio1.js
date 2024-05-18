/* Elementos input del Formulario */
const formulario = document.querySelector("#formulario");
const inputName = document.querySelector("#nombre");
const inputSubject = document.querySelector("#asunto");
const inputMessage = document.querySelector("#mensaje");
const inputBtn = document.querySelector("#botton");
/* Errores que apareceran como mensaje en los input */
const errorName = document.querySelector(".errorNombre");
const errorSubject = document.querySelector(".errorAsunto");
const errorMessage = document.querySelector(".errorMensaje");
/* Mensaje exitoso */
const successMessage = document.querySelector(".resultado");
/* Regex */
const regexName = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]/gim;
const regexSubject = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d\-.,!?¡¿]/gim;
const regexMessage = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d\-.,!?¡¿]/gim;
/* event = e */
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  /* Se captura el valor de los input en las variables*/
  let name = inputName.value;
  let subject = inputSubject.value;
  let message = inputMessage.value;

  inputValidator(name, subject, message);
});
/* Se valida información */
function inputValidator(name, subject, message) {
  const validName = regexName.test(name);
  const validSubject = regexSubject.test(subject);
  const validMessage = regexMessage.test(message);

  deleteError();

  if (!validName) {
    errorName.innerHTML =
      "El valor ingresado como nombre no es válido, ingréselo nuevamente.";
  }

  if (!validSubject) {
    errorSubject.innerHTML =
      "El valor ingresado como asunto no es válido, ingréselo nuevamente.";
  }

  if (!validMessage) {
    errorMessage.innerHTML =
      "El valor ingresado como mensaje no es válido, ingréselo nuevamente.";
  }

  if (validName && validSubject && validMessage) {
    deleteError();
    deleteInputs();

    /* Frase de éxito que aparecerá al enviar el mensaje */
    successMessage.innerHTML = "¡Mensaje enviado con éxito!";
  }
}
/* Borra los errores */
function deleteError() {
  errorName.innerHTML = "";
  errorSubject.innerHTML = "";
  errorMessage.innerHTML = "";
}
/* Limpia los inputs */
function deleteInputs() {
  inputName.value = "";
  inputSubject.value = "";
  inputMessage.value = "";
}
