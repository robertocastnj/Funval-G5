/* let estudiantesFunval = [
  'Pedro',
  'David',
  'Nefi',
  'Santiago',
  'Roberto',
  'Mario',
]
let position = []
for (let index = 0; index < estudiantesFunval.length; index++) {
  if (
    estudiantesFunval[index] == 'Luis' ||
    estudiantesFunval[index] == 'Santiago'
  ) {
    position.unshift(index)
  }
}
console.log('El hermano Luis se encuentra en la posición: ' + position)
 */

let notasEstudiante = [65, 44, 90, 10, 51, 0]

let prom = 0

for (let index = 0; index < notasEstudiante.length; index++) {
  prom = prom + notasEstudiante[index]
}

prom = prom / notasEstudiante.length

if (prom >= 51) {
  console.log('Felicidades aprovaste con: ' + prom)
} else {
  console.log('No has aprovado el curso, reprobaste con: ' + prom)
}
