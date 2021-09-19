import React, { useState } from 'react';


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // JSX
    return (
        <section className="contact-section">
          <h1 className="contact-title m-5 text-center">Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-input" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-input" defaultValue={email} name="email" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" className="form-input" defaultValue={message} onChange={handleChange} rows="5" />
            </div>
            <button className="btn" type="submit">Submit</button>
          </form>
        </section>
    );
}
    
export default ContactForm;