let option = parseInt(
  prompt(`CALCULADORA DE ÁREAS 
Seleccione la figura para calcular su área:
1. Cuadrado
2. Rectángulo
3. Triángulo`)
);

let area = 0;

switch (option) {
  case 1:
    let lado = parseFloat(prompt("Ingrese la longitud del lado del cuadrado:"));
    if (isNaN(lado) || lado <= 0) {
      alert("Error: Debe ingresar un valor numérico válido mayor que cero.");
      break;
    }
    area = lado ** 2;
    alert(`El área del cuadrado con lado ` + lado + ` es: ` + area);
    break;

  case 2:
    let baseRect = parseFloat(prompt("Ingrese la base del rectángulo:"));
    let alturaRect = parseFloat(prompt("Ingrese la altura del rectángulo:"));

    if (
      isNaN(baseRect) ||
      isNaN(alturaRect) ||
      baseRect <= 0 ||
      alturaRect <= 0
    ) {
      alert("Error: Debe ingresar valores numéricos válidos mayores que cero.");
      break;
    }

    area = baseRect * alturaRect;
    alert(
      `El área del rectángulo con base ` +
        baseRect +
        ` y altura: ` +
        alturaRect +
        ` es: ` +
        area
    );
    break;

  case 3:
    let baseTri = parseFloat(prompt("Ingrese la base del triángulo:"));
    let alturaTri = parseFloat(prompt("Ingrese la altura del triángulo:"));

    if (isNaN(baseTri) || isNaN(alturaTri) || baseTri <= 0 || alturaTri <= 0) {
      alert("Error: Debe ingresar valores numéricos válidos mayores que cero.");
      break;
    }

    area = (baseTri * alturaTri) / 2;
    alert(
      `El área del tríangulo con base ` +
        baseTri +
        ` y altura: ` +
        alturaTri +
        ` es: ` +
        area
    );
    break;

  default:
    alert("Error: Opción no válida. Por favor, seleccione 1, 2 o 3.");
}
