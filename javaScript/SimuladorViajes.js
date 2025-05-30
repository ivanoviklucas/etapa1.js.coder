// Catálogo con rutas y sus precios
let Catalogo = {
  "BuenosAires-Rosario": 150000,
  "BuenosAires-RioNegro": 200000,
  "BuenosAires-Cordoba": 250000,
  "BuenosAires-Santiago": 300000,
  "BuenosAires-Misiones": 350000,
  "Rosario-BuenosAires": 150000,
  "RioNegro-BuenosAires": 200000,
  "Cordoba-BuenosAires": 250000,
  "Santiago-BuenosAires": 300000,
  "Misiones-BuenosAires": 350000,
};
// Carrito que guarda los destinos elegidos
let CarritoLLeno = [];
// Total acumulado del carrito
let montonTotal = 0;
// Muestra el menú principal para que el usuario seleccione un numero correspondiente al destino elegido
function mostrarMenu() {
  return Number(
    prompt(`Estos son los destinos que puedes elegir: 
1-BuenosAires-Rosario
2-BuenosAires-RioNegro
3-BuenosAires-Cordoba
4-BuenosAires-Santiago
5-BuenosAires-Misiones 
6-Rosario-BuenosAires
7-RioNegro-BuenosAires
8-Cordoba-BuenosAires
9-Santiago-BuenosAires
10-Misiones-BuenosAires
11-ver carrito
12-ver saldo
13-salir`)
  );
}
// funcion principal del programa interactua con el usuario
function OPCIONESDEDESTINO(Catalogo) {
  let bandera = true;
  let destinos = [
    //lista de destinos disponibles
    "BuenosAires-Rosario",
    "BuenosAires-RioNegro",
    "BuenosAires-Cordoba",
    "BuenosAires-Santiago",
    "BuenosAires-Misiones",
    "Rosario-BuenosAires",
    "RioNegro-BuenosAires",
    "Cordoba-BuenosAires",
    "Santiago-BuenosAires",
    "Misiones-BuenosAires",
  ];
  // Agrega un destino al carrito
  function agregarAlCarrito(nombreDestino) {
    let precio = Catalogo[nombreDestino];
    montonTotal += precio;
    CarritoLLeno.push({ nombre: nombreDestino, precio: precio });
    alert(`Agregado al carrito: ${nombreDestino} - ${precio}$`);
  }

  while (bandera) {
    let elegir = mostrarMenu();
    // switch principal que muestra el menú mientras el usuario no elija salir
    switch (elegir) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        let nombreDestino = destinos[elegir - 1];
        alert(`Precio de ${nombreDestino}: ${Catalogo[nombreDestino]}$`);

        let colocarCarrito = prompt("¿Desea colocarlo en el carrito?: SI / NO");
        while (
          // Validación para aceptar solo SI o NO
          colocarCarrito.toUpperCase() !== "SI" &&
          colocarCarrito.toUpperCase() !== "NO"
        ) {
          alert("Dato inválido, ingrese SI o NO");
          colocarCarrito = prompt("¿Desea colocarlo en el carrito?: SI / NO");
        }

        if (colocarCarrito.toUpperCase() === "SI") {
          agregarAlCarrito(nombreDestino);
        } else {
          alert("El saldo de su carrito es $" + montonTotal);
        }
        break;

      case 11:  // Ver carrito
        if (CarritoLLeno.length === 0) {
          alert("El carrito está vacío.");
        } else {
          let listaProductos = "";
          for (let i = 0; i < CarritoLLeno.length; i++) {
            listaProductos +=
              i +
              1 +
              ") " +
              CarritoLLeno[i].nombre +
              " - " +
              CarritoLLeno[i].precio +
              "$\n";
          }
          alert("Productos en el carrito:\n" + listaProductos);
          EliminarCarrito();
        }
        break;

      case 12:
        alert("El saldo de su carrito es $" + montonTotal);
        break;

      case 13:
        bandera = false;
        break;

      default:
        alert("Ingrese un número del 1 al 13");
    }
  }
}
// Función que permite eliminar productos del carrito
function EliminarCarrito() {
  // Muestra los productos numerados
  let indiceProducto = "";
  for (let i = 0; i < CarritoLLeno.length; i++) {
    indiceProducto +=
      i +
      1 +
      ") " +
      CarritoLLeno[i].nombre +
      " - " +
      CarritoLLeno[i].precio +
      "$\n";
  }
  // Pide al usuario qué producto desea eliminar
  let ConsultaEliminar = Number(
    prompt("¿Deseas eliminar algún producto?\n" + indiceProducto)
  );
  // Validación de número ingresado
  if (
    ConsultaEliminar < 1 ||
    ConsultaEliminar > CarritoLLeno.length ||
    isNaN(ConsultaEliminar)
  ) {
    alert("Ingrese un número dentro de las opciones");
  } else {
    let IndiceVerdadero = ConsultaEliminar - 1;
    let confirmacion = confirm("¿Está seguro que desea eliminarlo?");

    if (confirmacion) {// Si confirma, elimina el producto
      let ProductoEliminado = CarritoLLeno.splice(IndiceVerdadero, 1);
      alert(
        `Se eliminó del carrito: ${ProductoEliminado[0].nombre} - ${ProductoEliminado[0].precio}$`
      );
    } else {
      EliminarCarrito(); // Vuelve a mostrar el menú de eliminación
      return; // Detiene esta ejecución para evitar seguir abajo
    }
  }
  // Recalcula el total después de eliminar
  montonTotal = 0;
  for (let i = 0; i < CarritoLLeno.length; i++) {
    montonTotal += CarritoLLeno[i].precio;
  }
}
// Inicia el programa
OPCIONESDEDESTINO(Catalogo);
