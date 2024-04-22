export function ErrorComponent({ cityName }) {
  return (
    <div className="error-message">
      <p>We currently have no information for the city '{cityName}' </p>
    </div>)
}


export default function Details({ weather }) {
  debugger
  const { cityName, cityCountry, type, windSpeed, icon, temperature } = weather
  return (
    <div>
      <h2 className='city-name'>{cityName}, {cityCountry}</h2>
      
      <div className="icon-temp">
        <img
          className=""
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={type}
        ></img>
        {Math.round(temperature)}
        <sup className="deg">°C</sup>

        <p className="type">{type.toUpperCase()}</p>

        <p className="des-wind"> Wind Speed {windSpeed}m/s</p>
      </div>

    </div>
  )
}