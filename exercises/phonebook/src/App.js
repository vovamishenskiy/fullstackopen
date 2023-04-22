import { useState } from "react"
import Header from './components/Header'
import PersonForm from './components/PersonForm'
import PersonList from "./components/PersonList"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', numberVal: '040-1234567', id: 1 }
  ])

  const [newName, setNewName] = useState('')
  const [copyName, setCopyName] = useState('')

  const [newNumber, setNewNumber] = useState('')
  const [copyNumber, setCopyNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      numberVal: newNumber,
      id: newName,
    }

    setCopyName(copyName.concat(newName))
    setCopyNumber(copyNumber.concat(newNumber))

    if (JSON.stringify(copyName) === JSON.stringify(newName)
      || JSON.stringify(copyNumber) === JSON.stringify(newNumber)) {
      return alert(`${newName} or ${newNumber} is already added`)
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
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