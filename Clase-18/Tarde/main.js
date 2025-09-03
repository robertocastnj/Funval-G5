/* let matriz2D = [
  [7, 2, 3],
  [4, 5, 6],
  [1, 8, 9]
];
let diag_prin=0;
let diag_inv=0;

for (let i = 0; i < matriz2D.length; i++) {
  diag_prin+=matriz2D[i][i]
  diag_inv+=matriz2D[i][matriz2D.length-(i+1)]  
}

console.log(diag_prin)
console.log(diag_inv) */

let estudiantes = [
  {
    nombre: "Juan",
    edad: 28,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Pedro",
    edad: 20,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Santiago",
    edad: 65,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Ricardo",
    edad: 16,
    notas: [23, 34, 45, 67, 89],
  },
];

let mayores = [];

for (let index = 0; index < estudiantes.length; index++) {
  if (estudiantes[index].edad >= 18) {
    mayores[index] = estudiantes[index].nombre;
  }
}

console.log(mayores);
