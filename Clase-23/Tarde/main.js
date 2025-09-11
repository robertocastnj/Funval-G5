/* -----------------------AXIOS---------------------------- */
const listaProveedores = document.getElementById("lista-proveedores");

axios("./usuarios.json")
  .then(({ data }) =>
    data
      .filter((numero) => numero.edad > 21)
      .forEach((proveedor) => {
        const proveedorElement = document.createElement("div");
        proveedorElement.className = "bg-gray-700 p-4 m-4 rounded-lg w-full";
        const proveedortitle = document.createElement("div");
        proveedortitle.className = "flex justify-between items-start mb-2";
        const ProveedorName = document.createElement("h3");
        ProveedorName.className = "font-bold text-lg text-white";
        ProveedorName.textContent = `Nombre de proveedor: ${proveedor.nombre}`;
        proveedortitle.appendChild(ProveedorName);
        const proveedorEmpresa = document.createElement("span");
        proveedorEmpresa.className =
          "bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded";
        proveedorEmpresa.textContent = `Empresa: ${proveedor.edad}`;
        proveedortitle.appendChild(proveedorEmpresa);
        proveedorElement.appendChild(proveedortitle);
        const Proveedorslogan = document.createElement("p");
        Proveedorslogan.className = "text-gray-300 mb-3";
        Proveedorslogan.textContent = proveedor.hobbies;
        proveedorElement.appendChild(Proveedorslogan);
        listaProveedores.appendChild(proveedorElement);
      })
  )
  .catch((error) => {
    console.log(error);
  });

async function datosAxios() {
  try {
    let { data } = await axios("https://jsonplaceholder.typicode.com/albums");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

datosAxios();
