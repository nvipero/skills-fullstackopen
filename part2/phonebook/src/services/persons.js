import axios from "axios";

const API_BASE_URL = 'http://localhost:3001';

const getData = (response) => response.data;

const getAll = () => axios.get(`${API_BASE_URL}/persons`).then(getData)
const add = data => axios.post(`${API_BASE_URL}/persons`, data).then(getData)
const update = data => axios.put(`${API_BASE_URL}/persons/${data.id}`, data).then(getData)
const deletePerson = id => axios.delete(`${API_BASE_URL}/persons/${id}`)

export default { getAll, add, update, deletePerson }
