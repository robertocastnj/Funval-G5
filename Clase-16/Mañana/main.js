let contenedor = document.querySelector('.container')
const h2de = contenedor.querySelector('.delete')

contenedor.removeChild(h2de)

const h1 = document.createElement('h1')
h1.textContent = 'Halo 2'

const imagen = document.createElement('img')
imagen.setAttribute(
  'src',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZ7-kCsgwv5kIxx4iPuKic2ehuKAVRoqFkw&s'
)

const descripcion = document.createElement('p')
descripcion.textContent = 'Es el juego de Halo para xbox'

const boton = document.createElement('button')
boton.textContent = 'Comprar ahora'

contenedor.appendChild(h1)
contenedor.appendChild(imagen)
contenedor.appendChild(descripcion)
contenedor.appendChild(boton)
