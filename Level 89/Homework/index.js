const advnumber = document.getElementById("advicetitl")
const advice = document.getElementById("advice1")
const butto = document.getElementById("button1")

butto.addEventListener('click', function(){
    fetch("https://api.adviceslip.com/advice").then(res => {
        return res.json()
    }).then(advice1 =>{
        const data = advice1.slip;
        advnumber.innerHTML = `<p>ADVICE # ${data.id}</p>`;
        advice.innerHTML = `<p>"${data.advice}"</p>`
    }).catch(err =>{
        console.log("Error is", err)
    })
})
   