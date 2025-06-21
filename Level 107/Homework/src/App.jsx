import { useState } from 'react'
import React from 'react'
import Parent from './components/Parent.jsx'

//Modularity gives a chance to locate all compomnents in their seperated files it makes code more easier to manage and more comfortable
//key is attribute that help us to determine which atribute is changed, added, or removed. when we using key in our list or whatever, key attribute won't mess up the order of the list and all items'd have their own index 


const fruits = ["Banana", "Apple", "Peach", "Orange"]
const cars = ["BMW", "Mercedes-Benz", "Audi", "Porsche"]
 const items = [
    { id: 1, name: 'Apple', type: 'fruit' },
    { id: 2, name: 'Carrot', type: 'vegetable' },
    { id: 3, name: 'Banana', type: 'fruit' },
    { id: 4, name: 'Broccoli', type: 'vegetable' },
  ];
  const items2 = [
    { id: 1, name: 'BMW', type: 'German' },
    { id: 2, name: 'Dodge', type: 'American' },
    { id: 3, name: 'Porsche', type: 'German' },
    { id: 4, name: 'Mustang', type: 'American' },
  ];
  const fruitee = items.filter(item => item.type == "fruit")
  const items22 = items2.filter(item2 => item2.type == "American")
function App() {
  return(
    <>
      <Parent/>
      <ul>
        {fruits.map((fruit, index)=>(
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <ol>
        {cars.map((car, i) => (
          <li key={i}>{car}</li>
        ))}
      </ol>
      <ul>
        {fruitee.map((fru, index) => (
          <li key={index}>{fru.name}</li>
        ))}
      </ul>
      <ol>
        {items22.map((car, i) =>(
          <li key={i}>{car.name}</li>
        ))}
      </ol>
    </>
    
  );
  
  
}

export default App
