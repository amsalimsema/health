import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Quote() {
  // form validation
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        name="health"
        target="_self"
        action="https://formsubmit.co/ 60463fb5c11ca4929a44b8dcc022a7c9"
        method="POST"
        id="health_form"
        autoComplete="off"
      >
        <input
          type="hidden"
          name="_next"
          value="https://healthandhopes.netlify.app/thankyou"
        />
        <input type="hidden" name="_captcha" value="false" />
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Name*:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full name"
              required
              name="name"
            />

            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Email (optional):</Form.Label>
            <Form.Control type="email" placeholder="Your email" name="email" />

            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Phone*:</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Your number"
              required
              name="phone"
              pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
            />

            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number eg. &nbsp; 0782442281
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Message*:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Type message here..."
              required
              name="message"
            />

            <Form.Control.Feedback type="invalid">
              Please type your message
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
