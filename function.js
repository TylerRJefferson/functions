// function addTwo(a,b) {
// const addTwo = (a,b) => { // line 1 and line 2 do the exact same thing
//   return a + b
// }

const addTwo = require("./external.js")
const subtract = require("./minus.js")

console.log('None of this minus stuff! We dont do negative!')

//const sum = addTwo(3,4)
//console.log(sum)

const total = subtract(15,5)
console.log(total)