import CountryInfo from './CountryInfo.jsx';

const ResultList = ({ results, selectCountry }) => {
  if (!results) {
    return null;
  }

  if (results.length > 10) {
    return (
      <p>Too many results, specify another filter</p>
    )
  } else if (results.length === 1) {
    return <CountryInfo country={results[0]} />
  } else if (results.length > 1) {
    return (
      <ul>
        {results.map(country => (
          <li key={country?.cca2}>
            {country?.name?.common}&nbsp;
            <button onClick={() => selectCountry(country?.name?.common)}>show</button>
          </li>))}
      </ul>
    )
  } else {
    return (<p>No results</p>)
  }
}

export default ResultList
