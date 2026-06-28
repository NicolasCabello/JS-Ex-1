const botonMas = document.querySelector('[id="Boton+"]');
const botonMenos = document.querySelector('[id="Boton-"]');

precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;
valorTotalSpan.innerHTML = 0;

function actualizarTotal(nuevaCantidad) {
  cantidadSpan.innerHTML = nuevaCantidad;
  valorTotalSpan.innerHTML = precio * nuevaCantidad;
}

botonMas.onclick = function () {
  const cantidadActual = Number(cantidadSpan.innerHTML);
  actualizarTotal(cantidadActual + 1);
};

botonMenos.onclick = function () {
  const cantidadActual = Number(cantidadSpan.innerHTML);
  if (cantidadActual > 0) {
    actualizarTotal(cantidadActual - 1);
  }
};
