const form = document.getElementById("form");
let i = 1;

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = form.elements.name.value
    const email = form.elements.email.value
    const pass = form.elements.pass.value

    localStorage.setItem(`person${i}`, JSON.stringify({name, email, pass}))
    i+=1;
    
})