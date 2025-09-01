const estudiantes = [
  { nombre: "Juan Pérez", edad: 20, pais: "México", notas: [80, 90, 85] },
  { nombre: "María López", edad: 22, pais: "Argentina", notas: [70, 75, 72] },
  { nombre: "Carlos Ramírez", edad: 21, pais: "Chile", notas: [88, 92, 95] },
  { nombre: "Ana Torres", edad: 19, pais: "Perú", notas: [65, 70, 68] },
  { nombre: "Luis Gómez", edad: 23, pais: "Colombia", notas: [90, 93, 97] },
  { nombre: "Fernanda Ruiz", edad: 20, pais: "Bolivia", notas: [85, 80, 88] },
  { nombre: "Pedro Silva", edad: 24, pais: "Uruguay", notas: [60, 65, 70] },
  { nombre: "Sofía Castro", edad: 22, pais: "Ecuador", notas: [95, 92, 96] },
  {
    nombre: "Andrés Fernández",
    edad: 21,
    pais: "Venezuela",
    notas: [78, 82, 80],
  },
  { nombre: "Camila Díaz", edad: 20, pais: "Paraguay", notas: [88, 85, 90] },
  { nombre: "Rodrigo Morales", edad: 23, pais: "México", notas: [70, 75, 72] },
  { nombre: "Valentina Rojas", edad: 19, pais: "Chile", notas: [98, 95, 99] },
  {
    nombre: "Martín Herrera",
    edad: 22,
    pais: "Argentina",
    notas: [85, 87, 83],
  },
  { nombre: "Daniela Paredes", edad: 21, pais: "Perú", notas: [90, 92, 89] },
  { nombre: "Jorge Mendoza", edad: 24, pais: "Colombia", notas: [60, 62, 65] },
  { nombre: "Lucía Aguilar", edad: 20, pais: "Bolivia", notas: [80, 85, 82] },
  { nombre: "Diego Vargas", edad: 23, pais: "Uruguay", notas: [75, 70, 72] },
  { nombre: "Isabella León", edad: 19, pais: "Ecuador", notas: [92, 94, 90] },
  {
    nombre: "Mateo Castillo",
    edad: 21,
    pais: "Venezuela",
    notas: [65, 60, 68],
  },
  { nombre: "Gabriela Soto", edad: 22, pais: "Paraguay", notas: [99, 97, 100] },
];

function obtenerProm(arrayObjetos) {
  let sum = 0;
  arrayObjetos.forEach((nota) => {
    sum += nota;
  });

  return sum / arrayObjetos.length;
}

function filtrarPorPromedioBajo(arrayObjetos) {
  return arrayObjetos.filter((elemento) => {
    const promedio = obtenerProm(elemento.notas);
    return promedio < 51;
  });
}

const estudiantesConPromedioBajo = filtrarPorPromedioBajo(estudiantes);
console.log(estudiantesConPromedioBajo);
