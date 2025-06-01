//Task 1
let num1 = 200
let num2 = 70

console.log(num1 + num2)

//Task 2
let mynme = "My Name is"
let girgi = "Giorgi"
console.log(mynme + " " + girgi)

//Task 3
const myImg = document.getElementById("img1");
const myButton = document.getElementById("change1");

function changeSize(){
    myImg.style.width = "600px"
    myImg.style.width = "600px"
}
myButton.onclick = changeSize;

// Task 4
const myImgg = document.getElementById("img1");
const myButtonn = document.getElementById("change1");

function changeColor(){
    myImg.src = "https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=4%2C12%2C2679%2C1521&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
}
myButtonn.onclick = changeColor;

