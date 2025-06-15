//1 What is a JSX?
//JSX stands for javascript XML and we can write html code into a jsx for more faster websites and it makes HTML code more easier to read and write
//2 How virtual DOM works?
//as we know, When code repeats multiple times, it crashes the website and website gets stucked, according to that error, website stops working and customers are so unsatisfied, but in Virtual DOM, code doesn't repeat multiple times, so it makes website more faster and comfortable for customers, when something bugs on the web, virtual DOM works only on that bug, other components are working properly which is subject that says that jsx is better than default vanilla javascript




import React from "react"

function App() {
  const unordered = 
  <ul>
    <li>Nika</li>
    <li>Giorgi</li>
    <li>Saba</li>
    <li>Tekla</li>
    <li>Salome</li>
  </ul>
  return(
    <p>{unordered}</p>
  )
}

export default App
