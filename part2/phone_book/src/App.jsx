import { useEffect, useState } from "react"
import { Filter } from "./components/Filter"
import { PersonForm } from "./components/PersonForm"
import { Persons } from "./components/Persons"
import noteService from './services/notes'
import './App.css'
import { Notification } from "./components/Notification"

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    noteService
      .getAll()
      .then((response) => {
        setPersons(response.data)
      })
  
  }, [])
  

  const addName = (e) => {
    e.preventDefault()
    
    if(newName.length < 1 || newNumber.length < 1) {
          return alert('Datos de contacto incompletos')
        }
    
    checkNames() ?
      window.confirm(`${newName} already exist in the phonebook, do you want to replace the old number with a new one?`) ?
      onUpdateNumber(newName, newNumber)
      :
      ''
    :
    onNewContact()
  }

  const checkNames = () => {
    return persons.some(person => person.name === newName)
  }

  const onChangeName = (e) =>{
    setNewName(e.target.value)
  }

  const onChangeNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const onSearchPerson = (e) => {
    setNewSearch(e.target.value)  
  }

  const onDelete = (id, name) => {
    window.confirm(`Do you want to delete '${name}'?`) ?
    noteService
      .deletePerson(id)
      .then(response => setPersons(response.data))
      :
      ''
  }

  const onUpdateNumber = (newName, newNumber) => {
    const person = persons.find(person => person.name === newName)

    const updatedPerson = {
      ...person, number: newNumber
    }

    noteService
      .update(updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
        setSuccessMessage(`You updated the number of ${returnedPerson.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000);
      })
      .catch(e => {
        setErrorMessage(`Information of ${person.name} has already been deleted from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
      })
  }
  
  const onNewContact = () => {
    const newPerson = {
      name:  newName,
      number: newNumber,
    }
    noteService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons([...persons, returnedPerson])
        setNewName('')
        setNewNumber('')
        setSuccessMessage(`You added ${returnedPerson.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000);
      })

  }

  
  const filteredPersons = persons.filter(({name}) => name.toLowerCase().startsWith(newSearch.toLowerCase()))  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage !== null ? successMessage : errorMessage} style={successMessage !== null ? 'succes' : 'error'}/>
      <Filter newSearch={newSearch} onSearchPerson={onSearchPerson} />
      <h2>Add a new contact</h2>
      <PersonForm 
          addName={addName} 
          newName={newName} 
          setNewName={setNewName} 
          onChangeName={onChangeName} 
          newNumber={newNumber} 
          setNewNumber={setNewNumber} 
          onChangeNumber={onChangeNumber}
        />
      <h2>Numbers</h2>
      <Persons 
        filteredPersons={filteredPersons} 
        newSearch={newSearch} 
        persons={persons} 
        onDelete={onDelete}
      />
    </div>
  )
}


export default App
