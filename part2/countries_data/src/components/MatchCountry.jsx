import { useEffect, useState } from 'react'
import axios from 'axios'

const api_key = '0bfdbadfede39f16388510f790df6ca9'

export const MatchCountry = ({name, capital, population, languages, flag}) => {
    // const [weather, setWeather] = useState()

    // useEffect(() => {
    //     axios
    //       // .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=Madrid`)
    //       .then((response) => {
    //         console.log(response.data)
    //       })
    //   }, [])

    return (
    <>
        <h1>{name}</h1>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <h2>Languages</h2>
        <ul>
            {
                Object.values(languages).map(language => {
                    return (<li key={language}>{language}</li>)
                })
            }
        </ul>
        <img src={flag}/>
    </>
  )
}
