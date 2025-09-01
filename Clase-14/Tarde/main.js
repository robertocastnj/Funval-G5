/* ---------------------OBJETOS--------------------- */

/* let computadora = {
  marca: "HP",
  Pocesador: "core i5",
  nucleos: "4",
  ram: "16gb",
  disco_solido: false,
};

console.log("La computadora tiene estado solido?: " + computadora.disco_solido);
console.log("La marca de la computadora es: " + computadora.marca);

computadora.teclado = true;
computadora.pantalla = "1024px Full HD";

delete computadora.nucleos;
 */

let listaEstudiantes = [
  {
    nombre: "Mario",
    Pais: "Argentina",
    notas: [20, 55, 78, 90, 12],
  },
  {
    nombre: "Nefi",
    Pais: "Mexico",
    notas: [100, 90, 78, 90, 0],
  },
  {
    nombre: "Santiago",
    Pais: "Argentina",
    notas: [70, 80, 77, 0, 11],
  },
  {
    nombre: "Geraldine",
    Pais: "Peru",
    notas: [20, 10, 0, 0, 100],
  },
  {
    nombre: "Jesus",
    Pais: "Colombia",
    notas: [70, 60, 80, 32, 22],
  },
];

/* Función para sacar el promedio de una lista de datos */
function promedio(lista) {
  let aux = 0;

  for (let index = 0; index < lista.length; index++) {
    aux = aux + lista[index];
  }

  const prom = aux / lista.length;

  return prom;
}

function aprobados(lista1) {
  let mensaje;

  for (let index = 0; index < lista1.length; index++) {
    aux = promedio(lista1[index].notas);
    if (aux >= 75) {
      mensaje = lista1[index].nombre + " con " + aux;
    }
  }
  return mensaje;
}

apro = aprobados(listaEstudiantes);

console.log(apro);
