import personService from '../services/persons'

const Person = ({ person }) => {
    const deletePerson = () => {
        personService
            .personDelete(person)
            .then(deletedPerson => {
                person.pop(deletedPerson)
            })
    }

    return <li>{person.name} {person.number} <button onClick={deletePerson}>delete</button></li>
}

export default Person