import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import logo from '../logo192.png'
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
            <Col md={3}>
              <h5>Health And Hopes Medicare</h5>
              <p>-&nbsp;International Patient Care&nbsp;-</p>
              <p>
                Committed to helping you obtain genuine professional medical
                care abroad fast and seemlessly.
              </p>
            </Col>
            <Col md={3}>
              <p>UGANDA OFFICE:</p>
              <p>
                <FaMapMarker style={{ color: '#fff' }} />
                &nbsp;&nbsp;Airtel House, Nansana
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Level 3, Room F1 - 3
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next to JJ Medical Center
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hoima Road
              </p>

              <p>
                <FaPhoneAlt style={{ color: '#fff' }} />
                &nbsp;&nbsp;0702 891 864
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0773 538 969
              </p>
            </Col>
            <Col md={3}>
              <p>SOUTH SUDAN OFFICE:</p>
              <p>
                <FaMapMarker style={{ color: '#fff' }} />
                &nbsp;&nbsp;Gudele 1
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opposite LOU Clinic
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rubek Road
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Juba City
              </p>

              <p>
                <FaPhoneAlt style={{ color: '#fff' }} />
                &nbsp;&nbsp;+211 918 718 411
              </p>
            </Col>
            <Col md={3} className="d-flex">
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
          <p className="text-center pt-5">
            <img
              src={logo}
              alt="logo"
              style={{ height: '60px', width: '60px' }}
            />
          </p>
          <p className="text-center pt-3">
            &copy;{new Date().getFullYear()}&nbsp;Health And Hopes Medicare.
          </p>
        </Footer>
      </Wrap>
    </>
  )
}
