import React from 'react'

export const Filter = ({newSearch, onSearchPerson}) => {
  return (
    <div>
        Are you looking for some one? <input value={newSearch} onChange={onSearchPerson}/>
    </div>
  )
}
