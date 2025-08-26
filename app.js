const input = document.getElementById("amigo");
const btnAgregar = document.querySelector(".button-add");
const btnSortear = document.querySelector(".button-draw");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let amigos = [];

function agregarAmigo() {
  const nombre = input.value;
  if (nombre === "") {
    alert("Debes escribir el nombre de un amigo");
  } else {
    amigos.push(nombre);

    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
      const li = document.createElement("li");
      li.textContent = amigo;
      lista.appendChild(li);
    });
  }
  input.value = "";
}

function sortearAmigo() {
  resultado.innerHTML = "";
  if (amigos.length === 0) {
    resultado.innerHTML = "";
    alert("Debes agregar algunos amigos primero");
    return;
  }
  {
    let seleccion = Math.floor(Math.random() * amigos.length);

    const li = document.createElement("li");
    li.textContent = amigos[seleccion];
    resultado.appendChild(li);
  }
}

function reiniciarJuego() {
  amigos = [];
  lista.innerHTML = "";
  resultado.innerHTML = "";
}
