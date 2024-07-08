// conceptos basicos de sintaxis.
// while
let i = 0;
while (i < 10) {
    i++
    console.log(i)
    
}
// --------------------------------------------------------------------------------
//switch
let favoritefood =  "pizza";
switch (favoritefood) {
    case "pizza":
        console.log("¡Te gusta la PIZZA!");
        break;
    case "coconut":
        console.log("¡Te gusta el COCO!")
        break;
             default:
        console.log("¡Te gusta algo más!")
        break;
}
// --------------------------------------------------------------------------------
//operadorTernario
let isSunnyDay = true;
let isHomeworkCompleted = false;
let both;
if (isSunnyDay == true && isHomeworkCompleted == true) {
    both = true;
} else {
    both = false;
}
let result = both ? "Jesse can go out to play" : "Jesse stays at home";
console.log(result);

// --------------------------------------------------------------------------------
//funcionConSetTimeout
function sayHelloName(name)  {
    let saludo = "hola ";
   return saludo + name;
}
setTimeout (function() {
console.log(sayHelloName("carlos"));
}, 1000);
