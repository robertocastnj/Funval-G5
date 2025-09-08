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

const evaluados = estudiantes.map((est) => ({
  ...est,
  estado: est.nota >= 80 ? 'Aprobado' : 'Reprobado',
}))

console.log(evaluados)

const conteoPorEdad = estudiantes.reduce((acc, est) => {
  acc[est.edad] = (acc[est.edad] || 0) + 1
  return acc
}, {})

console.log(conteoPorEdad)

const perfecto = estudiantes.find((est) => est.nota === 100)

console.log(perfecto)
