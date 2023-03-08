let nombre = prompt("Ingrese un nombre:");

let contenedor_nombre = (document.getElementById("nombre").innerText = nombre);

document.querySelector(".btn").onclick = function () {
  let texto_ingresado = document.getElementById("texto_ingresado").value;
  document.querySelector(".contenedor").textContent = texto_ingresado;
};
