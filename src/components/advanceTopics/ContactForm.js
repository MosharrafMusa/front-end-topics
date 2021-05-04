import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppContact() {
  return (
   
    <div id="contact" className="block contactBlock">
      <h2>CONTACT US</h2>
        <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
        </div>
        
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address"/>
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Phone (Optional)" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Button 
            type="default"
            htmlType="submit"
            className= "my-button"
            size="large"
            >
            Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default AppContact;