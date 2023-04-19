import { useState } from "react"
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { content: 'Arto Hellas', id: 1 }
  ])

  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      content: newName,
      id: newName,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)

  // console.log(JSON.stringify(persons.content) === JSON.stringify(newName.content))
  console.log(newName in persons)

  // const existingPerson = persons.filter(person => person.newName === persons.newName)
  // if(!existingPerson) console.log('error')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} person={person} />)}
      </ul>
    </div>
  )
}

export default App;