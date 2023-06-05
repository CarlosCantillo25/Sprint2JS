// ejercicio 1//
/*  function tabla(numero){
  for (let i=1;i<=10;i++){
  console.log(`${numero} x ${i} = ${numero*i}`)  
    }
    
}
tabla(4)  */

//ejercicio 2//
 /* let suma = 0;
 let numero = parseInt(prompt("Ingrese un número (0 para salir):"));
 
 while (numero !== 0) {
   suma += numero;
   numero = parseInt(prompt("Ingrese otro número (0 para salir):"));
 }
 
 console.log("La suma total es: " + suma); */
       
  //ejercicio 3//
/*   let numeroFinal=14;
  let ingresar;
  let intentos= []
  do {
      ingresar= Number(prompt("ingresa un nunero hasta adivinar el numero secreto"));
      if (ingresar>numeroFinal){
          alert("El numero es mayor");
      }if (ingresar<numeroFinal){
          alert("El numero es menor");
      }else if (ingresar===numeroFinal){
        alert("felicidades has adivinado el numero secreto");
      }
      intentos.push(ingresar);
    } while(ingresar!==numeroFinal);
      alert("numero de intentos:" + " "  + intentos.length); */

// Ejercicio 4

/* let numeroDivisible = parseInt(prompt("Ingrese un número para ver sus divisores:"));

for (let i = 1; i <= numeroDivisible; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
} */


//ejercicio 5//
/* let array=[1,2,3,4,5,6,7,8,9,10]
for (i=0; i<10; i++) {
    console.log(`elemento array: ${i}`);
} */

//ejercicio 6//
/* let array2=[1,2,3,4,5,6,7,8,9,10]
for (i=0; i<10; i++) {
    s=i*2;
    console.log(`el doble: ${s}`);
}  */

// ejercicio 7 //
/* const familia=[
    {
        nombre:"maria",
        apellido:"lopez",
        sexo:"femenino",
        edad:"36"
    },
    {
        nombre:"carlos",
        apellido:"cantillo",
        sexo:"masculino",
        edad:"35"
    },
    {
        nombre:"andres",
        apellido:"cantillo",
        sexo:"masculino",
        edad:"16"
    },
    {
        nombre:"sandra",
        apellido:"cantillo", 
        sexo:"femenino",
        edad:"14"
    },
    {
        nombre:"beatriz",
        apellido:"lopez",
        sexo:"femenino",
        edad:"59"
    }
]
for (i = 0; i < familia.length; i++){
    let miembro = familia [ i ];
    let nombre = miembro.nombre;
    let apellido = miembro.apellido;
    let sexo = miembro.sexo;
    let edad = miembro.edad;
    alert("Hola, mi nombre completo es " + nombre + " " + apellido + ", mi sexo es " + sexo + " y mi edad es " + edad + ".")
} */
//ejercicio 8//
/* let numeros=[1,2,3,4,5,6,7,8,9,10]
for (i=0; i<10; i++){
    if (i%2!==0){
        console.log(i)
    }
} */

// ejercicio 9 //
 
/* let num = parseInt(prompt("Ingrese un número: (o ingrese 0 para finalizar)"))

    pares = 0; 
    impares = 0; 

for( i = num; i >= 0; ){ 

    if(i % 2 == 0){ 
        pares = pares + i; 
    }else{ 
        impares = impares + i; 

    } 

} console.log(pares) 

console.log(impares) */

// ejercicio 10 //

/* let numberArray = [10, 15, 72, 53, 4, 25, 64, 79, 38, 19];
let maxNumber = numberArray[0];

for (let i = 1; i < numberArray.length; i++) {
  if (numberArray[i] > maxNumber) {
    maxNumber = numberArray[i];
  }
}

console.log("El número más grande es: " + maxNumber);  */






   
    


