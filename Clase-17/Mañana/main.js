/* let botoncito = document.querySelector('#btn')
let fiona = document.querySelector('#img')
const moonIcon = document.querySelector('#dia-btn')
const sunIcon = document.querySelector('#moon-btn')

botoncito.addEventListener('click', function () {
  if (botoncito.classList.contains('bg-blue-800')) {
    botoncito.classList.replace('bg-blue-800', 'bg-red-800')
    moonIcon.style.display = 'none'
    sunIcon.style.display = 'block'
    fiona.src =
      'https://i.pinimg.com/564x/5b/47/22/5b4722ec6103e5c34254f45e071d4cf0.jpg'
  } else {
    botoncito.classList.replace('bg-red-800', 'bg-blue-800')
    sunIcon.style.display = 'none'
    moonIcon.style.display = 'block'
    fiona.src =
      'https://i.pinimg.com/736x/17/11/42/171142be15ad76710183193d68084a3b.jpg'
  }
})
 */
let botoncito = document.querySelector('#btn')

botoncito.addEventListener('click', function (e) {
  e.preventDefault()
  const nombre = document.querySelector('#nombre').value
  const edad = document.querySelector('#edad').value
  const esMiembroSud = document.querySelector('#esMiembroSud').checked
  const datos = {
    nombre: nombre,
    edad: edad,
    esMiembroSud: esMiembroSud,
  }
  console.log('Datos a enviar:', datos)
  return datos
})
