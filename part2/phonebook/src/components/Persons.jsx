const Persons = ({ persons, filterValue }) => {
  const filterResults = person => person.name.toLowerCase().includes(filterValue.toLowerCase())

  return (
    <>
      {persons.filter(filterResults).map(person =>
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </>
  )
}

export default Persons
