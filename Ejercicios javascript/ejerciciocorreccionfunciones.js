//function sayHelloName(name) {
   // let saludo = "hola ";
  //  return saludo + name;
//};
// console.log(sayHelloName("carlos "));
function sayHelloName(name)  {
    let saludo = "hola ";
   return saludo + name;
}
setTimeout (function() {
console.log(sayHelloName("carlos"));
}, 1000);



