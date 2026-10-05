import { useEffect, useState } from 'react'
import axios from "axios";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(({ data }) => {
        setPersons(data);
      })
  }, [])

  const onFormSubmit = (event) => {
    event.preventDefault();
    const userExists = persons.filter(p => p.name === newName).length > 0;
    if (userExists) {
      alert(`${newName} is already added to phonebook`);
    } else if (!newName || !newNumber) {
      alert('new entry must have name and phone number')
    } else {
      console.log('submit');
      setPersons(persons.concat({ name: newName, number: newNumber }))
    }
    setNewName('');
    setNewNumber('');
  }

  const onNameInputChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  }
  const onNumberInputChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  }
  const onFilterChange = (event) => {
    event.preventDefault();
    setFilterValue(event.target.value);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={onFilterChange} value={filterValue} />

      <h3>Add new</h3>
      <PersonForm
        name={newName}
        number={newNumber}
        onNameChange={onNameInputChange}
        onNumberChange={onNumberInputChange}
        onSubmit={onFormSubmit} />

      <h3>Numbers</h3>
      <Persons persons={persons} filterValue={filterValue} />
    </div>
  )
}

export default App
