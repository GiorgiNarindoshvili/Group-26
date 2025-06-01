//1
const getAnswer = require("./calculator.js")
console.log(getAnswer(125, 5, "add"))
console.log(getAnswer(134, 23, "subtract"))
console.log(getAnswer(34, 12, "multiply"))
console.log(getAnswer(64, 8, "divide"))

//2 
const {filter, calculator} = require("./calculator.js")


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const evens = filter(numbers, function(num){
    return num % 2 == 0
});
const odds = filter(numbers, function(num2){
    return num2 % 2 != 0
})
console.log("Odd numbers of our list are: ", odds)
console.log("Even numbers of our list are: ", evens);
const res = calculator(10, 5, "multiplication");
console.log("Result of calculator: ", res)
 
//modulo.exports are the way to export function from one file to another, so technically it is used for exporting but its and old way
//require is the way to import our exported function into main file, thus it's used for importing but it's an old way