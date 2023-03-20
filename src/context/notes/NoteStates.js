import React , {useState, useContext} from 'react';
import noteContext from './noteContext';
import alertContext from './alertContext';

const NoteStates = (props) => {
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  let [activeNote, setActiveNote] = useState(false);
  let [activeNotes, setActiveNotes] = useState([]);
  const [previousNote, setPreviousNote] = useState(false);
  const [deleteNotes, setDeleteNotes] = useState(false);
  let [loading, setLoading] = useState(false);
  const context = useContext(alertContext);
  const {showAlert} = context;

  // let localStorage.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjQxNmFlMjdjNDYwNjI4YzQyNTllOGU2In0sImlhdCI6MTY3OTIwOTU3NH0.QQi7varRGtAsqxG5J8VGIwdvJEDfxLUbemsrPdqYo7Q";

  // URL declaration 
  const host = "http://localhost:3500"

  // Fetch All Notes 
  const finalNotesInitials = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method:'GET',
      headers: {
        'Content-Type':'application/json',
        'auth-token':localStorage.token
      },
      body: JSON.stringify()
    });
    const json = await response.json();
    setNotes(json);
  }


  // Add a Note
  const addNote = async (getColor) => {
    // Api Call
    const response = await fetch(`${host}/api/notes/addNotes`,{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
        'auth-token':localStorage.token
      },
      body: JSON.stringify({title:"Untitled Note",description:"",tag:"", color:getColor})
    });
    const json = await response.json();
    await finalNotesInitials();
    setPreviousNote(activeNote);
    setActiveNotes(json.saveNote);
    showAlert("New Note has been added","success")
  }


  // Delete a Note
  const deleteNote = async (id) => {
    // Api Call
    await fetch(`${host}/api/notes/deletenote/${id}`,{
      method:'DELETE',
      headers: {
        'Content-Type':'application/json',
        'auth-token':localStorage.token
      },
      body: JSON.stringify()
    });
    setDeleteNotes(id);
    await finalNotesInitials();
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
    await showAlert("Note Deleted","success")
  }

  const updateOnCloud = async () => {
    const updatedNote = JSON.parse(localStorage.update);
    let abc =new Date()
    // console.log(abc.toLocaleDateString()+" "+abc.toLocaleTimeString())
    await fetch(`${host}/api/notes/updateNote/${updatedNote._id}`,{
      method:'PUT',
      headers: {
        'Content-Type':'application/json',
        'auth-token':localStorage.token
      },
      body: JSON.stringify({title:(updatedNote.title)?updatedNote.title:"Untitled Note",description:(updatedNote.description)?updatedNote.description:"Untitled description",tag:(updatedNote.tag)?updatedNote.tag:"Untitled tag",date:abc})
    });
  }

  // Edit a Note
  const onUpdateNote = (updatedNote) => {
    notes.map((note) => {
      if (note._id === updatedNote._id) {
        return updatedNote;
      }
      return note;
    });
    setActiveNotes(updatedNote)
    localStorage.setItem("update",JSON.stringify(updatedNote))
    if(activeNote){updateOnCloud()}
  };


  // useEffect(()=>{if(previousNote&&activeNote!==previousNote){updateOnCloud()}},[activeNote,previousNote])
  // useEffect(()=>{updateOnCloud()},[])

  // Get Active Note
  const getActiveNote = () => {
    return notes.find(({ _id }) => _id === activeNote);
  };

  return (

    <noteContext.Provider value={{notes,setNotes,addNote,deleteNote,activeNote,getActiveNote,setActiveNote,onUpdateNote,deleteNotes,finalNotesInitials,previousNote,setPreviousNote,activeNotes,setActiveNotes,loading,setLoading}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteStates
