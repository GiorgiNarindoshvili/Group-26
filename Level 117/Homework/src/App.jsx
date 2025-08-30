import { useEffect, useState } from 'react'
///useEffect - კაუჭი, როდესაც მდგომარეობის შეცვლის შემდეგ ახდენს რაღაც მოვლენას, მას გადაეცემა 2 არგუმენტი, პირველია callback ფუნქცია რომელიც useEffect ს გამოიძახებს მაშინ როდესაც რომელიმე მდგომარეობა შეიცვლება


const App = () => {
    const [userInput, setUserInput] = useState("")
    const [books, setBooks] = useState([])
  
  
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${userInput}`)
            .then(response => response.json())
            .then(result => {
                if(result.items){
                    setBooks(result.items) 
                }else{
                    setBooks([])
                }
            })
    }, [userInput])
        
    
          
    
 
  return(
    <div>
        <h1>Search Books By Genre</h1>
        <input type="text" placeholder='Enter a Genre, title, or something else to search a book' onChange={(e) => setUserInput(e.target.value)}/>
        <div>
            {books.map((book)=>{
                return(
                    <div key={book.id}>
                        <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
                        <h3>Title: {book.volumeInfo.title}</h3>
                        <p>{book.volumeInfo.authors?.join(", ")}</p>
                        <p>{book.volumeInfo.categories?.join(", ")}</p>
                    </div>
                )
                
            })}
        </div>
    </div>
  )
}


export default App
