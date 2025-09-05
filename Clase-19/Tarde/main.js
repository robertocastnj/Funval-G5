const heroes = [
  { nombre: "Iron Man", poder: "Armadura tecnológica", fuerza: 85 },
  { nombre: "Thor", poder: "Martillo Mjolnir", fuerza: 95 },
  { nombre: "Hulk", poder: "Fuerza sobrehumana", fuerza: 100 },
  { nombre: "Black Widow", poder: "Espionaje y combate", fuerza: 75 },
];

/* 1. Desestructuración del array */
const [primerHeroe, segundoHeroe, ...restoHeroes] = heroes;

console.log(primerHeroe);

/* 2. Crear nuevo array con spread operator */
const nuevoHeroe = {
  nombre: "Spider-Man",
  poder: "Telarañas",
  fuerza: 70,
};
const todosLosHeroes = [...heroes, nuevoHeroe];

console.log(todosLosHeroes);

/* 3. Desestructuración de un héroe y template literals */
const { nombre, poder, fuerza } = primerHeroe;
const descripcion = `${nombre} tiene el poder de ${poder} y un nivel de fuerza de ${fuerza}.`;
console.log(descripcion);

/* Ejercicio 4 */

const btnappear = document.getElementById("btn");
const listaHeroes = document.getElementById("lista-Heroes");

todosLosHeroes.forEach((heroe) => {
  // Calcular el ancho de la barra de fuerza (máximo 100)
  const anchoFuerza = heroe.fuerza > 100 ? 100 : heroe.fuerza;

  const heroeElement = document.createElement("div");
  heroeElement.className = "bg-gray-700 p-4 rounded-lg";
  const heroename = document.createElement("div");
  heroename.className = "flex justify-between items-start mb-2";
  const herotitle = document.createElement("h3");
  herotitle.className = "font-bold text-lg";
  herotitle.textContent = heroe.nombre;
  heroename.appendChild(herotitle);
  const herofuerza = document.createElement("span");
  herofuerza.className =
    "bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded";
  herofuerza.textContent = `Fuerza: ${heroe.fuerza}`;
  heroename.appendChild(herofuerza);
  heroeElement.appendChild(heroename);
  const heropower = document.createElement("p");
  heropower.className = "text-gray-300 mb-3";
  heropower.textContent = `Poder: ${heroe.poder}`;
  heroeElement.appendChild(heropower);
  const herobarpower = document.createElement("div");
  herobarpower.className = "w-full bg-gray-600 rounded-full h-2.5";
  herobarpower.innerHTML = `<div class="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full" style="width: ${anchoFuerza}%"></div>`;
  heroeElement.appendChild(herobarpower);
  listaHeroes.appendChild(heroeElement);
});

btnappear.addEventListener("click", function () {
  if (listaHeroes.classList.contains("hidden")) {
    listaHeroes.classList.replace("hidden", "block");
    btnappear.textContent = "Ocultar lista de Heroes";
  } else if (listaHeroes.classList.contains("block")) {
    listaHeroes.classList.replace("block", "hidden");
    btnappear.textContent = "Mostrar lista de Heroes";
  }
});
