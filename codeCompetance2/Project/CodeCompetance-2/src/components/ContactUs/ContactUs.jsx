import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('message').value;

        const alertmsg = `Form submitted!:
        FirstName: ${firstName}
        LastName: ${lastName}
        Email: ${email}
        Message: ${msg}`
        alert(alertmsg);
    }
  return (
    <div className="my-contactus-section" id='contactus'>
      <Container>
        <Row>
        <div className="p-4">
          <h2 className="text-center text-black" style={{fontWeight:'bold'}}>Contact Us</h2>
          <p className="text-center text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint
            corrupti, odio distinctio labore eius?
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  aria-describedby="firstHelp"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  aria-describedby="lastHelp"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="Email1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="message" className="col-form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols={30}
                  rows={8}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="but">
              <button type="submit" id="formbutton" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
        </Row>
      </Container>
    </div>
  )
}

export default ContactUs