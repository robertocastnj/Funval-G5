const edades = [12, 17, 18, 21, 14, 30];

const mayoresDeEdad = edades.filter(edad => edad >= 18);

console.log(mayoresDeEdad); 

/* Ejercicio 3 */

const nombres=["Ana","Guillermo","Saúl","Lily","Mauricio","Cristina"]

nombres.forEach((name)=>{
    console.log(`Hola, ${name}`)
})

/* Ejercicio 4 */
const hayPar=edades.some(edad=>edad%2===0);
console.log(hayPar)


/* Ejercicio 5 */
const nombreLargo = nombres.find(nombre => nombre.length > 5);

console.log(nombreLargo);

/* Ejercicio 6 */
const numeros = [4, 7, 0, -3, 5, -1, 14];

const indiceNegativo = numeros.findIndex(numero => numero < 0);

console.log(indiceNegativo); 

/* Ejercicio 7 */
const cuadrados=numeros.filter(numero=>numero%2===0).map(numero=>numero**2)

console.log(cuadrados);

/* Ejercicio 8 */
const precios=[55,48,37,100,22.5,88.3]

const total = precios.reduce((acc, precio) => {
  acc += precio 
  return acc
}, 0)

console.log(total)

/* Ejercicio 9 */
const palabras=["Hola","mi","nombre","es","Roberto","Castillo"]

const frase=palabras.reduce((acc,palabra)=>{return `${acc}-${palabra}`;}
)
console.log(frase)

/* Ejercicio 10 */
const maedad=edades.map(edad=>edad+1).some(edad=>edad>30)
console.log(maedad)

/* Ejercicio 11 */
const personas = nombres.map((nombre, index) => ({
  nombre: nombre,
  edad: edades[index]
}));

console.log(personas)

personas.filter(persona=>persona.edad>21).forEach((persona)=>{console.log(persona.nombre)})

/* Ejercicio 12 */
const productos = [
  { id: 1, nombre: "Laptop", precio: 1500 },
  { id: 2, nombre: "Mouse", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 45 },
  { id: 4, nombre: "Monitor", precio: 300 },
  { id: 5, nombre: "Impresora", precio: 120 }
];

const caro=productos.find(producto=>producto.precio>100)
console.log(caro)

/* Ejercicio 13 */
const maximo = numeros.reduce((acc, numero) => {
  return numero>acc? numero:acc;
} )

console.log(maximo)

/* Ejercicio 14 */

const calificaciones = [45, 78, 92, 55, 60, 88, 30];

const caltotal = calificaciones
  .filter(nota => nota >= 60)       
  .map(nota => nota ** 2)           
  .reduce((suma, nota) => suma + nota, 0); 

console.log(caltotal); 

/* Ejercicio 15 */
const usuarios = [
  { id: 1, nombre: "Ana", activo: true, edad: 22 },
  { id: 2, nombre: "Luis", activo: false, edad: 30 },
  { id: 3, nombre: "Marta", activo: true, edad: 17 },
  { id: 4, nombre: "Pedro", activo: true, edad: 40 },
  { id: 5, nombre: "Lucía", activo: false, edad: 19 }
];

const activos = usuarios.filter(usuario => usuario.activo);
const nombresActivos = activos.map(usuario => usuario.nombre);
const hayMenores = activos.some(usuario => usuario.edad < 18);
const promedioEdad = activos.reduce((suma, usuario) => suma + usuario.edad, 0) / activos.length;

console.log("Usuarios activos:", activos);
console.log("Nombres de activos:", nombresActivos);
console.log("¿Algún usuario activo menor de 18?", hayMenores);
console.log("Promedio de edad de activos:", promedioEdad);
