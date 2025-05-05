const parent = document.getElementById("box")
const button = document.getElementById("button")
const search = document.getElementById("logoandtext")

async function getUser() {
    button.addEventListener('click', async function(e) {
    e.preventDefault()
    let GiorgiNarindoshvili = search.elements.GiorgiNarindoshvili.value
    const fe = await fetch(`https://api.github.com/users/${GiorgiNarindoshvili}`)
    const data = await fe.json()
    data.forEach(element => {
        parent.innerHTML += `
            <div class = allinfo>
                <img src = "${element.avatar_url}" width = 90px>
                <h3>${element.message}</h3>
            </div>
        `
    });
})  
}
getUser()
