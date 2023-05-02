import { useState, useEffect } from "react"
import personService from './services/persons'
import Header from './components/Header'
import PersonForm from './components/PersonForm'
import PersonList from "./components/PersonList"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
      id: newName,
    }

    if (persons.some(a => a.name === newName || a.numberVal === newNumber)) return alert(`person with name ${newName} or number ${newNumber} is already added`)

    personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <Header text='Phonebook' />
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Header text='Numbers' />
      <PersonList persons={persons} />
    </div>
  )
}

export default App;