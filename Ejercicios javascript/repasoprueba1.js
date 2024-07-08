// crear una funcion que reciba tres palabras como parametros , valuar la cantidad de letras de cada palabra ,
// imprimir por consola si la cantidad es multiplo de 2 , 4 , 5 o no es multiplo de ninguno

// function practica(palabra1, palabra2, palabra3) {
//     let longitudes = [];
//     longitudes.push(palabra1.length,palabra2.length, palabra3.length);
//     console.log(longitudes);
//     for (let i = 0; i < longitudes.length; i++) {
//         let multiplo2 = false;
//         let multiplo4 = false;
//         let multiplo5 = false;
//         if (longitudes[i] % 2 == 0) {
//             multiplo2 = true;

//         } if (longitudes[i] % 4 == 0) {
//             multiplo4 = true;
            
//         } if (longitudes[i] % 5 == 0) {
//             multiplo5 = true;
            
//         }

//         let multiplos = "";

//         if (multiplo2) {
//             multiplos = multiplos + " 2";
//         }
//         if (multiplo4) {
//             multiplos = multiplos + " 4";
//         }
//         if (multiplo5) {
//             multiplos = multiplos + " 5";
//         }
//         if (!(multiplo2 || multiplo4 || multiplo4)) {
//             multiplos = "ninguno";
//         }

//         console.log("La longitud de la palabra " + i + " [" + longitudes[i] + "]" +  " es multiplo de "+ multiplos);        
//     }
// }
    //---------------------------------------------------------------------------------------------------------------------------------------------
   /*let longitudes = [];
   longitudes.push(palabra1.length,palabra2.length, palabra3.length);
   console.log(longitudes);
   for (let index = 0; index < longitudes.length; index++) {
    if (longitudes[index]% 4 == 0) {
        console.log(longitudes[index]+ " es multiplo de 4");
    } else if (longitudes[index]% 2 == 0) { 
        console.log(longitudes[index]+ " es multiplo de 2");
        
    }else if (longitudes[index]% 5 == 0) {
        console.log(longitudes[index]+ " es multiplo de 5");
   }else {
    console.log(longitudes[index] + " no es multiplo ni de 2, ni de 4, ni de 5");
   }
} 
}*/

// practica("hola", "paralelepipedo", "otorrinolaringologor");
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//crear una funcion que reciba dos numeros como argumentos , y mostrar por consola la escala desde el numero1 , hasta el numero2 (con escala se refiere a que cuente desde el numero 1 al numero 2, por ejemplo, 3, 4, 5, 6, 7)
function escala(numero1, numero2) {
    if (numero1 < numero2) {
        for (let i = numero1; i<= numero2; i++) {     
            console.log(i);
        }
    } else {
        for (let i = numero1; i >= numero2; i--) {
            console.log(i);
            
        }
    }
    
}
escala(1, 300);