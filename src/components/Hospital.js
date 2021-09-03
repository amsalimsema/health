import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import apollo from '../images/apollo.jpg'
import akash from '../images/Aakash.png'
import artemis from '../images/artemis.jpg'
import blk from '../images/blk.jpg'
import asian from '../images/asian.png'
import fortis from '../images/fortis.png'
import max from '../images/max.png'
import narayana from '../images/narayana.jpg'
import yoshida from '../images/yoshida.jpg'
// new hospitals
import global from '../images/global.jpg'
import manipal from '../images/manipal.jpg'
import maxcure from '../images/maxcure.png'
import metro from '../images/metro.png'
import sir from '../images/sir.png'
import spinemasters from '../images/spinemasters.jpg'

const Wrap = styled(Container)`
  text-align: center;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    text-align: center;
  }
`

export default function Hospital() {
  return (
    <>
      <div className="py-5">
        <h2 className="text-center text-muted">PARTNERING HOSPITALS</h2>
        <Wrap>
          <Row>
            <Col md={4}>
              <p className="pb-3">
                <img src={asian} alt="speciality" style={{ width: '250px' }} />
              </p>
              <p className="pb-3">
                <img src={akash} alt="speciality" style={{ width: '210px' }} />
              </p>
              <p className="pb-3">
                <img
                  src={yoshida}
                  alt="speciality"
                  style={{ width: '200px' }}
                />
              </p>
            </Col>

            <Col md={4}>
              <p>
                <img src={fortis} alt="speciality" style={{ width: '220px' }} />
              </p>
              <p className="pb-5">
                <img src={max} alt="speciality" style={{ width: '200px' }} />
              </p>
              <p>
                <img
                  src={narayana}
                  alt="speciality"
                  style={{ width: '230px' }}
                />
              </p>
            </Col>
            <Col md={4}>
              <p className="pb-5">
                <img src={apollo} alt="speciality" style={{ width: '210px' }} />
              </p>
              <p className="pb-5">
                <img src={blk} alt="speciality" style={{ width: '210px' }} />
              </p>
              <p>
                <img
                  src={artemis}
                  alt="speciality"
                  style={{ width: '210px' }}
                />
              </p>
            </Col>
          </Row>
          {/* new hospitals */}

          <Row>
            <Col md={4}>
              <p className="pb-3">
                <img src={global} alt="speciality" style={{ width: '250px' }} />
              </p>
              <p className="pb-3">
                <img
                  src={manipal}
                  alt="speciality"
                  style={{ width: '210px' }}
                />
              </p>
            </Col>

            <Col md={4}>
              <p>
                <img src={metro} alt="speciality" style={{ width: '220px' }} />
              </p>

              <p>
                <img src={sir} alt="speciality" style={{ width: '230px' }} />
              </p>
              <p className="pb-3">
                <img
                  src={maxcure}
                  alt="speciality"
                  style={{ width: '200px' }}
                />
              </p>
            </Col>
            <Col md={4}>
              <p className="pb-5">
                <img
                  src={spinemasters}
                  alt="speciality"
                  style={{ width: '210px' }}
                />
              </p>
            </Col>
          </Row>
        </Wrap>
        <Container>
          <div>
            <h6 className="font-weight-bold text-center text-muted">
              INSURANCE
            </h6>
            <p className="font-weight-bold text-center text-muted">
              NHIF&nbsp;|&nbsp;CIGNA&nbsp;|&nbsp;ALLIANZ&nbsp;|&nbsp;KENYA
              ALLIANCE&nbsp;|&nbsp;BRITAM&nbsp;|&nbsp;TATA
              AIG&nbsp;|&nbsp;CIC&nbsp;
            </p>
          </div>
        </Container>
      </div>
    </>
  )
}
