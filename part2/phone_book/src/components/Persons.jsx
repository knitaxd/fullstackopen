import React from 'react'
import { ButtonDelete } from './ButtonDelete'

export const Persons = ({newSearch, persons, filteredPersons, onDelete}) => {


  return (
    <ul>
    {
      newSearch.length < 1 ?
      persons.map((person) => {
        return (
          <li key={person.id}>
            {person.name} {person.number}
            <ButtonDelete 
              onDelete={onDelete}
              id={person.id}
              name={person.name}
            />
          </li>
          )
      })
      :
      filteredPersons.map((person) => {
        return (
          <li key={person.id}>
            {person.name} {person.number}
            <ButtonDelete 
              onDelete={onDelete}
              id={person.id}
              name={person.name}
              />
          </li>
          )
      })
    }
    </ul>
  )
}
