//1.
//There are some types of hoistings: function hoisting, var hoisting, const hoisting and len hoisting, hoisting could change the declaration, which meeans that it can find and check all statements with function keyword in our file and get them at the top of the code(in console)

//2
const prnt = document.getElementById("parent")
const chld = document.getElementById("child")

prnt.addEventListener('click', ()=> {
    console.log("parent")
}, true)

chld.addEventListener('click', ()=> {
    console.log("child")
})