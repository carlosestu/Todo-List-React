function numbers(number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12) {
    let suma = number1 + number2 + number3 +  number4 + number5 + number6 + 
    number7 + number8 + number9 + number10 + number11 + number12;
    let media = suma / 12;
    let orden = [];
  for (let i = 0; i <= suma; i++) {
    if (i==number1 || i==number2 || i==number3 || i==number4 || i==number5 || i==number6 || i==number7 || i==number8 ||
         i==number9 || i==number10 || i==number11 || i==number12) {
        orden.push(i);
    }
  }
  let menor = orden[0];
  let mayor = orden[orden.length -1];
    console.log("el numero mas pequeño es el " + menor + " y el numero mas grande es el "+ mayor );
    console.log("la media de estos numeros es " + media);
}
numbers(12, 14, 87, 45, 67, 92, 30, 26, 17, 71, 82, 39,);