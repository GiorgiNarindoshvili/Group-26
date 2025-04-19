

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('parent2');
        data.forEach(product => {
            container.innerHTML += `
            <h1>Title: ${product.title}</h1>
            <p>Description: ${product.description}
            <img src = ${product.image} width = 200px>
            <p>$${product.price}</p>`;
  });
});