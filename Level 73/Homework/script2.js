//4
const img = document.getElementById("image1");
const next = document.getElementById("next");
const prev = document.getElementById("previous");

let i = 0;
const images = [
    "/nature.jpg",
    "/nature1.jpg",
    "/nature2.jpg",
    "/nature3.jpg",
    "/nature4.jpg",
    "/nature5.jpg",
    "/thimg6.jpg"

]

next.addEventListener('click', () =>{
    i++;
    if(i == images.length){
        i = 0;
    }
    img.src = images[i]
})

prev.addEventListener('click', () =>{
    i++;
    if(i == images.length){
        i = 6;
    }
    img.src = images[i]
})


