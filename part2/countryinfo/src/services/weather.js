import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const getCurrentWeather = ({ lat, lon }) => axios.get(`${API_URL}/weather`, {
  params: {
    lat,
    lon,
    units: 'metric',
    appid: API_KEY
  }
})
export default { getCurrentWeather }
