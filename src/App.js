import React, { useState, Fragment, useEffect } from 'react';
import Form from './components/Form';
import Appointment from "./components/Appointment";

function App() {

  let defaultAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!defaultAppointments) {
    defaultAppointments = [];
  } 

  const [appointments, setAppointment] = useState(defaultAppointments);

  // método para agregar nuevas citas al state
  const addAppointment = (newAppointment) => {
    // tomar copia del state y agregar la nueva cita
    const finalAppointments = [...appointments, newAppointment];
    
    setAppointment(finalAppointments);
  };

  // elimina las citas del state
  const deleteAppointment = (index) => {
    const currentState = [...appointments];
    currentState.splice(index, 1);
    setAppointment(currentState);
  };

  useEffect(
    () => {
      let defaultAppointments = JSON.parse(localStorage.getItem('appointments'));
      if(defaultAppointments) {
        localStorage.setItem('appointments', JSON.stringify(defaultAppointments));
      } else {
        localStorage.setItem('appointments', JSON.stringify([]));
      }
      
      // el segundo parámetro es para indicar cuál componente dispara el useEffect
    }, [appointments]
  )

  // cargar condicionalmente un título
  const title = Object.keys(appointments).length === 0 ? 'There are not appointments yet' : 'List of appointments';

  return (
    <Fragment>
      <h1>Patients management</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Create appointment</h2>
            <Form
              addAppointment={addAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((currentAppointment, index) => (
              <Appointment 
                key={index}
                index={index}
                appointment={currentAppointment}
                deleteAppointment={deleteAppointment} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
