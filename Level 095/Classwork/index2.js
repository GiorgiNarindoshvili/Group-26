const form = document.getElementById("form1");
let i = 1


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = form.elements.name.value
    const email = form.elements.email.value
    const age = form.elements.num.value

    localStorage.setItem("user", JSON.stringify([`user${i}list`, name, email, age], JSON.stringify[`user${i}list`, name, email, age]))
    i += 1;
})