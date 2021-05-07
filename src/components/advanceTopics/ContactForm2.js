import React from 'react';
import emailjs from 'emailjs-com';

import { Layout } from 'antd';



const ContactForm2 = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_RECEIVER,
           process.env.REACT_APP_EMAILJS_TEMPLATEID,
            e.target, 
            process.env.REACT_APP_EMAILJS_USERID)
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
          />
        </div>

        <div className="singleItem">
        <label>
          <p>Email</p>
        </label>
        <input
          type="email"
          name="email"
          />
        </div>

        <div className="singleItem">
        <label>
          <p>Subject</p>
        </label>
        <input type="text" name="subject" />
        </div>

        <div className="singleItem">
        <label>
          <p>Message</p>
        </label>
        <textarea name="message" />
        </div>

        <div className="btn">
          <input
            type="submit"
            value="Submit"
            />
        </div>
      </form>
    </div>
      </Layout>
    </>
  );
};

export default ContactForm2;
