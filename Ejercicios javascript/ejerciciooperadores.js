const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;

console.log(isSunnyDay && isSummer);
console.log(isSunnyDay || isSummer);
console.log(isSummer || itIsRaining);
console.log(isSunnyDay && isAutumn);
console.log(isSummer && itIsRaining);
console.log(isAutumn || itIsRaining);