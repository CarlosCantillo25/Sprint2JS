//Ejercicio 1

let btnCambiar = document.getElementById('btnCambiar')

function cambiarColor() {
  const square = document.querySelector('.square');
  square.style.backgroundColor = 'aqua';
}

btnCambiar.addEventListener('click', cambiarColor);


//Ejercicio 2
let square = document.getElementById('square');
let textInput = document.getElementById('textInput');

function actualizarTexto() {
  square.textContent = textInput.value;
}

textInput.addEventListener('input', actualizarTexto);

//Ejercicio 3
let masaMuscular = document.getElementById('btnCalcular')

function calcularIMC() {
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;

  const imc = peso / ((altura / 100) ** 2);

  document.getElementById('resultado').value = imc.toFixed(2);
}

masaMuscular.addEventListener('click', calcularIMC);

//Ejercicio 4
let dolarAPeso = document.getElementById('dolar')
let pesoADolar = document.getElementById('pesos')

function convertirDolarAPeso() {
  const dolar = document.getElementById('dolar').value;
  const valorDolar = document.getElementById('conversionDolar').value;

  const peso = dolar * valorDolar;

  document.getElementById('pesos').value = peso.toFixed(2);
}

function convertirPesoADolar() {
  const peso = document.getElementById('pesos').value;
  const conversionPeso = document.getElementById('conversionPeso').value;

  const dolar = peso * conversionPeso;

  document.getElementById('dolar').value = dolar.toFixed(2);
}

dolarAPeso.addEventListener('input', convertirDolarAPeso);
pesoADolar.addEventListener('input', convertirPesoADolar);