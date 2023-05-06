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

    const existingPerson = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())

    if (existingPerson && existingPerson.number !== newNumber){
      if(window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)){
        const changedPerson = {...existingPerson, number: newNumber}
        const id = existingPerson.id

        personService
          .update(id, changedPerson)
          .then((returnedPerson) => {
            setPersons(persons.map((person) => (person.id !== id ? person : returnedPerson)))
            setNewName('')
            setNewNumber('')
          })
      }
    }

      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
  }

  const deletePerson = (id) => {
    if (window.confirm(`Delete ${id}?`)) {
      personService
        .deletePerson(id)
        .then(setPersons(persons.filter((person) => person.id !== id)))
    }
  }

  // const updatePerson = (id, newObject) => {

  // }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <Header text='Phonebook' />
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Header text='Numbers' />
      <PersonList persons={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App;