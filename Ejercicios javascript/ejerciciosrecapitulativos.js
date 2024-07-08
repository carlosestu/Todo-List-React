// Dado el siguiente arreglo de objetos:
// const students = [
// { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
// { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
// { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
// { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
// ];

// Crear una función que recorra los elementos del arreglo y produzca la siguiente salida:

// Luca
// Life Is a Game, Play to Win!
// Mario
// Never give up!
// Giovanna
// Life Is a Game, Play to Win!
// Carmelo
// A picture is worth a thousand words!
// The youngest is Carmelo
// The longest surname is Brambilla

// Luego, agrega un nuevo estudiante en la tercera posición del arreglo:

// { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'}

// y vuelve a ejecutar la función. Deberías obtener la siguiente salida:

// Luca
// Life Is a Game, Play to Win!
// Mario
// Never give up!
// Elena
// A picture is worth a thousand words!
// Giovanna
// Life Is a Game, Play to Win!
// Carmelo
// A picture is worth a thousand words!
// The youngest is Carmelo
// The longest surname is Pappalardo

// Cada lema está asociado al pasatiempo del estudiante.
// Es posible crear diversas funciones que se encarguen de tareas diferentes y llamarlas todas dentro de la función principal.
// `console.log` puede imprimir una combinación de cadena y variable (por ejemplo: `console.log('Hola', nombre)`).
const students = [
     { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
     { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
     { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
     { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
     ];