import React, { Fragment, useState } from 'react';

function Form(props) {

    const [appointment, setAppointment] = useState({
        patientName: '',
        date: '',
        symptoms: ''
    });

    const handleChange = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: [e.target.value]
        })
    }

    return (
        <Fragment>
            <h2>Create appointment</h2>

            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="patientName"
                    className="u-full-width" 
                    placeholder="Patient name" 
                    onChange={handleChange} />

                <label>Date</label>
                <input 
                    type="date" 
                    className="u-full-width"
                    name="date"
                    onChange={handleChange} />               

                <label>Symptoms</label>
                <textarea 
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange} >

                </textarea>

                <button type="submit" className="button-primary u-full-width">Add</button>
            </form>
        </Fragment>
    );
}

export default Form;