// arrow functuions

//1
const sum = (x) =>{
    return x * 2
}
console.log(sum(2))

//2 
const hello = (hello1) => {
    return hello1
}
console.log(hello("Hello World"))

//3
const subtraction = (a, b) => {
    return a - b
}
console.log(subtraction(99, 45))

//Template Literals

//1
const name1 = "Giorgi"
const name2 = "Guga"

console.log(`My name is ${name1} \nMy name ain't ${name2}`)

//2
const num1 = 15
const num2 = 78

console.log(`The multiplication result of num1 and num2 is ${num1 * num2} \nnot the ${3 * num1 * num2}`)

//3 
const an1 = "Dog"
const an2 = "Cat"

console.log(`My favorite animal isn't zebra, \nMy favorite animals are ${an1 + " "+ "and " + an2}`)

//shorthand property names

//1
const nameone = "Giorgi"

const resname1 = {
    nameone
}
console.log(resname1)

//2
const nametwo = "Erekle"

const resnametwo = {
    nametwo
}
console.log(resnametwo)

//3 
const animal = "Lion"
const resanimal = {
    animal
}
console.log(resanimal)

//Parameter Defaults
//1
function person1(namenew = "Somebody", greet = "Hello"){
    console.log(greet + " " + namenew)
}
person1("Giorgi")

//2
function person2(namenew2 = undefined, greet2 = "Hello"){
    console.log(greet2 + " " + namenew2)
}
person1("Zura")

//3
function person3(namenew3 = null, greet3 = "Hello"){
    console.log(greet3 + " " + namenew3)
}
person1("Zaza")

//spread
//1
const lst1 = [1,2,3,4]
const lst2 = [5,6,7,8]
const rest = [...lst1, ...lst2]
console.log(rest)

//2
const namefirst = "Giorgi"
const namesecond = "Ana"
const resti = [...namefirst, ...namesecond]
console.log(resti)

//3
const lstfrst = [7,8,21,546,7,56]
const lstscnd = [10,99,34,65]
const rest1 = [...lstfrst, ...lstscnd]
console.log(rest1)

//rest

//1
const per1 = {namefi: "Alice", Job: "Web Developer", Age: 29}
const application1 = {namefi, ...details} = per1
console.log(application1)

//2
const per2 = {namefi2: "Data", Job2: "Mentor", Age2: 17}
const application2 = {namefi2, ...details2} = per2
console.log(application2)

//3
const[first, second,...res] = [1,2,3,4,5]
console.log(first)
console.log(second)
console.log(res)