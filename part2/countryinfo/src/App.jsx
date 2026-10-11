import {useEffect, useState} from 'react';
import countryService from './services/countries';
import ResultList from './components/ResultList';
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterValue, setFilterValue] = useState('')
  const [filteredCountries, setFilteredCountries] = useState(null)

  useEffect(() => {
    countryService.getAll()
      .then(response => {
        setCountries(response);
      })
  }, [])

  useEffect(() => {
    if (filterValue) {
      setFilteredCountries(countries.filter(c => c.name?.common?.toLowerCase().includes(filterValue.toLowerCase())))
    } else {
      setFilteredCountries(null)
    }
  }, [filterValue])

  const onFilterChange = (event) => {
    event.preventDefault();
    setFilterValue(event.target.value)
  }

  return (
    <>
      <Filter filterValue={filterValue} onFilterChange={onFilterChange} />
      <ResultList results={filteredCountries} selectCountry={setFilterValue} />
    </>
  )
}

export default App
