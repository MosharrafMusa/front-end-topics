import React from 'react';

import { useForm } from "react-hook-form";

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
    

    const onSubmit = (data, r) => {
      alert(`Thank you for your message from ${data.email}`);
      const templateId = 'template_pk79pf6';
      const serviceID = 'service_ghtt1eb';
      sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
      r.target.reset();
  }

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}

    return (
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="comment" />
      <input type="submit" value="Send" />
    </form>
  );
}


export default ContactForm;