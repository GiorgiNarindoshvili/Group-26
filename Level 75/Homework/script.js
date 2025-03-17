//1

const form = document.getElementById("form1");


form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const pass = form.elements.password.value;


    console.log(name);
    console.log(email);
    console.log(pass);
})


//2

//First Example 
const age = prompt("Enter Your Age:");
const compare = age <= 16 ? "I'm Bigger than You" : "You are bigger than me"
console.log(compare)

//Second Example
const num = prompt("Enter amount of points");
const points = num >= 49 ? "Real Madrid" : "Atletico Madrid";
console.log(points)

//Third example
const number1 = prompt("Enter the amount of cars");
const car1 = number1 >= 1 ? "There are more than one cars" : "There're No cars here";

//3
//first example
let a = true && false
console.log(a)

//second example
let b = "Mercedes" && "Audi"
console.log(b)

//third
let nm = false && false
console.log(nm)

//4  && Operators are working like in python, if there's one false in statements &&  operator would return false always, they could be worked on our es6 too like: let, var, const. ternary is like a if else function but in short version of js, it also sould be worked on const, let and var, and according that we can compare our stored variable in ternary to another variable and find some statements in log.

//5
//let example
{
    let con = 19;
    //we can use code here
    console.log(con)
    
}
//not here



//const example

{
    const numbeer = 50;
    //we can use numbeer code inside here
    console.log(numbeer)
}
//not at the outside

//var example
{
    var digit = 26;
    //we can use code digit in both here and out of the digit(only for war)
}

console.log(digit)

