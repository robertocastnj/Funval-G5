/* function factorial() {
  while (true) {
    const input = prompt(`Ingrese un numero entero y positivo`)

    const numero = Number(input)

    if (isNaN(numero)) {
      alert('Opción no valida')
    } else if (!Number.isInteger(numero)) {
      alert('Opción no valida')
    } else if (numero < 0) {
      alert('Opción no valida')
    } else {
      let factorial = 1

      for (let index = 1; index <= numero; index++) {
        factorial = factorial * index
      }
      alert(numero + '!= ' + factorial)
      return null
    }
  }
}

factorial() */
let order = prompt('¿De que desea su jugo?:').toLowerCase()
let frutas = ['manzana', 'pera', 'banana', 'frutilla']

for (let index = 0; index < frutas.length; index++) {
  if (order === frutas[index]) {
    alert('Tu jugo se esta preparando')
  } else {
    if (index === frutas.length - 1) {
      alert('Ya no tengo de esa fruta')
    }
  }
}
