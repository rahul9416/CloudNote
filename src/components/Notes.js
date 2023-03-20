import React, { useContext, useEffect } from 'react';
import SideNav from './SideNav';
import NoteArea from './NoteArea';
import noteContext from '../context/notes/noteContext';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const context = useContext(noteContext);
  const {finalNotesInitials} = context;
  let history = useNavigate()
  useEffect(()=>{
    if(localStorage.token){
      finalNotesInitials()   
    }
    else{
      history("/login")
    } 
  })
  return (<>
    <SideNav key={1}/>
    <NoteArea/>
    </>
  )
}

export default Notes
