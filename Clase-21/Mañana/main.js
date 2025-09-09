/* function ejecutarFuncion(funcion) {
  funcion()
}

function saludar() {
  console.log('¡Hola mundo!')
}

ejecutarFuncion(saludar)

ejecutarFuncion(() => {
  console.log('¡Hola mundo!')
})
 */

const estudiantes = [
  { nombre: 'Ana', edad: 20, nota: 85 },
  { nombre: 'Luis', edad: 22, nota: 92 },
  { nombre: 'Carlos', edad: 21, nota: 78 },
  { nombre: 'Marta', edad: 20, nota: 88 },
]
/* ----------------------MAP------------------------------------
Crea un nuevo arreglo aplicando una función a cada elemento del arreglo original.

Parámetros que recibe:
array.map((element, index, array) => {
  // return nuevo valor})

element: elemento actual

index: (opcional) índice del elemento

array: (opcional) arreglo original

Retorna:

Un nuevo array con los elementos modificados. */

const evaluados = estudiantes.map((est) => ({
  ...est,
  estado: est.nota >= 80 ? 'Aprobado' : 'Reprobado',
}))

console.log(evaluados)

/*----------------------Reduce-------------------------

Reduce todos los elementos del arreglo a un solo valor

Parámetros que recibe:
array.reduce((acumulador, elemento, index, array) => {
  // return nuevo acumulador
}, valorInicial)

acumulador: valor acumulado (empieza en valorInicial)
elemento: elemento actual
valorInicial: valor con el que empieza (obligatorio si el array está vacío)

Retorna:
Un valor único (número, string, objeto, etc.) */

const conteoPorEdad = estudiantes.reduce((acc, est) => {
  acc[est.edad] = (acc[est.edad] || 0) + 1
  return acc
}, {})

console.log(conteoPorEdad)

/* -----------------------Find-----------------------------------

Busca el primer elemento que cumpla con una condición y lo retorna.

Parámetros que recibe:
array.find((element, index, array) => {
  return condición;
})

element: elemento actual
index y array: (opcionales)

Retorna:
El primer elemento que cumpla la condición, o undefined si no encuentra ninguno. */

const perfecto = estudiantes.find((est) => est.nota === 100)

console.log(perfecto)
