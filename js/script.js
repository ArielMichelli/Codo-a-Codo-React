// ======== Clase 1 , 2 y 3 ========

// let nombre = prompt("Ingrese un nombre:");
let nombre = "prompt deshabilitado ;) "

let contenedor_nombre = (document.getElementById("nombre").innerText = nombre);

document.querySelector(".btn").onclick = function () {
  let texto_ingresado = document.getElementById("texto_ingresado").value;
  document.querySelector(".contenedor").textContent = texto_ingresado;
};

// ======== Clase 4 ========

class Button {
  constructor(parentID, text) {
    this.parentID = parentID;
    this.text = text;
  }
  render() {
    let myApp = document.getElementById(this.parentID);
    const myButtonHTML = myApp.innerHTML + "<button> " + this.text + "</button>"
    myApp.innerHTML = myButtonHTML;
  }
}

class Input {
  constructor(parentID, type) {
    this.parentID = parentID;
    this.type = type;
  }

  render(placeholder = "PorDefecto") {
    let myApp = document.getElementById(this.parentID);
    const myInputHTML = myApp.innerHTML + "<input type=" + this.type + " " + "placeholder=" + placeholder + ">";
    myApp.innerHTML = myInputHTML;
  }
}

let boton1 = new Button("contenedor__clase4", "hola").render();
let boton2 = new Button("contenedor__clase4", "chau").render();
let myInput = new Input("contenedor__clase4", "text").render();
let myInput2 = new Input("contenedor__clase4", "text").render("placeholder1");
let myInput3 = new Input("contenedor__clase4", "text").render("placeholder2");

// ======== Clase 5 ========

let arrayDeBotones = ["Login", "Ingresar", "Salir", "Volver", "Saludar", "Registrar"];

let arrayDeInputs = ["text", "chocho", "checkbox", "date", "radio", "range","wek"]


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
