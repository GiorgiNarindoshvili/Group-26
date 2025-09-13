import { useEffect, useState } from 'react'


const App = () => {
  const myKey = "24ae9e13ba1d3d871be297ee2804c819"
  const [city, setCity] = useState("")
  const[weather, setWeather] = useState(null)

  const fetchData = async (cityName) => {
      if (!cityName) return;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}&units=metric`)
      const data = await response.json()
      console.log(data)
      setWeather(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return(
    <main>
      <input type="text" placeholder='Enter a name of city' value={city} onChange={(e) => setCity(e.target.value)} onKeyDown={(e) => {
        if (e.key === "Enter") fetchData(city)
      }}/>
      {weather && weather.main&&(
        <h1>
          The weather in {weather.name} is {weather.main.temp}°C,  The pressure is {weather.main.pressure}
        </h1>
      )}
      
    </main>
  )
}


export default App
