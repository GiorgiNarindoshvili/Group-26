const form = document.getElementById("formm1");
const button = document.getElementById("btn");

button.addEventListener('click', function (e){
    e.preventDefault();
    console.log(form.elements.name.value);
})