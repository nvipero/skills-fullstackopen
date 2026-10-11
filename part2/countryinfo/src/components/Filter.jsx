const Filter = ({ onFilterChange, filterValue }) => {
  return (
    <>
      Find countries: <input type='text' onChange={onFilterChange} value={filterValue} />
    </>
  )
}

export default Filter;
