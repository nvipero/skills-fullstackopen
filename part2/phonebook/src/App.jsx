import { useEffect, useState } from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(data => {
        if (Array.isArray(data)) {
          setPersons(data)
        }
      })
  }, [])

  const onFormSubmit = (event) => {
    event.preventDefault();
    const existingUser = persons.find(p => p.name === newName);
    if (existingUser && !!newNumber) {
      if (window.confirm(`${newName} already exists, do you wish to replace number?`)) {
        personService.update({ ...existingUser, number: newNumber })
          .then((updatedPerson) => {
            setPersons(persons.map(person => person.id === existingUser.id ? updatedPerson : person ));
          })
      }
    } else if (!newName || !newNumber) {
      alert('new entry must have name and phone number')
    } else {
      personService.add({ name: newName, number: newNumber })
        .then((person) => {
            setPersons(persons.concat(person));
          }
        )
    }
    setNewName('');
    setNewNumber('');
  }
  const onDeletePerson = ({ name, id }) => {
    if (window.confirm(`Are you sure you want to remove ${name}?`)) {
      personService.deletePerson(id)
        .then(response => {
          if (response.status === 200) {
            setPersons(persons.filter(person => person.id !== id));
          }
        })
    }
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
      <Persons persons={persons} filterValue={filterValue} onDelete={onDeletePerson} />
    </div>
  )
}

export default App
