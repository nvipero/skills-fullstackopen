const styles = {
  color: 'gray',
  background: 'white',
  fontSize: '20px',
  borderStyle: 'solid',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px'
}

const success = { ...styles, color: 'green' }
const error = { ...styles, color: 'red' }

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const { text, type } = message;
  return (
    <div style={type === 'success' ? success : error }>
      {text}
    </div>
  )
}

export default Notification
