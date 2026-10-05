const PersonForm = ({ onNameChange, name, onNumberChange, number, onSubmit }) => {
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div>
        name: <input onChange={(event) => onNameChange(event)} value={name} />
        <br/>number: <input onChange={(event) => onNumberChange(event)} value={number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
