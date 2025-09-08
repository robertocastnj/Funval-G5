/* 
    guardar en local storage un array de 
    fanaticos =[{grupo:"BTS",años:2},{grupo:"Real madrid",años:5},{grupo:"kny",años:15}]
    y deberan traerlo y actualizarlo agregando un fanatico mas {grupo:"dota 2",años:5}
    y devolverlo al local storage
*/
let fanaticos = [
  { grupo: 'BTS', años: 2 },
  { grupo: 'Real madrid', años: 5 },
  { grupo: 'kny', años: 15 },
]

localStorage.setItem('fans', JSON.stringify(fanaticos))

let fansobtenidos = JSON.parse(localStorage.getItem('fans'))

const nuevofan = {
  grupo: 'dota 2',
  años: 5,
}
const todosLosFans = [...fansobtenidos, nuevofan]
console.log(todosLosFans)
localStorage.setItem('fansactualizados', JSON.stringify(todosLosFans))
