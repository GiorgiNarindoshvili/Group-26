const parent = document.getElementById("parent1")

async function pro1(){
    try{
    const res = await fetch("https://fakestoreapi.com/products/2")
    const data = await res.json()

    parent.innerHTML = `
            <p>Title: ${data.title}</p>
            <p>Description: ${data.description}</p>
            <p>Price: ${data.price}</p>
            <img src = "${data.image}" width = 200px/>
        
    `
    }
    catch(err){
        console.error(err)
    }
}
pro1()
    
