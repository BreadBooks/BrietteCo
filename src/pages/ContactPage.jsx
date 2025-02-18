// src/pages/ContactPage.jsx 
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './ContactPage.css';
import contactBanner from '../assets/contactbanner.webp'; // adjust the path as needed

function ContactPage() {
  // State to track whether the form was successfully submitted
  const [submitted, setSubmitted] = useState(false);
  // Optional: state for error messages if needed
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Send the admin notification email using the form data
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN, // Your admin template ID
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log('Admin notification sent:', result.text);

        // Extract the user's email and first name from the form
        const userEmail = e.target.elements.email.value;
        const firstName = e.target.elements.firstName.value;

        // Prepare parameters for the user confirmation email
        const templateParams = {
          to_email: userEmail, // This should match the placeholder in your User Confirmation template
          firstName: firstName,
          // Add additional parameters if your template requires them
        };

        // Send the confirmation email to the user
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER, // Your user confirmation template ID
            templateParams,
            import.meta.env.VITE_EMAILJS_USER_ID
          )
          .then((res) => {
            console.log('User confirmation email sent:', res.text);
            // After both emails are sent, set the submitted state to true
            setSubmitted(true);
          })
          .catch((error) => {
            console.error('Error sending user confirmation email:', error.text);
            setErrorMessage('There was an error sending the confirmation email.');
          });

        // Optionally, reset the form after a successful submission
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error sending admin email:', error.text);
        setErrorMessage('There was an error sending your message. Please try again later.');
      });
  };

  // Function to allow the user to resubmit the form
  const handleResubmit = () => {
    setSubmitted(false);
    setErrorMessage('');
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner">
        <img 
          src={contactBanner} 
          alt="Contact Banner" 
          className="contact-banner-image" 
        />
      </div>

      {/* Title & Description */}
      <p className="contact-description">
        I'd love to book a photo session with you!<br>
        </br>
        Fill out the form below to get started.
      </p>

      {submitted ? (
        // Confirmation message after successful submission
        <div className="form-confirmation">
          <p>Thank you for your message! I will get back to you as soon as possible.</p>
          <button onClick={handleResubmit} className="contact-button">
            Submit Another Response
          </button>
        </div>
      ) : (
        // The contact form
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              className="contact-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              className="contact-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className="contact-input" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="contact-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="dates">Desired Date(s)</label>
            <input 
              type="text" 
              id="dates" 
              name="dates" 
              className="contact-input" 
              placeholder="MM/DD/YYYY or a range" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="sessionType">Type of Session</label>
            <input 
              type="text" 
              id="sessionType" 
              name="sessionType" 
              className="contact-input" 
              placeholder="e.g., Portrait, Wedding, etc." 
            />
          </div>
          <div className="form-group">
            <label htmlFor="referral">How did you hear about us?</label>
            <input 
              type="text" 
              id="referral" 
              name="referral" 
              className="contact-input" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="questions">Any other questions?</label>
            <textarea 
              id="questions" 
              name="questions" 
              className="contact-textarea"
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      )}

      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
          <button onClick={handleResubmit} className="contact-button">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
