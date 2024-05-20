import React, {useState} from 'react'
import Note from './Note'
import NoteForm from './NoteForm'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  const addNote = note => {
    setNotes([...notes, note])
  }

  const deleteNote = index => {
    const newNotes = [...notes]
    newNotes.splice(index, 1)
    setNotes(newNotes)
  }

  return (
    <div className='app'>
      <h1>Note App</h1>
      <NoteForm addNote={addNote} />
      <div className='notes'>
        {notes.map((note, index) => (
          <Note key={index} index={index} note={note} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  )
}

export default App
