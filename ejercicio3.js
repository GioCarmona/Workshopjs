/* Crear un elemento de una lista*/
const list = document.getElementById("my-list");
const item = document.createElement("li");
item.textContent = "Nuevo elemento de la lista";
list.appendChild(item);

