function ejecutarFuncion(funcion) {
  funcion()
}

function saludar() {
  console.log('¡Hola mundo!')
}

ejecutarFuncion(saludar)

ejecutarFuncion(() => {
  console.log('¡Hola mundo!')
})
