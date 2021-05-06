import React from 'react';
import emailjs from 'emailjs-com';

import { Layout } from 'antd';



const ContactForm2 = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ghtt1eb', 'template_pk79pf6', e.target, 'user_pcz2czADtm5ala9BrkUqS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
  
  
  return (
    <>
      
      <Layout >
      <div className="container">
      <form onSubmit={sendEmail}>
        <div className="singleItem">
        <label>
          <p>Name</p>
        </label>
        <input
          type="text"
          name="name"
          className="contact-form-inputs"/>
        </div>

        <div className="singleItem">
        <label>
          <p>Email</p>
        </label>
        <input
          type="email"
          name="email"
          className="contact-form-inputs"/>
        </div>

        <div className="singleItem">
        <label>
          <p>Subject</p>
        </label>
        <input type="text" name="subject" className="contact-form-inputs" />
        </div>

        <div className="singleItem">
        <label>
          <p>Message</p>
        </label>
        <textarea name="message" className="contact-form-message"/>
        </div>

        <div className="contact-button-container">
          <input
            type="submit"
            value="Send"
            className="contact-form-submit-button"/>
        </div>
      </form>
    </div>
      </Layout>
    </>
  );
};

export default ContactForm2;
