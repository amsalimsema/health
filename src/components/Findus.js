import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import {
  FaMapMarker,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa'

const Wrap = styled(Container)`
  background-color: #003638;
  color: #fff;
  cursor: pointer;
`
const Footer = styled(Container)`
  padding: 2rem 0;
`

export default function Findus() {
  return (
    <>
      <Wrap fluid>
        <Footer>
          <Row>
            <Col md={4}>
              <h5>Health And Hopes Medicare</h5>
              <p>-&nbsp;International Patient Care&nbsp;-</p>
              <p>
                Committed to helping you obtain genuine professional medical
                care abroad fast and seemlessly.
              </p>
            </Col>
            <Col md={6}>
              <p>
                {' '}
                <FaMapMarker style={{ color: '#fff' }} />
                &nbsp;&nbsp;Airtel House, Nansana
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Level 3, Room F1 - 3
              </p>
              <p>
                <FaPhoneAlt style={{ color: '#fff' }} />
                &nbsp;&nbsp;0702891864
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0773538969
              </p>
            </Col>
            <Col md={2} className="d-flex">
              <a
                href="https://wa.me/256702891864/?text=Hello Health And Hopes Medicare"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                style={{ color: '#fff' }}
              >
                <FaWhatsapp style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>

              <a
                href="https://behance.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                style={{ color: '#fff', paddingLeft: '1rem' }}
              >
                <FaFacebookF style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>

              <a
                href="https://behance.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                style={{ color: '#fff', paddingLeft: '1rem' }}
              >
                <FaYoutube style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>

              <a
                href="https://behance.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{ color: '#fff', paddingLeft: '1rem' }}
              >
                <FaInstagram style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>
            </Col>
          </Row>
          <p className="text-center pt-3">
            &copy;{new Date().getFullYear()}&nbsp;Health And Hopes Medicare.
          </p>
        </Footer>
      </Wrap>
    </>
  )
}
