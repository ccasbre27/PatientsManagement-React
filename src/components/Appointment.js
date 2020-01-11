import React from 'react';

function Appointment({ appointment }) {
    return (
        <div className="cita">
            <p>Patient: <span>{appointment.patientName}</span></p>
            <p>Date: <span>{appointment.date}</span></p>
            <p>Symptoms: <span>{appointment.symptoms}</span></p>
        </div>
    );
}

export default Appointment;