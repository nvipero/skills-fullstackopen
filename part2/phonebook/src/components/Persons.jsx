const Persons = ({ persons, filterValue, onDelete }) => {
  const filterResults = person => person.name.toLowerCase().includes(filterValue.toLowerCase())

  return (
    <>
      {persons.filter(filterResults).map(person =>
        <p key={person.name}>
          {person.name}&nbsp;{person.number}&nbsp;
          <button onClick={() => onDelete(person)}>delete</button>
        </p>
      )}
    </>
  )
}

export default Persons
