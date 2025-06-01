const div = document.getElementById("parent2")

async function second() {
    try{
        const fe = await fetch("https://fakestoreapi.com/products")
        const response = await fe.json()
        response.forEach(value => {
            div.innerHTML += `
                <h1>Title ${value.title}</h1>
                <p>Price ${value.price}</p>
                <p>Description ${value.description}
                <img src = "${value.image}" width = 200px/>
            
        `
        });
    }   catch(err){
        console.error(err)

    }
    
}
second()