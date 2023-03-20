import React, { useState,useContext } from 'react'
import styles from './mycss.module.css';
import { useNavigate } from 'react-router-dom';
import alertContext from '../context/notes/alertContext';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(alertContext);
  const {showAlert} = context;

  const history = useNavigate();

  const onChangeEmail=(e)=>{setEmail(e.target.value)}
  const onChangePassword=(e)=>{setPassword(e.target.value)}

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const response = await fetch("http://localhost:3500/api/auth/login",{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({email, password})
    });
    const json = await response.json();
    if(json.success){
      localStorage.setItem('token',json.authToken);
      history('/');
      showAlert("Successfully Login","success")
    }
    else{
      showAlert("Please Login with correct credentials","danger")
    }
  }

  return (
    <div className={styles.form}>
      <h2>LOGIN</h2>
      <form  onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" value={email} placeholder="name@example.com" onChange={onChangeEmail}/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" value={password} placeholder="Password" onChange={onChangePassword}/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className='btn btn-primary my-2'>Login</button>
      </form>
    </div>
  )
}

export default Login
