import {useEffect, useState} from 'react';
import WeatherInfo from './WeatherInfo';
import weatherService from '../services/weather';

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const languageArray = Object.entries(country.languages);
  const capital = country.capital[0];

  useEffect(() => {
    const [capitalLat, capitalLng] = country.capitalInfo.latlng;
    weatherService.getCurrentWeather({ lat: capitalLat, lon: capitalLng })
      .then((response) => {
        setWeather(response.data)
      })
      .catch(error => {
        if (error.status === 401) {
          console.log('unable to get weather info, unauthorized')
        }
      })
  }, [])

  return (
    <>
      <h1>{country.name?.common}</h1>
      <p>
        Capital {capital}<br/>
        Area {country.area}
      </p>
      <h2>Languages</h2>
      <ul>
        {languageArray.map(([key, lang]) => <li key={key}>{lang}</li>)}
      </ul>
      <img src={country.flags?.svg} alt={country.flags?.alt} style={{ width: '25%' }} />
      {weather && <WeatherInfo locationText={capital} weather={weather} /> }
    </>
  )
}

export default CountryInfo;
