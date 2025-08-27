let saldo = 1000;

function option() {
  while (true) {
    const input = prompt(`Selecciona la operación a realizar:
            1.- Ingresar dinero
            2.- Retirar dinero
            3.- Consultar dinero
            4.- Salir`);

    const numero = Number(input);

    if (isNaN(numero)) {
      alert("Opción no valida");
    } else if (!Number.isInteger(numero)) {
      alert("Opción no valida");
    } else if (numero <= 0 || numero > 4) {
      alert("Opción no valida");
    } else {
      if (numero === 1) {
        saldo = add(saldo);
      } else if (numero === 2) {
        saldo = sus(saldo);
      } else if (numero === 3) {
        alert(`Tu saldo es: $${saldo}`);
      } else {
        return null;
      }
    }
  }
}

function add(x) {
  while (true) {
    const input = prompt(`Monto a ingresar:`);

    const numero = Number(input);

    if (isNaN(numero)) {
      alert("Operación no valida");
      return x;
    } else if (numero < 0) {
      alert("Operación no valida");
      return x;
    } else {
      alert(`Se argegaron $${numero}`);
      x = x + numero;
      return x;
    }
  }
}

function sus(x) {
  while (true) {
    const input = prompt(`Monto a reirar:`);

    const numero = Number(input);

    if (isNaN(numero)) {
      alert("Operación no valida");
      return x;
    } else if (numero < 0) {
      alert("Operación no valida");
      return x;
    } else if (numero > x) {
      alert("No cuentas con el saldo suficiente");
      return x;
    } else {
      alert(`Se retiraron $${numero}`);
      x = x - numero;
      return x;
    }
  }
}

option();
