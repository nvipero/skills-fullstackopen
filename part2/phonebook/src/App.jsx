import { useState } from 'react'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

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
