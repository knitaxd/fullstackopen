import { useEffect, useState } from "react";
import axios from "axios";
import { MatchCountry } from "./components/MatchCountry";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [showCountry, setShowCountry] = useState({});

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setCountries(response.data);
    });
  }, []);

  const countriesFilter = countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(search.toLowerCase())
    );
    
    const handleOnSearch = (e) => {
      setSearch(e.target.value);
      setShowCountry(countriesFilter)
  };
  
  const handleShow = (country) => {
    setShowCountry({
      ...showCountry,
      [country]: !showCountry[country]
    })
}

  return (
    <>
      <h3>find countries</h3>
      <input value={search} onChange={handleOnSearch} />
      {search === "" ? (
        ""
      ) : countriesFilter.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countriesFilter.length === 1 ? (
        <MatchCountry
          name={countriesFilter[0].name.common}
          flag={countriesFilter[0].flags.png}
          languages={countriesFilter[0].languages}
          capital={countriesFilter[0].capital}
          population={countriesFilter[0].population}
        />
      ) : (
        (<ul>
          {
        countriesFilter.map((country) => {
          return (
              <li key={country.area}>
                {country.name.common}
                {
                    showCountry[country.name.common] ?
                    <MatchCountry 
                    name={country.name.common} 
                    flag={country.flags.png}
                    languages={country.languages}
                    capital={country.capital}
                    population={country.population}
                    />  
                    : ''
                  }
              <button key={country.name.common} onClick={() => handleShow(country.name.common)}>show</button>
              </li>
              
          );
        })
      }</ul>)
      )}
    </>
  );
}

export default App;
