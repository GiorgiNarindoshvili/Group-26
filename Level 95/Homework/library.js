const bookList = document.getElementById("mainul")
let newwBooks = []
let items = []

class Books{
    constructor(title, publishdate, author,genre, image){
        this.title = title;
        this.publishdate = publishdate;
        this.author = author
        this.genre = genre
        this.image = image
    }
        
}
const books = [
    new Books("To Kill a Mockingbird", 1960,  "Harper Lee", "Fiction", "https://covers.openlibrary.org/b/id/8225266-L.jpg"),
    new Books("1984", 1984, "George Orwell", "Dystopian",  "https://covers.openlibrary.org/b/id/7222246-L.jpg"),
    new Books("The Great Gatsby", 1925, "F. Scott Fitzgerald", "Fiction", "https://covers.openlibrary.org/b/id/7468670-L.jpg"),
    new Books("The Hobbit", 1937, "J.R.R. Tolkien", "Fantasy", "https://covers.openlibrary.org/b/id/6979861-L.jpg"),
    new Books("The Catcher in the Rye", 1951, "J.D. Salinger", "Coming-of-Age", "https://covers.openlibrary.org/b/id/8231856-L.jpg"),
    new Books("Moby-Dick", 1851, "Herman Melville", "Adventure", "https://covers.openlibrary.org/b/id/8100925-L.jpg"),
    new Books("Harry Potter and the Sorcerer's Stone", 1997, "J.K. Rowling", "Fantasy", "https://covers.openlibrary.org/b/id/7884866-L.jpg")
    
    ];

    books.forEach((book1, index) => {
        bookList.innerHTML += `
        <div class = "childdiv" style="margin-bottom: 20px; border: 1px solid #ccc; padding: 10px; width: 300px;">
            <img src = "${book1.image}" style = "width: 200px"
            <h1>Title: ${book1.title}</h1>
            <h2>Author: ${book1.author}</h2>
            <p class = "gen">Genre: ${book1.genre}</p>
            <p class = "published">Published: ${book1.publishdate}</p>
            <button onclick="addBook(${index})">Add In Books</button>
        </div>
        `
    })

const addBook = (index) => {
    items.push(newwBooks[index])
    localStorage.setItem("")
}


    