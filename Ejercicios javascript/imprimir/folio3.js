//mas Conceptos
//copiar objetos sin modificar el original
let user = {
    name: "Cosimo",
    age: 30,
  };
  
  let newUser = {}
    for (let key in user) {
      newUser[key] = user[key];
    }
  
  
  newUser.name = "Paolo";
  
  console.log(newUser);
  console.log(user)
  //-------------------------------------------------------------
  // iterar sobre las claves de un objeto
  let car = {
    name: "seat",
    color: "blue",
}
for (const key in car) {
   console.log(key, car[key]);
}
//---------------------------------------------------------------
// objeto con funciones
let students = [
    {id: 1, name: "Carlos", surname: "Estupiña", age: 21},
    {id: 2, name: "Pepe", surname: "Gonzalez", age: 21},
    {id: 3, name: "Cristiano", surname: "Ronaldo", age: 21},

]
for (i in students) {
   console.log(students[i]);
}