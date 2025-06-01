import { animals } from "./animal.js";
import React from 'react';

function App() {
  const title = ' ';
  const showBackground = true
  function displayFact(e){
    const animalName = e.target.alt
    const animal = animals[animalName]
    const random = Math.floor(Math.random * animal.facts.length)
    const funfact = animal.facts[random]

    const factElement = document.getElementById('fact');
    factElement.innerHTML = funfact;
  }

  const images = [];
  for(const animal in animals){
    images.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role="button"
        onClick={displayFact}
        />
    )
  }
  const animalFacts = (
    <div className="background">
      <h1>{title ? title : "Click an animal for a fun fact"}</h1>
      <div className="animals">{images}</div>
      <p id="animalFacts">fact</p>
      {showBackground && <div className="background"></div>}
    </div>
    
  ) 
  return animalFacts;

}


export default App
