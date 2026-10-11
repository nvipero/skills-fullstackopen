import axios from 'axios';

const API_URL = 'https://studies.cs.helsinki.fi/restcountries/api';

const getData = (response) => response.data;

const getAll = () => axios.get(`${API_URL}/all`).then(getData)
const getByName = (name) => axios.get(`${API_URL}/name/${name}`).then(getData)
export default { getAll, getByName }
