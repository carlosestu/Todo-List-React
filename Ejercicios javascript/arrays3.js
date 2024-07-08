// let names = ["Luca", "Marco", "Vittorio", "Giovanni"];
//     console.log(names.join(" - "));
// names.pop();
// names.push("Pippo");
// names.unshift("Giovanni")
// for (i in names) {
//     console.log(names[i])
// }

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