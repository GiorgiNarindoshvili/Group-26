const form1 = document.getElementById("form1")
const info = document.getElementById("wholeinfo")

form1.addEventListener('submit', async(e) =>{
    e.preventDefault()
    info.innerHTML = ""

    let informa = form1.elements.book.value
    console.log(informa)

    try{
        const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${informa}`)
        const resultres = await result.json()
        const data = resultres.items;

        data.forEach(element => {
            info.innerHTML += `
                <div>
                    <p>Title: ${element.volumeInfo.title}</p>
                    <p>Author: ${element.volumeInfo.authors[0]}</p>
                    <p>Description: ${element.volumeInfo.description}</p>
                    <p>Publish Date: ${element.volumeInfo.publishedDate}</p>
                    <p>Number of Pages: ${element.volumeInfo.pageCount}</p>
                    <img src = ${"imageLinks" in element.volumeInfo ? element.volumeInfo.imageLinks.thumbnail: ""}/>
                </div>
            `
        });
    }
    catch(err){
        console.log("Error is:", err)
    }
})
