import React, {useContext} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import styles from "./mycss.module.css";
import noteContext from '../context/notes/noteContext';
import { Link } from 'react-router-dom';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote,setActiveNotes,setActiveNote} = context;
    const {note} = props;
  return (
    <div className={`col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3`}>  
      <Link to="/link" className={styles.link} onClick={()=>{setActiveNotes(note); setActiveNote(note._id)}}>
        <div className={`card my-3 ${styles.cards}`} style={{backgroundColor: `${note.color}`, color:`${`${note.color==='white'?'black':'white'}`}`}}>   
          <div className={`card-body ${styles.card_body}`}>
            <h5 className="card-title">{(note.title!==" ")?note.title:"Untitled Note"}</h5>
            <p className="card-text">{note.description.length>80?note.description.slice(0,80)+"...":note.description==="Untitled description"?"":note.description}</p>
            <p className={styles.date}>{`${new Date(note.date).toLocaleDateString("en-GB",{})}`}</p>
            <p className={styles.time}>{new Date(note.date).toLocaleTimeString({hour: "2-digit"})}</p>
            <div className={styles.i}></div>
            <i className={`fa-solid fa-trash mx-2 ${styles.ia}`} onClick={()=> {deleteNote(note._id)}}></i>        
          </div>
        </div>
      </Link>      
    </div>
  )
}

export default Noteitem
