/* // Crear 7 variables con 7 diferentes tipos de datos primitivos
let a = 10
let b = '10'

resultado = a == b
console.log(resultado)
resultado = a === b
console.log(resultado)

let edad = 18
console.log('edad +18', edad >= 18)
console.log('edad -18', edad < 18)

let x = 15
let y = 20
console.log('x>y', x > y)
console.log('x<y', x < y)

 */

let nombre = prompt('Por favor, ingresa tu nombre:')
let edad = parseInt(prompt('Por favor, ingresa tu edad:'))
let estaca = prompt('Por favor, ingresa el nombre de tu estaca:')

let mensaje =
  edad >= 18
    ? estaca === 'miraflores' ||
      estaca === 'MIRAFLORES' ||
      estaca === 'MIraFLOres'
      ? `Hola ${nombre}, sea Bienvenido al sistema`
      : `Hola ${nombre}, se encuentra en la estaca equivocada`
    : `Hola ${nombre}, no tienes acceso`

console.log(mensaje)
alert(mensaje)
