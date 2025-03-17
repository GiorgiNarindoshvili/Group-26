const box = document.getElementById("child");
const move = 10;

let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= move;
                break
            case "ArrowDown":
                y += move;
                break
            case "ArrowRight":
                x += move;
                break
            case "ArrowLeft":
                x -= move;
                break
            
        }
        box.style.top = `${y}px`
        box.style.left = `${x}px`
    }
})