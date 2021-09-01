import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cardio from '../images/heart.png'
import kidney from '../images/kidneys.png'
import lung from '../images/ribbon.png'
import ortho from '../images/fracture.png'
import spine from '../images/spine.png'
import liver from '../images/liver.png'
import fat from '../images/liposuction.png'
import radio from '../images/radiation.png'
import child from '../images/heartc.png'
import bone from '../images/bone.png'

const Wrap = styled(Container)`
  cursor: pointer;
  width: 70vw;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`
const ImgBox = styled.div`
  transition: 0.8s ease-in-out;
  &:hover {
    transform: translateY(3px);
    color: #003638;
  }
`

export default function Speciality() {
  return (
    <>
      <div className="py-5 text-muted">
        <h2 className="text-center">KEY SPECIALITIES</h2>

        <Wrap>
          <Row>
            <Col md={6}>
              <section className="d-flex">
                <div className="text-center  font-weight-bold p-3 ">
                  <ImgBox>
                    <p>
                      <img src={cardio} alt="speciality" className="w-100" />
                    </p>
                    <p>Cardiac Surgery</p>
                  </ImgBox>
                </div>
                <div className="text-center  font-weight-bold p-3">
                  <ImgBox>
                    <p>
                      <img src={kidney} alt="speciality" className="w-100" />
                    </p>
                    <p>Kidney Transplant</p>
                  </ImgBox>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section className="d-flex">
                <div className="text-center  font-weight-bold p-3">
                  <ImgBox>
                    <p>
                      <img src={lung} alt="speciality" className="w-100" />
                    </p>
                    <p>Cancer Surgery</p>
                  </ImgBox>
                </div>
                <div className="text-center  font-weight-bold p-3">
                  <ImgBox>
                    <p>
                      <img src={ortho} alt="speciality" className="w-100" />
                    </p>
                    <p>Joint Replacement</p>
                  </ImgBox>
                </div>
              </section>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <section className="d-flex">
                <div className="text-center  font-weight-bold p-3">
                  <ImgBox>
                    <p>
                      <img src={spine} alt="speciality" className="w-100" />
                    </p>
                    <p>Neuro & Spine Surgery</p>
                  </ImgBox>
                </div>
                <div className="text-center  font-weight-bold p-3">
                  <ImgBox>
                    <p>
                      <img src={liver} alt="speciality" className="w-100" />
                    </p>
                    <p>Liver Transplant</p>
                  </ImgBox>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section className="d-flex">
                <div className="text-center  font-weight-bold p-3">
                  <ImgBox>
                    <p>
                      <img src={fat} alt="speciality" className="w-100" />
                    </p>
                    <p>Bariatric Surgery</p>
                  </ImgBox>
                </div>
                <div className="text-center  font-weight-bold p-3">
                  <ImgBox>
                    <p>
                      <img src={radio} alt="speciality" className="w-100" />
                    </p>
                    <p>Radiation Therapy</p>
                  </ImgBox>
                </div>
              </section>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <section className="d-flex">
                <div className="text-center  font-weight-bold p-3">
                  <ImgBox>
                    <p>
                      <img src={child} alt="speciality" className="w-100" />
                    </p>
                    <p>Paediatric Cardiology</p>
                  </ImgBox>
                </div>
                <div className="text-center  font-weight-bold p-3">
                  <ImgBox>
                    <p>
                      <img src={bone} alt="speciality" className="w-100" />
                    </p>
                    <p>Bone Marrow Transplant</p>
                  </ImgBox>
                </div>
              </section>
            </Col>
            <Col md={6}></Col>
          </Row>
        </Wrap>
      </div>
    </>
  )
}
