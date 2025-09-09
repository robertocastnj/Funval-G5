/* console.log('Entregando la practica al profesor...')
console.log('Practica entregada')
console.log('Estudiando en la plataforma')
console.log('Hacer música')

console.log('Entregando la practica al profesor...')
setTimeout(() => {
  console.log('Practica revisada por el profesor')
}, 2000)

console.log('Estudiando en la plataforma')

console.log('Haciendo música')
 */

/* function misionero() {
  return new Promise((resolve, reject) => {
    console.log('Voy a la misión...')
    const queridoJuan = Math.random() < 0.3
    setTimeout(() => {
      if (queridoJuan) {
        resolve('Me selle en el templo')
      } else {
        reject('Seré ángel ministrante')
      }
    }, 2000)
  })
}

misionero()
  .then((sellamiento) => {
    console.log('Promesa cumplida:', sellamiento)
  })
  .catch((error) => {
    console.error('Promesa rota:', error)
  })
 */

let listaEstudiantes = [
  { nombre: 'Juan', Pais: 'Argentina', edad: 20 },
  { nombre: 'Harold', Pais: 'PERU', edad: 13 },
  { nombre: 'Charlie', Pais: 'Chile', edad: 14 },
  { nombre: 'CHENTE', Pais: 'Mexico', edad: 31 },
  { nombre: 'FAUSTO', Pais: 'BOLIVIA', edad: 17 },
  { nombre: 'MARIA', Pais: 'PERU', edad: 18 },
  { nombre: 'DIEGO', Pais: 'Peru', edad: 23 },
  { nombre: 'Martin' },
]
let superPromesa = new Promise((resolve, reject) => {
  let siLlego = true
  setTimeout(() => {
    if (siLlego) {
      resolve(listaEstudiantes)
    } else {
      reject('error 404 se cayo la base de datos :v')
    }
  }, 3000)
})

superPromesa
  .then((estudiantes) => {
    let filtrados = estudiantes.filter(
      (estudiante) =>
        estudiante.edad >= 18 && estudiante.Pais.toLowerCase() === 'peru'
    )

    console.log('Estudiantes mayores de edad de Perú:')
    console.log(filtrados)
  })
  .catch((error) => {
    console.error(error)
  })
