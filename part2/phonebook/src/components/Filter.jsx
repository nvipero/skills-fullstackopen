const Filter = ({ onChange, value }) => {
  return (
    <>
      filter shown with <input onChange={(event) => onChange(event)} value={value} />
    </>
  )
}

export default Filter
