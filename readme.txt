ejercicio mal hecho
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

console.log(Catalogo);
function mostrarMenu() {
  return Number(
    prompt(`Estos son los destinos que puedes elegir: 
1-BuenosAires-Rosario\n2-BuenosAires-RioNegro\n3-BuenosAires-Cordoba\n4-BuenosAires-Santiago\n5-BuenosAires-Misiones\n6-Rosario-BuenosAires\n7-RioNegro-BuenosAires\n8-Cordoba-BuenosAires\n9-Santiago-BuenosAires\n10-Misiones-BuenosAires\n11-Salir\n`)
  );
}

function OPCIONESDEDESTINO(Catalogo) {
  let montonTotal = 0;
  let elegir = mostrarMenu();
  let colocarCarrito 
  while (elegir !== 11) {
    switch (elegir) {
      case 1:
        alert(Catalogo["BuenosAires-Rosario"]);
      colocarCarrito = prompt("¿desea colocarlo en el carrito?: SI\n NO\n");
        if (colocarCarrito == "SI") {
       montonTotal += Catalogo["BuenosAires-Rosario"];
        } else if (colocarCarrito == "NO") {
        }
    
        break;
      case 2:
        alert(Catalogo["BuenosAires-RioNegro"]);
        colocarCarrito = prompt("¿desea colocarlo en el carrito?: SI\n NO\n");
        if (colocarCarrito == "SI") {
         montonTotal += Catalogo["BuenosAires-RioNegro"];  ; 
        } else if (colocarCarrito == "NO") {
        }
        break;
      case 3:
        alert(Catalogo["BuenosAires-Cordoba"]);
        colocarCarrito = prompt("¿desea colocarlo en el carrito?: SI\n NO\n");
        if (colocarCarrito == "SI") {
          montonTotal += Catalogo["BuenosAires-Cordoba"];
        } else if (colocarCarrito == "NO") {
          console.log(montonTotal);
        }
        break;
      case 4:
        alert(Catalogo["BuenosAires-Santiago"]); colocarCarrito = prompt("¿desea colocarlo en el carrito?: SI\n NO\n");
        if (colocarCarrito == "SI") {
          montonTotal += Catalogo["BuenosAires-Santiago"];
        } else if (colocarCarrito == "NO") {
          console.log(montonTotal);
        }
        break;
      case 5:
        alert(Catalogo["BuenosAires-Misiones"]); colocarCarrito = prompt("¿desea colocarlo en el carrito?: SI\n NO\n");
        if (colocarCarrito == "SI") {
          montonTotal += Catalogo["BuenosAires-Misiones"];
        } else if (colocarCarrito == "NO") {
          console.log(montonTotal);
        }
        break;
      case 6:
        alert(Catalogo["Rosario-BuenosAires"]); colocarCarrito = prompt("¿desea colocarlo en el carrito?: SI\n NO\n");
        if (colocarCarrito == "SI") {
          montonTotal += Catalogo["Rosario-BuenosAires"];
        } else if (colocarCarrito == "NO") {
          console.log(montonTotal);
        }
        break;
      case 7:
        alert(Catalogo["RioNegro-BuenosAires"]); colocarCarrito = prompt("¿desea colocarlo en el carrito?: SI\n NO\n");
        if (colocarCarrito == "SI") {
          montonTotal += Catalogo["RioNegro-BuenosAires"];
        } else if (colocarCarrito == "NO") {
          console.log(montonTotal);
        }
        break;
      case 8:
        alert(Catalogo["Cordoba-BuenosAires"]); colocarCarrito = prompt("¿desea colocarlo en el carrito?: SI\n NO\n");
        if (colocarCarrito == "SI") {
          montonTotal += Catalogo["Cordoba-BuenosAires"];
        } else if (colocarCarrito == "NO") {
          console.log(montonTotal);
        }
        break;
      case 9:
        alert(Catalogo["Santiago-BuenosAires"]);
         colocarCarrito = prompt("¿desea colocarlo en el carrito?: SI\n NO\n");
        if (colocarCarrito == "SI") {
          montonTotal += Catalogo["Santiago-BuenosAires"];
        } else if (colocarCarrito == "NO") {
          console.log(montonTotal);
        }
        break;
      case 10:
        alert(Catalogo["Misiones-BuenosAires"]); colocarCarrito = prompt("¿desea colocarlo en el carrito?: SI\n NO\n");
        if (colocarCarrito == "SI") {
          montonTotal += Catalogo["Misiones-BuenosAires"];
        } else if (colocarCarrito == "NO") {
          console.log(montonTotal);
        }
        break;
      default:
        alert("ese valor no se encuentra en las opciones");
    }
    elegir = mostrarMenu();
  }
}

OPCIONESDEDESTINO(Catalogo);