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
12-eliminar del carrito
13-salir`)
  );
}
  let CarritoLLeno = []
function OPCIONESDEDESTINO(Catalogo) {
  let montonTotal = 0;
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


  // Función anónima para agregar al carrito y mostrar alerta
  function agregarAlCarrito(nombreDestino) {
    montonTotal += Catalogo[nombreDestino];
    CarritoLLeno.push(nombreDestino +" "+ montonTotal+"$");
    alert(
      `Agregado al carrito: ${nombreDestino} - ${Catalogo[nombreDestino]}$`
    );
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
        alert(`Precio de ${nombreDestino}: ${Catalogo[nombreDestino]}$"`);

        let colocarCarrito = prompt("¿Desea colocarlo en el carrito?: SI / NO");
        // Validar la respuesta (en mayúscula para evitar problemas)
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
        alert("Productos en el carrito:\n" + CarritoLLeno.join("\n"));
        break;

      case 12: EliminarCarrito()  

      case 13:
        bandera = false;
        break;

      default:
        alert("Ingrese un número del 1 al 12");
    }
  }
}

OPCIONESDEDESTINO(Catalogo);


function EliminarCarrito(){
 let indiceProducto =  0 
for(let i = 0; i < CarritoLLeno.length; i++) {
  indiceProducto += i + 1 + ")" + CarritoLLeno[i] + "\n";
}
prompt("cual tarea deseas eliminar?" + CarritoLLeno);
}
EliminarCarrito()