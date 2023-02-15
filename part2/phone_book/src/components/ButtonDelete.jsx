import React from 'react'

export const ButtonDelete = ({onDelete, id, name}) => {
  return (
    <button onClick={() => onDelete(id, name)}>delete</button>
  )
}
