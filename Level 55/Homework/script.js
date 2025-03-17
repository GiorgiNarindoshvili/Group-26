//1
let num1 = prompt("Enter Your Number: ")
let num2 = prompt("Enter Your Second Number: ")

num1 = Number(num1)
num2 = Number(num2)

console.log(num1 + num2)

//2
const form = document.getElementById('formm1');

function formSubmit() {
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);

    form.reset();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formSubmit();
})



//3 best practices of JS
//best practies of JS are: var, const or let, based on these keywords, you can declare variable.

//4
//One of the best practices are comments to describe, comments are helping people to understand productively about code, also best practice is indentation, based on the indentation, our code will look like more exceptional and will be good for read.