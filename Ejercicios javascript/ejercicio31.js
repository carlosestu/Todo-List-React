//function sayHelloName(printName, callback) {
    //console.log("hello "+ cb(printName));
//}
//let cb = function printName(nombre) {
    //console.log (nombre);
//};
//sayHelloName("carlos", cb);

/*function sayHelloName(saludo, callback) {
    callback(saludo);
}
let cb = function printName(nombre) {
    console.log("hola "+ nombre);
};
sayHelloName("carlos", cb);*/

function sayHelloName(saludo) {
     printName(saludo);
}
function printName(nombre) {
    console.log("Nombre es igual a " + nombre);
    console.log( "hola "+ nombre);
};
sayHelloName("Carlos");