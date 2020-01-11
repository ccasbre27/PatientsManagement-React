import React, { Fragment, useState } from 'react';

function Form({ addAppointment }) {

    const defaultState = {
        patientName: '',
        date: '',
        symptoms: ''
    }

    const [appointment, setAppointment] = useState(defaultState);

    const handleChange = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: [e.target.value]
        })
    }

    const saveDate = (e) => {
        e.preventDefault();

        // pasar la cita al componente principal
        addAppointment(appointment);

        // reiniciar el state
        setAppointment(defaultState);
    }

    return (
        <Fragment>

            <form
                onSubmit={saveDate}>

                <label>Name</label>
                <input 
                    type="text" 
                    name="patientName"
                    className="u-full-width" 
                    placeholder="Patient name" 
                    onChange={handleChange}
                    value={appointment.patientName} />

                <label>Date</label>
                <input 
                    type="date" 
                    className="u-full-width"
                    name="date"
                    onChange={handleChange}
                    value={appointment.date} />               

                <label>Symptoms</label>
                <textarea 
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange}
                    value={appointment.symptoms} >

                </textarea>

                <button type="submit" className="button-primary u-full-width">Add</button>

            </form>

        </Fragment>
    );
}

export default Form;