import React from 'react';

function Appointment({ index, appointment, deleteAppointment }) {
    return (
        <div className="cita">
            <p>Patient: <span>{appointment.patientName}</span></p>
            <p>Date: <span>{appointment.date}</span></p>
            <p>Symptoms: <span>{appointment.symptoms}</span></p>
            <button 
                onClick={() => deleteAppointment(index)}
                type="button" 
                className="button eliminar u-full-width">
                Delete X
            </button>
        </div>
    );
}

export default Appointment;