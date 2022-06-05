'use strict';

let add7 = (n) => n+7;
let multiply = (a,b) => a*b;
function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let lastLetter = (str) => str.charAt(str.length -1);

console.log(add7(2));
console.log(multiply(4,5));
console.log(capitalize('cook'));
console.log(lastLetter('jump'));
