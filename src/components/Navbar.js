import React, { useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import styles from './mycss.module.css';
import noteContext from '../context/notes/noteContext';

const Navbar = () => {
  const context = useContext(noteContext);
  const { setNotes } = context;

  const location = useLocation();
  const history = useNavigate();

  useEffect(()=>{    if(!localStorage.token){history('/login')}      
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  const handleSubmit = () => {
    localStorage.setItem('token',"");
    setNotes([]);
    history("/login");
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-sm ${styles.mainnav}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CloudNote</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              { (localStorage.token) && <Link className={`nav-link ${styles.navlink} ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>}
              </li>
              <li className="nav-item">
              { (localStorage.token) &&  <Link className={`nav-link ${styles.navlink} ${location.pathname==='/link'?"active":""}`} to="/link">Link</Link>}
              </li>
            </ul>
            { (!localStorage.token) &&<form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
              <Link className="btn btn-primary mx-2" to="/login">Login</Link>
              <Link className="btn btn-primary mx-2" to="/signup">Signup</Link>
            </form>}
            { (localStorage.token) &&<form className="d-flex" role="search">
              <div className="btn btn-primary mx-2" onClick={handleSubmit}>Logout</div>
            </form>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
