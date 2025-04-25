const div = document.getElementById("parent2")

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json()
    })
    .then((answer) => {
        answer.forEach(element => {
            div.innerHTML += `
            
                <h1>Title ${element.title}</h1>
                <p>Price ${element.price}</p>
                <p>Description ${element.description}
                <img src = "${element.image}" width = 200px/>
            
        `
        })
    .catch((err) => {
        console.error(err)
    }) 
})
    