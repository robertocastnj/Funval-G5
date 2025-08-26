let dia = prompt("Ingrese un día de la semana:").toLowerCase();

switch (dia) {
  case "lunes":
  case "martes":
  case "miércoles":
  case "miercoles":
  case "jueves":
  case "viernes":
    alert("Tienes clases de funval");
    break;
  case "sábado":
  case "sabado":
    alert("Tienes el día libre");
    break;
  case "domingo":
    alert("Debes ir a la iglesia");
    break;
  default:
    alert("Error en la opción seleccionada");
    break;
}
