import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import styles from "./mycss.module.css";
import Noteitem from "./Noteitem";
import { Link} from "react-router-dom";

const Home = () => {
  const context = useContext(noteContext);
  const { notes, finalNotesInitials,addNote,setActiveNote } = context;

  useEffect(() => {
    if(localStorage.token){finalNotesInitials();}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const sortedNotes = [...notes].sort((a, b) =>new Date(b.date)-new Date(a.date));
  // const sortedNotes = []
  return (
    <div className={`container-fluid ${styles.card_container}`}>
      <div className={`row ${styles.card_container}`}>
        <div className={`col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 ${styles.allcard}`}><Link className={styles.link}>
          <div className={`card ${styles.cardss}`} >
            <div className={`card-body ${styles.cards_body}`}>
              <h1 className={styles.plus}>+</h1>
              <div className={styles.color}>
                <button className={`btn btn-light ${styles.colorbtn}`} onClick={async ()=>{await addNote("white");setActiveNote("abc");}}></button>
                <button className={`btn btn-primary ${styles.colorbtn}`} onClick={async ()=>{await addNote("rgb(13 110 253 / 77%)");setActiveNote("abc");}}></button>
                <button className={`btn btn-success ${styles.colorbtn}`} onClick={async ()=>{await addNote("rgb(25 135 84 / 77%)");setActiveNote("abc");}}></button>
                <button className={`btn btn-danger ${styles.colorbtn}`} onClick={async ()=>{await addNote("rgb(220 53 69 / 77%)");setActiveNote("abc");}}></button>
                <button className={`btn btn-warning ${styles.colorbtn}`} onClick={async ()=>{await addNote("rgb(255 193 7 / 77%)");setActiveNote("abc");}}></button>
                <button className={`btn btn-dark ${styles.colorbtn}`} onClick={async ()=>{await addNote("rgb(33 37 41 / 77%)");setActiveNote("abc");}}></button>
              </div>
            </div>
          </div></Link>
          </div>
          {sortedNotes.map((note) => {
            return <Noteitem note={note} key={note._id}/>;
          })}
        </div>
      </div>
  );
};

export default Home;
