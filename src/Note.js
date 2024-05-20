import React from 'react'
import './Note.css'

function Note({note, index, deleteNote}) {
  return (
    <div className='note'>
      <p>{note}</p>
      <button onClick={() => deleteNote(index)}>Delete</button>
    </div>
  )
}

export default Note
