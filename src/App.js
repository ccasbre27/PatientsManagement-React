import React, { useState, Fragment } from 'react';
import Form from './components/Form';
import Appointment from "./components/Appointment";

function App() {

  const [appointments, setAppointment] = useState([]);

  // método para agregar nuevas citas al state
  const addAppointment = (newAppointment) => {
    // tomar copia del state y agregar la nueva cita
    const finalAppointments = [...appointments, newAppointment];
    
    setAppointment(finalAppointments);
  };

  return (
    <Fragment>
      <h1>Patients management</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              addAppointment={addAppointment} />
          </div>
          <div className="one-half-column">
            {appointments.map((currentAppointment, index) => (
              <Appointment 
                key={index}
                index={index}
                appointment={currentAppointment} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
