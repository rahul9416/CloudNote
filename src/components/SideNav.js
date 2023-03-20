import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styles from './mycss.module.css';
import noteContext from '../context/notes/noteContext';

const SideNav = () => {
    const context = useContext(noteContext);
    let {notes,setPreviousNote,activeNote,addNote,setActiveNote,deleteNote,setActiveNotes} = context;
    const sortedNotes = [...notes].sort((a, b) =>new Date(b.date)-new Date(a.date));
    return (
        <div>
        <nav className={`${styles.sidenavbar}`}>
                <div className={styles.navbody}>
                    <div className={styles.additembtn} >
                        <p className={styles.icon}>+ Add New Note</p>
                        <div className={styles.colors}>
                            <button className={`btn btn-light ${styles.colorbtn}`} onClick={async ()=>{await addNote("white");setActiveNote("abc");}}></button>
                            <button className={`btn btn-primary ${styles.colorbtn}`} onClick={async ()=>{await addNote("rgb(13 110 253 / 77%)");setActiveNote("abc");}}></button>
                            <button className={`btn btn-success ${styles.colorbtn}`} onClick={async ()=>{await addNote("rgb(25 135 84 / 77%)");setActiveNote("abc");}}></button>
                            <button className={`btn btn-danger ${styles.colorbtn}`} onClick={async ()=>{await addNote("rgb(220 53 69 / 77%)");setActiveNote("abc");}}></button>
                            <button className={`btn btn-warning ${styles.colorbtn}`} onClick={async ()=>{await addNote("rgb(255 193 7 / 77%)");setActiveNote("abc");}}></button>
                            <button className={`btn btn-dark ${styles.colorbtn}`} onClick={async ()=>{await addNote("rgb(33 37 41 / 77%)");setActiveNote("abc");}}></button>
                        </div>
                    </div>
                    
                    <div className={styles.notes}>
                        {sortedNotes.map((note)=>{
                            return <div key={note._id} className={`${styles.titles} ${activeNote===note._id && styles.active}`} onClick={()=>{
                                setPreviousNote(activeNote);
                                setActiveNote(note._id);
                                let newNotes = notes.filter((noted)=>{return noted._id===note._id});
                                setActiveNotes(newNotes[0]);
                            }}>
                                <div>{note.title}</div>
                                <i className={`fa-solid fa-trash mx-2 active ${styles.is}`} onClick={()=> {deleteNote(note._id)}}></i>
                                <div className={styles.navdate}>{`Last Modified: ${new Date(note.date).toLocaleDateString("en-GB",{})}, ${new Date(note.date).toLocaleTimeString({hour: "2-digit",minute: "2-digit",})}`}</div>
                                </div>;                        
                        })}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SideNav

