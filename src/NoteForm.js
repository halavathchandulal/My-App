import React, {useState} from 'react'
import './NoteForm.css'

function NoteForm({addNote}) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addNote(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className='note-form'>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Enter your note here...'
      />
      <button type='submit'>Add Note</button>
    </form>
  )
}

export default NoteForm
