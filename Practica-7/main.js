const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 },
];

/* Parte 1 */
productos.forEach((producto) => {
  console.log(`${producto.nombre}: $${producto.precio}`);
});

/* Parte 2 */
const productosDisponibles = productos.map((producto) => producto.nombre);

console.log("Productos disponibles:", productosDisponibles);

function verificarDisponibilidad(productoBuscado) {
  const estaDisponible = productosDisponibles.includes(productoBuscado);

  if (estaDisponible) {
    console.log(productoBuscado + " SÍ está disponible");
  } else {
    console.log(productoBuscado + " NO está disponible");
  }

  return estaDisponible;
}

/* Parte 3 */
const productosConDescuento = productos.map((producto) => ({
  nombre: producto.nombre,
  precio: producto.precio * 0.9,
}));

console.log("Productos con descuento:", productosConDescuento);

/* Parte 4 */
const productosBaratos = productos.filter((producto) => producto.precio < 100);

console.log("Productos de menos de $100:", productosBaratos);

/* Parte 5 */
const primerosDos = productos.slice(0, 2);

console.log("Primeros dos productos:", primerosDos);

/* Parte 6 se copio el array porque se modificaba el original */
let ordenados = productos;

ordenados = ordenados.sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados:", ordenados);

/* Parte 7 */
let productosInvertidos = ordenados;
productosInvertidos = productosInvertidos.reverse();
console.log("Productos ordenados invertidos:", productosInvertidos);
