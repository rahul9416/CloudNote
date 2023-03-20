import React, { useState,useContext } from 'react'
import style from './mycss.module.css';
import { useNavigate } from 'react-router-dom';
import alertContext from '../context/notes/alertContext';

const Signup = () => {
  const context = useContext(alertContext);
  const {showAlert} = context;

  const [credentials, setCredentials] = useState({email:"",password:"",name:""});

  let history = useNavigate();

  const onChangeEmail=(e)=>{setCredentials({...credentials, [e.target.name] : e.target.value})}

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCredentials({name:"", email: "", password: ""})
    const response = await fetch("http://localhost:3500/api/auth/createUser",{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({name:credentials.name, email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    if(json.success){
      history('/login');
      showAlert("Succcessfully Created Account","success")
    }
    else{
      showAlert("Please Signup with correct credentials","danger")
    }
  }

  return (
    <div className={style.form}>
      <h2>SIGN-UP</h2>
      <form  onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingName" name="name" value={credentials.name} placeholder="Name" onChange={onChangeEmail}/>
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" name="email" value={credentials.email} placeholder="name@example.com" onChange={onChangeEmail}/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" name="password" value={credentials.password} placeholder="Password" onChange={onChangeEmail}/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className='btn btn-primary my-2'>Login</button>
      </form>
    </div>
  )
}

export default Signup
