const inputField = document.getElementById('form1');
const button = document.getElementById('but1');
const label = document.getElementById('lbl1')

button.addEventListener('click', function(e){
    e.preventDefault()

    
    if(inputField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        if (email.value === ""){
        email.style.borderColor = "red"
    }else{
        email.style.borderColor = "black"
    }
}
})

