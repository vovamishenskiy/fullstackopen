import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [country, setCountry] = useState('')
  const url = 'https://restcountries.com/v3.1/name/spain'
  fetch(url)
  .then(response => console.log(response.json()))

  return (
    <div>
      <span>find countries </span>
      {/* <input value={country} onChange={handleCountryChange} /> */}
    </div>
  )
}

export default App