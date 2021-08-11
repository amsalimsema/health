import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import { Bg, ConsultBtn } from './Global'

const LandingBg = styled(Bg)`
  height: 100vh;
`
const LandingInfo = styled(Container)`
  padding: 25vh 0;
  h1 {
    font-size: 4rem;
    font-weight: 900;
  }
  h5 {
    margin: 2rem auto;
  }
  @media only screen and (max-width: 330px) {
    padding: 20vh 0.5rem;
    h1 {
      font-size: 2rem;
      font-weight: 900;
    }
    h5 {
      margin: 0;
    }
  }
  @media only screen and (min-width: 360px) and (max-width: 568px) {
    padding: 25vh 0.5rem;
    h1 {
      font-size: 2rem;
      font-weight: 900;
    }
    h5 {
      margin: 2rem auto;
    }
  }
  @media only screen and (min-width: 1500px) {
    h1 {
      font-size: 6rem;
      font-weight: 900;
    }
    h5 {
      margin: 2rem auto;
      font-size: 2rem;
    }
  }
`

export default function Landing() {
  return (
    <>
      <LandingBg>
        <LandingInfo>
          <Row>
            <Col md={8}>
              <h1>HEALTH AND HOPES MEDICARE</h1>
              <h2>INTERNATIONAL PATIENT CARE</h2>
              <h5>
                Access to advanced quality treatment at affordable cost with
                personalized care globally has never been easier.{''}
                <strong> Health and Hopes Medicare</strong> will help you
                achieve that seemlessly.
              </h5>
              <ConsultBtn>Request a Quote</ConsultBtn>
            </Col>
            <Col md={4}></Col>
          </Row>
        </LandingInfo>
      </LandingBg>
    </>
  )
}
