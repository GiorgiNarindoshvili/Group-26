import { useState } from 'react'
import React from 'react'
import Products from './components/Product.jsx'


function App() {
  const product1 = ["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", 109.95];
  const product2 = ["https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","Mens Casual Premium Slim Fit T-Shirts ",  "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", 22.3];
  const product3 = ["https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", "Mens Cotton Jacket", "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", 55.99];
  return(
    <>
      <Products productInfo={product1}/>
      <Products productInfo={product2}/>
      <Products productInfo={product3}/>
      <ul>
        {product1.map((product, index)=>(
          <li key={index}>{product}</li>
        ))}
      </ul>
      <ol>
        {product2.map((produc2, index)=>(
          <li key={index}>{produc2}</li>
        ))}
      </ol>
      <ol>
        {product3.map((produc3, i) =>(
          <li key={i}>{produc3}</li>
        ))}
      </ol>
    </>
    
  )
  
}

export default App
