import { useState } from "react"
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', numberVal: '040-1234567' , id: 1 }
  ])
  const [numbers, setNumbers] = useState([])

  const [newName, setNewName] = useState('')
  const [copyName, setCopyName] = useState('')

  const [newNumber, setNewNumber] = useState('')
  const [copyNumber, setCopyNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      id: newName,
    }
    const numberObject = {
      numberVal: newNumber,
      id: newNumber,
    }

    setCopyName(copyName.concat(newName))
    setCopyNumber(copyNumber.concat(newNumber))

    if(JSON.stringify(copyName) === JSON.stringify(newName) || JSON.stringify(copyNumber) === JSON.stringify(newNumber)) {
      return alert(`${newName} or ${newNumber} is already added`)
    }

    setPersons(persons.concat(nameObject))
    setNewName('')

    setNumbers(numbers.concat(numberObject))
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, number) =>
          <Person key={person.id} person={person} number={number}/>)}
      </ul>
    </div>
  )
}

export default App;