/* var nombre = 'Juan'
let ciudad = 'Madrid'
const profesion = 'Desarrollador'

let concatenar =
  nombre + ' vive en ' + ciudad + ' y trabaja como ' + profesion + '.'
console.log(concatenar)

let template = `${nombre} vive en ${ciudad} y trabaja como ${profesion}.`
console.log(template)
 */
const estudiantes = ['Pedro', 'Geraldine', 'Santiago', 'Jesus']

const listaEstudiantes = document.querySelector('#lista-estudiantes')

estudiantes.forEach((estudiante) => {
  const li = document.createElement('li')
  li.textContent = estudiante
  listaEstudiantes.appendChild(li)
})
