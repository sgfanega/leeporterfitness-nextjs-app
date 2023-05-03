import React, { ChangeEvent, useState } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

interface FormPost {
  firstName?:  string,
  lastName?:   string
  email?:      string,
  enquiry?:    string
}

export default function ContactForm() {
  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const [state, setState] = useState<FormPost>()
  const [submitted, setSubmitted] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    fetch('/', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state})
    }).then((response) => {
      console.log(response)
      if (!response.ok) {
        setShowErrorMessage(true)
      }
    }).then(() => {
      setShowSuccessMessage(true)
    })

    event.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  return (
    <section id="contact-form" className="contact-form">
    { showSuccessMessage && !showErrorMessage &&
      <p className="fs-4 fw-500 fc-bright-gray text-center mb-0">We will get in touch with you soon!</p>
    }
    { showErrorMessage && 
      <p className="fs-4 fw-500 fc-bright-gray text-center mb-0">There was an issue with your submission, please email <a href="mailto:info@futureconnect.one" >us.</a></p>
    }
    { (!submitted) &&
      <Form name="contact-form" method="POST" data-netlify="true" onSubmit={onSubmit}>
        <Form.Control type="hidden" name="form-name" value="contact-form"/>
        <Form.Control type="hidden" name="bot-field"/>
        <Form.Group className="mb-3" >
          <Form.Label className="fc-bright-gray fw-500" htmlFor="firstName">First Name:</Form.Label>
          <FloatingLabel  label="Enter First Name">
            <Form.Control id="firstName" name="firstName" type="text" placeholder="Enter First Name" required onChange={handleChange}/>
          </FloatingLabel>
        </Form.Group>      
        <Form.Group className="mb-3" >
          <Form.Label className="fc-bright-gray fw-500" htmlFor="lastName">Last Name:</Form.Label>
          <FloatingLabel  label="Enter Last Name">
            <Form.Control id="lastName" name="lastName" type="text" placeholder="Enter Last Name" required onChange={handleChange}/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label className="fc-bright-gray fw-500" htmlFor="email">Email Address:</Form.Label>
          <FloatingLabel label="Enter Email">
            <Form.Control id="email" name="email" type="email" placeholder="Enter Email" required onChange={handleChange}/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label className="fc-bright-gray fw-500" htmlFor="enquiry">Inquiry:</Form.Label>
          <FloatingLabel  label="What Would You Like To Know?">
            <Form.Control id="enquiry" name="enquiry" as="textarea" placeholder="What Would You Like To Know?"  style={{ height: '12.5rem' }} required onChange={handleChange}/>
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Contact Me Now!
        </Button>
      </Form> 
    }
    </section>
  )
}