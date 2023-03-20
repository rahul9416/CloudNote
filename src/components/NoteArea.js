import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import style from "./mycss.module.css";
import noteContext from '../context/notes/noteContext';

const NoteArea = () => {
  const context = useContext(noteContext);
  let {activeNote,onUpdateNote,deleteNotes,activeNotes}=context;
  if (!activeNote){ return <div className="no-active-note">No Active Note</div>;}
  if (!activeNotes){ console.log('acb'); return <div className="no-active-note">No Active Note</div>;}
  if (activeNote===deleteNotes) { return <div className="no-active-note">No Active Note</div>;}
  const onEditField = (field,value) => {
    onUpdateNote({
      ...activeNotes, [field]:value, date:Date.now(),
    });
  };
  return (
    
    <div className={style.noteshead}>
      <div className={style.notestitle}>
        <input type="text" onChange={(e)=>onEditField("title",e.target.value)} className={`form-control ${style.inputarea}`} id="title" name="title" placeholder='Note Title' autoFocus value={activeNotes.title}/>
        <div className={`col-auto ${style.tags}`}>
            <input type="text" onChange={(e)=>onEditField("tag",e.target.value)} className={`form-control ${style.tag}`} id="tag" name="tag" placeholder="Tag" value={(activeNotes.tag==="Untitled tag")?"":activeNotes.tag}/>
            <i className={`fa-solid fa-tag ${style.tagicon}`}></i> 
        </div>
      </div>
      <hr className={`divider ${style.divider}`} />
      <div className={style.notesmsg}>
        <textarea onChange={(e)=>onEditField("description",e.target.value)} className={`form-control ${style.desc}`} id="description" name="description" placeholder="Description" value={(activeNotes.description==="Untitled description")?"":activeNotes.description}></textarea>
      </div>
    </div>
  )
}

export default NoteArea
