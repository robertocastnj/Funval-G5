function positivenumber() {
  let numeroValido = false;
  let numero;

  while (!numeroValido) {
    const input = prompt("Ingrese un número positivo y entero:");

    if (input === null) {
      alert("Operación cancelada.");
      return null;
    }

    numero = Number(input);

    if (isNaN(numero)) {
      alert("Debe ingresar un número válido.");
    } else if (!Number.isInteger(numero)) {
      alert("El número debe ser entero.");
    } else if (numero <= 0) {
      alert("El número debe ser positivo.");
    } else {
      numeroValido = true;
    }
  }
  return numero;
}

const numero = positivenumber();
console.log(numero);
