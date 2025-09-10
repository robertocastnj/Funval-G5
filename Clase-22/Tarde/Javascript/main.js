const pedidos = []; // Array de pedidos
const form = document.getElementById("formPedido");
const pedidosUl = document.getElementById("pedidosUl");

// Función para crear un <li> por cada pedido
function crearElementoPedido(cliente) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${cliente.nombre}</strong> pidió: ${cliente.pedido}`;
  pedidosUl.appendChild(li);
  return li;
}

// Callback (Pedido del cliente)
function clienteLlega(cliente, callback, li) {
  li.innerHTML += `<br>👋 Llegó ${cliente.nombre} y pidió: ${cliente.pedido}`;
  callback(cliente, li);
}

function recibirPedido(cliente, li) {
  li.innerHTML += `<br>📥 Pedido recibido: ${cliente.pedido}`;
}

// Promesas (Cocina)
function leerPedido(cliente, li) {
  return new Promise((resolve, reject) => {
    let tiempo;
    const siCocino = true;

    li.innerHTML += `<br>👨‍🍳 Cocinando ${cliente.pedido}...`;

    switch (cliente.pedido) {
      case "Pizza":
        tiempo = 3000;
        break;
      case "Hamburguesa":
        tiempo = 2000;
        break;
      case "Ensalada":
        tiempo = 1000;
        break;
      default:
        return reject(`Pedido desconocido: ${cliente.pedido}`);
    }

    setTimeout(() => {
      if (siCocino) {
        const mensaje = `✅ ${cliente.pedido} lista en ${
          tiempo / 1000
        } segundos`;
        li.innerHTML += `<br>${mensaje}`;
        resolve(cliente.pedido);
      } else {
        reject(`❌ No tenemos ingredientes para ${cliente.pedido}`);
      }
    }, tiempo);
  });
}

// Async/Await (Servicio y Pago)
async function servirYCobrar(cliente, li) {
  try {
    const comidaLista = await leerPedido(cliente, li);

    li.innerHTML += `<br>🍽️ Sirviendo ${comidaLista}...`;

    await new Promise((res) => setTimeout(res, 3000));
    li.innerHTML += `<br>🍴 Cliente está comiendo...`;

    li.innerHTML += `<br>💰 Cuenta pagada ✅`;
  } catch (error) {
    li.innerHTML += `<br>⚠️ Error en el servicio: ${error}`;
  }
}

// Manejo del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const pedido = document.getElementById("pedido").value;

  if (!nombre || !pedido) {
    alert("Por favor completa todos los campos");
    return;
  }

  const nuevoPedido = { nombre, pedido };
  pedidos.push(nuevoPedido);

  // Crear elemento visual
  const li = crearElementoPedido(nuevoPedido);

  // Flujo completo
  clienteLlega(nuevoPedido, recibirPedido, li);
  servirYCobrar(nuevoPedido, li);

  form.reset();
});
