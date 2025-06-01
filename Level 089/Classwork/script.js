const parent = document.getElementById("parent1")

fetch("https://fakestoreapi.com/products/2")
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        parent.innerHTML = `
            <p>Title: ${res.title}</p>
            <p>Description: ${res.description}</p>
            <p>Price: ${res.price}</p>
            <img src = "${res.image}" width = 200px/>
        `
    })