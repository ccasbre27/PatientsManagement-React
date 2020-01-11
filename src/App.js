import React, { useState, Fragment } from 'react';
import Form from './components/Form';

function App() {

  const [appointments, setAppointment] = useState([]);

  return (
    <Fragment>
      <h1>Patients management</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half-column">

          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
