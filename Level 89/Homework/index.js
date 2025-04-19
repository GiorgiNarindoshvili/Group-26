fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
    const advice1= document.getElementById('advi');
    const advice = data.slip;
    advice1.innerHTML = `
        <p>ADVICE #${advice.id}</p>
        <h1>${advice.advice}</h4>
        <img src='./images/pattern-divider-desktop.svg' id="img1">
        <button class="diceroll" onclick="location.reload()"><img src='./images/icon-dice.svg'></button>
    `
    })
   