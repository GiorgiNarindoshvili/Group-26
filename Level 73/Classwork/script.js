//1
//during function hosting, function hosts at the top of the function, so we can call this function, while let/const function works and looks same but it doesn't initialized

//2
//during bubbling event happens on the starting direction and goes to parent element

//during capturing event starts from top and it goes to down where the child element happened

const img = document.getElementById("image1");
const nxt = document.getElementById("nex");
const prev = document.getElementById("pre");

let i = 0;
const image = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg"
];

nxt.addEventListener('click', () => {
    i++;
    if(i == image.length){
        i = 0;
    }
    img.src = image[i]
})

prev.addEventListener('click', () => {
    i--;
    if(i == 0){
        i = 3;
    }
    img.src = image[i];
})