const WeatherInfo = ({ locationText, weather }) => {
  return (
    <div>
      <h2>Weather in {locationText}</h2>
      <p>Temperature {weather.main?.temp} Celcius</p>
      <img src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0]?.icon}.png`} />
      <p>Wind {weather.wind?.speed} m/s</p>
    </div>
  )
}

export default WeatherInfo
