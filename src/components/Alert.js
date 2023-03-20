import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import style from './mycss.module.css';

function Alert(props) {
    const cap=(word)=>{
        if(word==="danger"){word="error"}
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    //console.log(props.alert.type)
  return (
    
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show ${style.alert}`} role="alert">
        
        <strong>{cap(props.alert.type)}</strong>: {props.alert.msg} 
    </div>
  )
}

export default Alert