import React from 'react'

import {Col,Row} from 'antd'
import img2 from './img2.png'
const Contact = () => {
    return (
        <>
        <div className='"site-card-border-less-wrapper"'>
          <Row className="card">
            <Col span={16} className="title">
              <Row>
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

        <div className="site-card-border-less-wrapper">
        <Row className='card'>
        <form className="Contact-Form-Container" >
        <Row >
        <label>
          <p>Name</p>
        </label>
        <input
          type="text"
          name="name"
          className="contact-form-inputs"

        />
        <label>
          <p>Email</p>
        </label>
        <input
          type="email"
          name="email"
          className="contact-form-inputs"

        />
        </Row>
        <Row>
             <label>
          <p>Message</p>
        </label>
        <textarea name="message" className="contact-form-message" />
        </Row>
        <Row>
        <div className="contact-button-container">
          <input
            type="submit"
            value="Send"
            className="contact-form-submit-button"
          />
        </div>
        </Row>
      </form>
      </Row>
    </div>

        </>
    )
}

export default Contact;