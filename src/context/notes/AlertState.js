import React, {useState} from 'react';
import Alert from '../../components/Alert';
import alertContext from './alertContext';

const AlertState = (props) => {
    const [alert, setAlert]=useState(null);

    const showAlert =(message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500);
    }
  return (
    <>
        <Alert alert={alert}/>
    <alertContext.Provider value={{showAlert}}>
        {props.children}
    </alertContext.Provider>
</>
  )
}

export default AlertState
