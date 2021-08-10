import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import { Bg } from './Global'

const LandingBg = styled(Bg)`
  height: 100vh;
`
const LandingInfo = styled(Container)``

export default function Landing() {
  return (
    <>
      <LandingBg>
        <LandingInfo>
          <Row>
            <Col>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
              <h1>hhhhh</h1>
            </Col>
            <Col></Col>
          </Row>
        </LandingInfo>
      </LandingBg>
    </>
  )
}
