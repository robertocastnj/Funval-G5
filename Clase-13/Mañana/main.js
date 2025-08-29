/* let n_1 = parseFloat(prompt('Ingrese un número a multiplicar entero positivo:'))
let n_2 = parseFloat(
  prompt('Ingrese otro número a multiplicar entero positivo:')
)
if (Number.isInteger(n_1) && n_1 > 0 && Number.isInteger(n_2) && n_2 > 0) {
  let res = n_2
  for (i = 1; i < n_1; i++) {
    res = res + n_2
  }
  alert(
    'El resultado de multiplicar ' + n_1 + ' por ' + n_2 + ' es igual a ' + res
  )
} else {
  alert('No es un número entero positivo')
}
 */

let n = parseFloat(prompt('Ingrese un número entero positivo:'))

if (Number.isInteger(n) && n > 0) {
  let prim = 1
  let mensaje = prim + ','

  alert(
    'El resultado de multiplicar ' + n_1 + ' por ' + n_2 + ' es igual a ' + res
  )
} else {
  alert('No es un número entero positivo')
}
