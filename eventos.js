const constante = document.getElementById("container");
const boton = document.getElementById("saludar");

function alertaDiv(event) {
  alert("Hola soy el div");
}

function alertaBoton() {
  alert("Hola soy el botón");
  event.stopPropagation();
}

constante.addEventListener("click",alertaDiv);
boton.addEventListener("click",alertaBoton);