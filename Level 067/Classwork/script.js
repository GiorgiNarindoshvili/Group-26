const form = document.getElementById("mainform");


form.disabled = true;

form.addEventListener('click', function(e){
    e.preventDefault()
    const name = form.elements.name
    const lastname = form.elements.lastname
    const email = form.elements.email
    const message = form.elements.message

    if (name.value == ""){
        name.style.borderColor = "red";
    } else {
        name.style.borderColor = "black";
    }
    if (lastname.value == ""){
        lastname.style.borderColor = "red";
    } else {
        lastname.style.borderColor = "black";
    }
    if (email.value == ""){
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "black";
    }
    if (message.value == ""){
        message.style.borderColor = "red";
    } else {
        message.style.borderColor = "black";
    }
})
