import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import {ErrorComponent} from './components/Details'
import axios from 'axios'
import Spinner from './components/Spinner';
import Details from './components/Details';

function App() {

  const [cityName, setCityName] = useState("")

  const [weather, setWeather] = useState({
    type: "",
    temperature: 0,
    windSpeed: "",
    icon: "",
    cityName: "",
    cityCountry: ""
  })

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)

  const [error, setError] = useState(false)

  const searchFunction = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setWeather({})
      setSuccess(false)
      setLoading(true)
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
      await axios.get(url, {
        params: {
          q: cityName,
          units: "metric",
          appid: api_key,
        }
      }).then((res) => {
        setSuccess(true)
        setLoading(false)
        setError(false)
        setWeather({
          type: res.data.weather[0].description,
          temperature: res.data.main.temp,
          windSpeed: res.data.wind.speed,
          icon: res.data.weather[0].icon,
          cityCountry: res.data.sys.country,
          cityName: res.data.name
        })
      }).catch((error) => {
        setLoading(false)
        setSuccess(false)
        setError(true)
      })
    }else{
      setError(false)
    }
  }

  const setInput = (input) =>{
    setError(false)
    setCityName(input)
  }

  return (
    <div className='App'>
      <h1 className='app-name'>
        Wema Bank Weather App
      </h1>

      <SearchBar input={cityName} setInput={setInput} loadState={loading}
        search={searchFunction}
      ></SearchBar>

      {error && <ErrorComponent cityName={cityName} ></ErrorComponent>}

      {loading && <Spinner></Spinner>}

      {success && <Details weather={weather} ></Details>}

    </div>
  )
}

export default App;
