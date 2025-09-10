/* fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })

async function darData() {
  let respuesta = await fetch('https://jsonplaceholder.typicode.com/albums')
  let datito = await respuesta.json()
  console.log(datito)
}

darData() */

const btnappear = document.getElementById('btn')
const listaProveedores = document.getElementById('lista-proveedores')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((proveedor) => {
      const proveedorElement = document.createElement('div')
      proveedorElement.className = 'bg-gray-700 p-4 rounded-lg w-full'
      const proveedortitle = document.createElement('div')
      proveedortitle.className = 'flex justify-between items-start mb-2'
      const ProveedorName = document.createElement('h3')
      ProveedorName.className = 'font-bold text-lg text-white'
      ProveedorName.textContent = `Nombre de proveedor: ${proveedor.name}`
      proveedortitle.appendChild(ProveedorName)
      const proveedorEmpresa = document.createElement('span')
      proveedorEmpresa.className =
        'bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded'
      proveedorEmpresa.textContent = `Empresa: ${proveedor.company.name}`
      proveedortitle.appendChild(proveedorEmpresa)
      proveedorElement.appendChild(proveedortitle)
      const Proveedorslogan = document.createElement('p')
      Proveedorslogan.className = 'text-gray-300 mb-3'
      Proveedorslogan.textContent = proveedor.company.catchPhrase
      proveedorElement.appendChild(Proveedorslogan)
      listaProveedores.appendChild(proveedorElement)
    })
  })

btnappear.addEventListener('click', function () {
  if (listaProveedores.classList.contains('hidden')) {
    listaProveedores.classList.replace('hidden', 'grid')
    btnappear.textContent = 'Ocultar Proveedores'
  } else if (listaProveedores.classList.contains('grid')) {
    listaProveedores.classList.replace('grid', 'hidden')
    btnappear.textContent = 'Mostrar Proveedores'
  }
})
