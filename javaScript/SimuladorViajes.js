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

let CarritoLLeno = [];
let montonTotal = 0; // Lo ponemos afuera para que EliminarCarrito() pueda acceder

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

function OPCIONESDEDESTINO(Catalogo) {
  let bandera = true;
  let destinos = [
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

  function agregarAlCarrito(nombreDestino) {
    let precio = Catalogo[nombreDestino];
    montonTotal += precio;
    CarritoLLeno.push({ nombre: nombreDestino, precio: precio });
    alert(`Agregado al carrito: ${nombreDestino} - ${precio}$`);
  }

  while (bandera) {
    let elegir = mostrarMenu();

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

      case 11:
        if (CarritoLLeno.length === 0) {
          alert("El carrito está vacío.");
        } else {
          let listaProductos = "";
          for (let i = 0; i < CarritoLLeno.length; i++) {
            listaProductos +=
              i + 1 + ") " + CarritoLLeno[i].nombre + " - " + CarritoLLeno[i].precio + "$\n";
          }
          alert("Productos en el carrito:\n" + listaProductos);
          EliminarCarrito(); // 
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

function EliminarCarrito() {
  let indiceProducto = "";
  for (let i = 0; i < CarritoLLeno.length; i++) {
    indiceProducto +=
      i + 1 + ") " + CarritoLLeno[i].nombre + " - " + CarritoLLeno[i].precio + "$\n";
  }
  let ConsultaEliminar = Number(
    prompt("¿Deseas eliminar algún producto?\n" + indiceProducto)
  );

  if (
    ConsultaEliminar < 1 ||
    ConsultaEliminar > CarritoLLeno.length ||
    isNaN(ConsultaEliminar)
  ) {
    alert("Ingrese un número dentro de las opciones");
  } else {
    let IndiceVerdadero = ConsultaEliminar - 1;
    let ProductoEliminado = CarritoLLeno.splice(IndiceVerdadero, 1);
    alert(
      `Se eliminó del carrito: ${ProductoEliminado[0].nombre} - ${ProductoEliminado[0].precio}$`
    );

    
    montonTotal = 0;
    for (let i = 0; i < CarritoLLeno.length; i++) {
      montonTotal += CarritoLLeno[i].precio;
    }
  }
}

OPCIONESDEDESTINO(Catalogo);
