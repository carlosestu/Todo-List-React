//Crea una función que reciba una palabra como parámetro y cuente la cantidad de vocales (a, e, i, o, u) que tiene. Luego, muestra por consola el número total de vocales encontradas.
// function vocales(palabra1) {
//     let letras = "aeiou";
//     let contador = 0;
//     for (let i = 0; i < palabra1.length; i++) {
//         if (letras.includes(palabra1[i])) {
//             contador++;
//         }
//         }
//         if (contador === 0) {
//             console.log("no hay vocales en tu palabra")
//         } else {  
//             console.log("hay "+contador+" vocales en tu palabra");
//         }

    
    
// }
// vocales("camion");
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Crea una función que reciba un número como parámetro y calcule la suma de todos los números pares desde 1 hasta ese número. Luego, muestra por consola el resultado de la suma.
// function pares(number) {
//     let contador = 0;
//     for (let i = 0; i <= number; i++) {
//     if (i % 2 ===0) {
//         contador = contador + i;
//     }
        
//     }
//     return contador;
// }
// console.log(pares(21));
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Crea una función que calcule el factorial de un número. El factorial de un número entero positivo "n", denotado como "n!", es el producto de todos los números enteros positivos desde 1 hasta "n". Por ejemplo, el factorial de 5 (escrito como 5!) es 5 * 4 * 3 * 2 * 1 = 120
// function factorial(n) {
//     let resultado = 1;
//     let suma = 0;
//     for (let i = n; i >= 1 ; i--) {
//         suma = i*resultado;
//         resultado = suma;
//     }
//   return resultado;  
// }
// console.log(factorial(5));
//------------------------------------------------------------------------------
// contar consonantes
// function consonantes(palabra) {
//   let letrasConsonantes = "qwrtypsdfghjklñzxcvbnm";
//   let contadorConsonantes = 0;
//   for (let i = 0; i < palabra.length; i++) {
//     if (letrasConsonantes.includes(palabra[i])) {
//       contadorConsonantes = contadorConsonantes +1
//     }
    
//   }
//   return contadorConsonantes;
// }
// console.log("esta palabra tiene "+ consonantes("chimichurri") + " consonantes");
//----------------------------------------------------------------------------------------------------------
//crea una funcion que reciva un numero entero como parametro y luego sume sus digitos.
// function sumaDigitos(number){
//   let numeros = number.toString();
//   let numeroDescompuesto = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     numeroDescompuesto = numeroDescompuesto + Number(numeros[i]);
    
//   }
//   return numeroDescompuesto;
// }
// console.log(sumaDigitos(56));
//------------------------------------------------------------------------------------------
// crea una funcion que coja como parametro un numero entero positivo y cuente la cantidad de numeros primos que hay desde el 1 hasta dicho numero
// function numeroPrimo(number) {
//   let contadorPrimos = 0;
//   for (let i = 2; i <= number; i++) {
//     if (i <=5 && i != 1 && i != 4) {
//       contadorPrimos += 1; console.log("numero "+i);
//   } else{
//       if (!(i % 2===0 || i % 3===0 )) {
//       contadorPrimos += 1; console.log("numero "+i);
//     }
//    }
//   }
//     return contadorPrimos;
//   }
// console.log(numeroPrimo(18));
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function numbers(number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12) {
//     let suma = number1 + number2 + number3 +  number4 + number5 + number6 + 
//     number7 + number8 + number9 + number10 + number11 + number12;
//     let media = suma / 12;
//     let orden = [];
//   for (let i = 0; i <= suma; i++) {
//     if (i==number1 || i==number2 || i==number3 || i==number4 || i==number5 || i==number6 || i==number7 || i==number8 ||
//          i==number9 || i==number10 || i==number11 || i==number12) {
//         orden.push(i);
//     }
//   }
//   let menor = orden[0];
//   let mayor = orden[orden.length -1];
//     console.log("el numero mas pequeño es el " + menor + " y el numero mas grande es el "+ mayor );
//     console.log("la media de estos numeros es " + media);
// }
// numbers(12, 14, 87, 45, 67, 92, 30, 26, 17, 71, 82, 39,);