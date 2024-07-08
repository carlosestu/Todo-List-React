//Crear una función que retorne cualquier nombre , sin mostrar en consola
function diElNombre(nombre) {
    return nombre;
}
console.log(diElNombre("carlos"));
//Crear una función que retorne la edad , sin mostrar por consola (está función necesita dos parámetros)
function tuEdad(añoNacimiento, añoActual) {
    return añoActual - añoNacimiento;
}
console.log(tuEdad(2002, 2024)+ "años");
//Crear una función que muestre por consola si la edad es mayor 18 años ( implementar callback)
    function años(añoNacimiento, añoActual, callback) {
    let years = añoActual - añoNacimiento;
    callback(years);
}
let cb = function mayorOmenor(years) {
    if (years >= 18) {
        console.log("eres mayor de edad");
    } else {
        console.log("eres menor de edad");
    }
}
años(2002, 2024, cb);
//Crear una función que saludé al usuario y de la bienvenida si este es mayor de edad (apliquen lógica para llegar al resultado )
function bienvenida(a, b, nombre) {
    let resta = a - b;
    if (resta >= 18 ) {
        console.log("hola "+ nombre+ " al ser mayor de edad, te doy la bienvenida");
    } else {
        console.log("hola "+ nombre);
    }
}
bienvenida(2024, 2002, "carlos");