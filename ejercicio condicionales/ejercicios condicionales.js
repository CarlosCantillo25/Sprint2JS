//ejercicio 7
function validarIngreso(nombre, pase, tieneEntrada, dineroDisponible) {
  if (nombre === "Dory" || pase === "vip") {
    console.log("¡Bienvenido/a! Puedes ingresar.");
  } else if (tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === true) {
    let respuesta = confirm("¿Deseas utilizar tu entrada?");
    if (respuesta) {
      console.log("¡Bienvenido/a! Puedes ingresar.");
    } else {
      console.log("¡Hasta luego! Disfruta tu día.");
    }
  } else {
    let deseaComprar = confirm("¿Deseas comprar una entrada?");
    if (deseaComprar) {
      if (dineroDisponible >= 1000) {
        console.log("¡Venta de entrada exitosa! ¡Bienvenido/a!");
      } else {
        console.log("Lo siento, no tienes suficiente dinero para comprar una entrada.");
      }
    } else {
      console.log("¡Hasta luego! Disfruta tu día.");
    }
  }
}

// Ejemplo de uso
validarIngreso("Dory", "normal", false, 800);
// ¡Bienvenido/a! Puedes ingresar.

validarIngreso("Nemo", "normal", true, 1500);
// ¿Deseas utilizar tu entrada?
// (Mensaje emergente) - Usuario selecciona "Aceptar"
// ¡Bienvenido/a! Puedes ingresar.

validarIngreso("Marlin", "normal", false, 1200);
// ¿Deseas comprar una entrada?
// (Mensaje emergente) - Usuario selecciona "Aceptar"
// ¡Venta de entrada exitosa! ¡Bienvenido/a!

validarIngreso("Marlin", "normal", false, 800);
// ¿Deseas comprar una entrada?
// (Mensaje emergente) - Usuario selecciona "Cancelar"
// ¡Hasta luego! Disfruta tu día.

// ejercicio 8
function juegoAdivinanza() {
  const numeroIncognita = Math.floor(Math.random() * 10) + 1;
  let intentos = 3;

  while (intentos > 0) {
    let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10:"));

    if (numeroIngresado === numeroIncognita) {
      console.log("¡Ganaste, has adivinado el número!");
      return;
    } else if (numeroIngresado > numeroIncognita) {
      console.log("El número ingresado es mayor, vuelve a intentarlo.");
    } else {
      console.log("El número ingresado es menor, vuelve a intentarlo.");
    }

    intentos--;
  }

  console.log(`Lo siento, has agotado tus intentos. El número era ${numeroIncognita}.`);
}

// Ejemplo de uso
juegoAdivinanza();
// (Mensaje emergente) - Usuario ingresa un número
// (En consola) - El número ingresado es mayor, vuelve a intentarlo.
// (Mensaje emergente) - Usuario ingresa otro número
// (En consola) - El número ingresado es menor, vuelve a intentarlo.
// (Mensaje emergente) - Usuario ingresa otro número
// (En consola) - ¡Ganaste, has adivinado el número!

// ejercicio 9
function clasificarEdad(edad) {
  if (edad >= 0 && edad <= 12) {
    console.log("Eres un infante.");
  } else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolescente.");
  } else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven.");
  } else if (edad > 45 && edad <= 100) {
    console.log("Eres un anciano.");
  } else {
    let respuesta = confirm("¿Realmente tienes esa edad?");
    if (respuesta) {
      console.log("Wow, eres muy longevo/a.");
    } else {
      console.log("Ingresa tu edad correcta la próxima vez.");
    }
  }
}

// Ejemplo de uso
clasificarEdad(25); // Eres un mayor joven.
clasificarEdad(60); // Eres un anciano.
clasificarEdad(120);
// ¿Realmente tienes esa edad?
// (Mensaje emergente) - Usuario selecciona "Aceptar"
// Wow, eres muy longevo/a.

// ejercicio 10
function jugarPiedraPapelTijeras(jugador1, jugador2) {
  jugador1 = jugador1.toLowerCase();
  jugador2 = jugador2.toLowerCase();

  if (
    (jugador1 === "piedra" && jugador2 === "tijeras") ||
    (jugador1 === "papel" && jugador2 === "piedra") ||
    (jugador1 === "tijeras" && jugador2 === "papel")
  ) {
    console.log("¡Jugador 1 ha ganado!");
  } else if (
    (jugador2 === "piedra" && jugador1 === "tijeras") ||
    (jugador2 === "papel" && jugador1 === "piedra") ||
    (jugador2 === "tijeras" && jugador1 === "papel")
  ) {
    console.log("¡Jugador 2 ha ganado!");
  } else if (jugador1 === jugador2) {
    console.log("¡Han empatado!");
  } else {
    console.log("¡Uno de los jugadores ha hecho trampa!");
  }
}

// Ejemplo de uso
jugarPiedraPapelTijeras("piedra", "tijeras"); // ¡Jugador 1 ha ganado!
jugarPiedraPapelTijeras("papel", "piedra"); // ¡Jugador 1 ha ganado!
jugarPiedraPapelTijeras("tijeras", "papel"); // ¡Jugador 1 ha ganado!
jugarPiedraPapelTijeras("tijeras", "tijeras"); // ¡Han empatado!
jugarPiedraPapelTijeras("papel", "tijeras"); // ¡Jugador 2 ha ganado!
jugarPiedraPapelTijeras("piedra", "papel"); // ¡Jugador 2 ha ganado!
jugarPiedraPapelTijeras("tijeras", "piedra"); // ¡Jugador 2 ha ganado!
jugarPiedraPapelTijeras("piedra", "papelito"); // ¡Uno de los jugadores ha hecho trampa!

//ejercicio 11
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Ejemplo de uso
console.log(esPrimo(7)); // true
console.log(esPrimo(12)); // false
console.log(esPrimo(23)); // true
console.log(esPrimo(1)); // false
console.log(esPrimo(0)); // false

// ejercicio 12
function secuenciaFibonacci(n) {
  let secuencia = [0, 1];

  for (let i = 2; i <= n; i++) {
    secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
  }

  return secuencia;
}

// Ejemplo de uso
console.log(secuenciaFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(secuenciaFibonacci(5)); // [0, 1, 1, 2, 3, 5]
console.log(secuenciaFibonacci(2)); // [0, 1, 1]

// ejercicio 13
function esPalindromo(palabra) {
  palabra = palabra.toLowerCase();
  let longitud = palabra.length;

  for (let i = 0; i < longitud / 2; i++) {
    if (palabra[i] !== palabra[longitud - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Ejemplo de uso
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("casa")); // false
console.log(esPalindromo("radar")); // true
console.log(esPalindromo("Anita lava la tina")); // true
