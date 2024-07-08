// .pop(elimina el ultimo en un array), 
// .push(permite crear un elemento al final de un array, puede ser una funcion constructora)
let students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
  ];
  students.pop();
  students.push({ id: 3, name: "Franchesco", surname: "Verdi", age: 41 },);
  for (let i = 0; i <students.length; i++){
    console.log(students[i]);
  }
  //--------------------------------------------------------------------------------------
  // funcion que recorre una escala de un numero a otro
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
//-----------------------------------------------------------------------------------------
// funcion constructora
function Smartphone (brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    }
    let newsmart = new Smartphone("xiami", "redmi", 300);
    console.log(newsmart);