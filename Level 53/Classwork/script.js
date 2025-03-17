const myP = document.getElementById("hw");
const myBtn = document.getElementById("click");

function changeColor(){
    myP.textContent = "My color is Blue.";
    myP.style.color = "blue";
}

myBtn.onclick = changeColor;



