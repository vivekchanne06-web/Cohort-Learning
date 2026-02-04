import React, { useEffect, useState } from 'react'
import axios from  'axios'


const App = () => {

  const [notes, setNotes] = useState([])
    

function fetchNotes(){
  axios.get("https://cohort-learning-task.onrender.com/api/notes")
.then(response => {
  setNotes(response.data.findNotes)
})
}

useEffect(() => {
  fetchNotes()
},[])


function handleSubmit(e){
  e.preventDefault()
  
  const {title, description} = e.target.elements


axios.post("https://cohort-learning-task.onrender.com/api/notes", {
  title: title.value,
  description: description.value
})
.then(res => {
  console.log(res.data);
  
  fetchNotes()
  e.target.reset()
  
})
}

function handleDelete(noteId){
axios.delete("https://cohort-learning-task.onrender.com/api/notes/"+noteId)
.then(response => {
  console.log(response.data);
  fetchNotes()
})
  console.log(noteId);
}

function handleUpdate(noteId) {

  const changeTitle= prompt("Enter new title:");
  const changedis = prompt("Enter new description:");

  axios.patch("https://cohort-learning-task.onrender.com/api/notes/" + noteId, {
    description: changedis,
    title: changeTitle
  })
    .then(response => {
      console.log(response.data);
      fetchNotes();
    });
}

  
  return (
    <>
      <div className="heading"><h1>My Note Card</h1>
      <p>Click to create, update, or delete notes.</p>
      </div>
    <form className='note-create' onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='Enter Title' />
      <input  name='description' type="text" placeholder='Enter Description' />
      <button>Create Note</button>
    </form>

      <div className="notes">
        {
          notes.map(note => (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => handleDelete(note._id)}>Delete</button>
              <button onClick={() => handleUpdate(note._id)}>Update</button>
            
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
