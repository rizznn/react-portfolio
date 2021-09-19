import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };

    // JSX
    return (
        <section className="contact-section">
          <h1 className="contact-title m-5 text-center">Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-input" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-input" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" className="form-input" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className="btn" type="submit">Submit</button>
          </form>
        </section>
    );
}
    
export default ContactForm;