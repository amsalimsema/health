import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

const Wrap = styled(Container)`
  width: 70vw;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`

export default function Services() {
  return (
    <>
      <div className="py-5">
        <h2 className="text-center">SERVICES</h2>
        <Wrap>
          <Row>
            <Col>
              <ul>
                <li>
                  <p>Medical Visa Services</p>
                </li>
                <li>
                  <p>
                    Medical Opinion Services and Treatment Quotes from different
                    hospitals like in India, UK, Germany, Turkey, Russia,
                    Netherland & U.A.E. (Hospital Booking)
                  </p>
                </li>
                <li>
                  <p>Complimentary Pickup and Drop off at the Airport </p>
                </li>
                <li>
                  <p>Private Nurse Provided if requested</p>
                </li>
                <li>
                  <p>
                    Pre-Medical Consultation on Whatsapp, Viber with World Class
                    Doctors
                  </p>
                </li>
                <li>
                  <p>Language Interpreter</p>
                </li>
                <li>
                  <p> Follow up Assistance</p>
                </li>
                <li>
                  <p>Air ticket Booking</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Wrap>
      </div>
    </>
  )
}
