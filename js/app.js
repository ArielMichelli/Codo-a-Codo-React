/////////////////////////// IMPORTS:
import Button from "./components/button.js";
import Input from "./components/input.js";
import Video from "./components/video.js"

// ================ Clase 1 , 2 y 3 ================

// let nombre = prompt("Ingrese un nombre:");
let nombre = "prompt deshabilitado ;) "

let contenedor_nombre = (document.getElementById("nombre").innerText = nombre);

document.querySelector(".btn").onclick = function () {
  let texto_ingresado = document.getElementById("texto_ingresado").value;
  document.querySelector(".contenedor").textContent = texto_ingresado;
};

// ================ Clase 4 ================

let boton1 = new Button("contenedor__clase4", "hola").render();
let boton2 = new Button("contenedor__clase4", "chau").render();
let myInput = new Input("contenedor__clase4", "text").render();
let myInput2 = new Input("contenedor__clase4", "text").render("placeholder1");
let myInput3 = new Input("contenedor__clase4", "text").render("placeholder2");

// ================ Clase 5 ================

let arrayDeBotones = ["Login", "Ingresar", "Salir", "Volver", "Saludar", "Registrar"];

let arrayDeInputs = ["text", "chocho", "checkbox", "date", "radio", "range", "wek"]


const RenderBtn = (contenedor, text) => {
  let myBtn = new Button(contenedor, text);
  myBtn.render()
}

const RenderInput = (type, placeholder) => {
  let myInput = new Input("inputs", type);
  myInput.render(placeholder)
}

arrayDeInputs.forEach(t => RenderInput(t));

let botonesFiltrados = arrayDeBotones.filter(e => e.length > 6);

arrayDeBotones.forEach(e => RenderBtn("botones", e));
botonesFiltrados.forEach(e => RenderBtn("botones__filtrados", e));

// ================ Clase 6 ================
let myVideo1 = new Video("videoID","https://www.w3schools.com/html/mov_bbb.mp4",400,400,"video/mp4");
myVideo1.render();