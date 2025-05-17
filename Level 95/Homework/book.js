const div = document.getElementById("parent");
let books = JSON.parse(localStorage.getItem("My Books"))
let readedBooks = []

const removeBooks = (index1) =>{
    let remo = books.filter((_, i) => i !== index1)
    localStorage.setItem("My Books", JSON.stringify(remo))
    render(remo)
}


    const render = (library) => {
    div.innerHTML = "";
    library.forEach((element, index1) => {
        div.innerHTML += `
            <div id = "bks">
                <img src = "${element.image}" style = "width: 200px"
                <p>Title: ${element.title}</p>
                <p>Author: ${element.author}</p>
                <p>Genre: ${element.genre}</p>
                <p>Published: ${element.publishdate}
                <button onclick="removeBooks(${index1})">Remove Books</button>

            </div>
        `
    });
}

const readedBook = (index) =>{
    readedBook.push(library[index])
    localStorage.setItem("Read Books". JSON.stringify(readedBook))
}

render(books)



