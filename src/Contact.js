import React, {useState} from 'react'

import {Col,Row} from 'antd'
import img2 from './img2.png'
const Contact = () => {
  const [disable, setDisable] = useState(true);

  function handleChange(event) {
    setDisable(event.target.value === '');
}
    return (
        <>
        <div className='"site-card-border-less-wrapper"'>
          <Row className="card">
            <Col span={16}>
              <Row className="title">
                <h4 style={{ color: '#878D93', fontWeight: '700' }}>
                  CONTACT US
                </h4>
              </Row>
              <div className="description">
                <Row>
                 <p>If you would like to let us know
                    how we're doing of if you are
                    experiencing issues, contact
                    us by filling in the form bellow.</p>
                </Row>

              </div>
            </Col>
            <Col
              span={8}
              type="flex"
              style={{ alignItems: 'center' }}
              justify="bottom"
            >
              <img
                style={{ position: 'absolute', overflow: 'scroll' }}
                alt="example"
                src={img2}
              />
            </Col>
          </Row>
        </div>

        <div className="form-main">
        <Row className='card'>
        <form className="contact-form-container" >
        <Row className="form-input">
        <Col>
        <label for="name">
          Name
        </label><br/>
        <input
          type="text"
          name="name"
          id="name"
          className="contact-form-inputs"
          onChange={handleChange}
        />
        </Col>
        <Col>
        <label for="email">
         Email Address
        </label><br/>
        <input
        type="email"
        name="email"
        id="email"
        className="contact-form-inputs"
        onChange={handleChange}
        />
        </Col>
        </Row>
        <Row>
        <label for="message">
        Message
        </label><br/>
        <textarea id="message"
         name="message"
        className="contact-form-message"
        placeholder="Write your message here"
        onChange={handleChange}
         />
        </Row>
        <Row>
        <button
            type="submit"
            value="SEND MESSAGE"
            className="contact-form-submit-button"
            disabled={disable}
          >SEND MESSAGE</button>
        </Row>
      </form>
      </Row>
    </div>
    </>
    )
}

export default Contact;