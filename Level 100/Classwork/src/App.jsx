import React from "react";
import { animals } from "./animal.js";

function App() {
  const title = ""; 
  const showBackground = true;
  function displayFact(e) {
    const animalName = e.target.alt;
    const animal = animals[animalName];
    const randomIndex = Math.floor(Math.random() * animal.facts.length);
    const funFact = animal.facts[randomIndex];

    const factElement = document.getElementById("fact");
    factElement.innerHTML = funFact;
  }

  const images = [];
  for (const animal in animals) {
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
    );
  }

  return (
    <div>
      <h1>{title || "Click an animal for a fun fact"}</h1>
      <div className="animals">{images}</div>
      <p id="fact"></p>
      {showBackground && <div className="background"></div>}
    </div>
  );
}

export default App;