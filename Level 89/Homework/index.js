fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(adciv => {
    const advicee= document.getElementById('advi');
    const advice = adciv.slip;
    advicee.innerHTML = `
        <p>ADVICE #${advice.id}</p>
        <h1>${advice.advice}</h4>
        <img src='./images/pattern-divider-desktop.svg' id="img1">
        <button class="diceroll" onclick="location.reload()"><img src='./images/icon-dice.svg'></button>
    `
    })
   