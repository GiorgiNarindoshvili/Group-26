//3
const img = document.getElementById("image1");
const next = document.getElementById("nex");
const prev = document.getElementById("pre");

let i = 0;
const image = [
    "/thimg.jpg",
    "/thimg2.jpg",
    "/thimg3.jpg",
    "/thimg4.jpg",
    "/thimg5.jpg",
    
]

next.addEventListener('click', () => {
    i++;
    if(i == image.length){
        i = 0;
    }
    img.src = image[i]    
})

prev.addEventListener('click', () => {
    i--;
    if(i == image.length){
        i = 6;
    }
    img.src = image[i];  
})