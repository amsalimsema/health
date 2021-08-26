import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
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
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    flex-wrap: wrap;
  }
`

export default function Speciality() {
  return (
    <>
      <div className="py-5 text-muted">
        <h2 className="text-center">KEY SPECIALITIES</h2>
        <Wrap fluid>
          <section className="d-flex">
            <div className="text-center p-3 font-weight-bold">
              <img
                src={cardio}
                alt="speciality"
                className="w-100"
                style={{ height: '100px', width: '200px' }}
              />
              <p>Cardiac Surgery</p>
            </div>
            <div className="text-center p-3 font-weight-bold">
              <img
                src={kidney}
                alt="speciality"
                className="w-100"
                style={{ height: '100px', width: '200px' }}
              />
              <p>Kidney Transplant</p>
            </div>
          </section>

          <section className="d-flex">
            <div className="text-center p-3 font-weight-bold">
              <img
                src={lung}
                alt="speciality"
                className="w-100"
                style={{ height: '100px', width: '200px' }}
              />
              <p>Cancer Surgery</p>
            </div>
            <div className="text-center p-3 font-weight-bold">
              <img
                src={ortho}
                alt="speciality"
                className="w-100"
                style={{ height: '100px', width: '200px' }}
              />
              <p>Joint Replacement</p>
            </div>
          </section>
        </Wrap>

        <Wrap>
          <section className="d-flex">
            <div className="text-center p-3 font-weight-bold">
              <img
                src={spine}
                alt="speciality"
                className="w-100"
                style={{ height: '100px', width: '200px' }}
              />
              <p>Neuro & Spine Surgery</p>
            </div>
            <div className="text-center p-3 font-weight-bold">
              <img
                src={liver}
                alt="speciality"
                className="w-100"
                style={{ height: '100px', width: '200px' }}
              />
              <p>Liver Transplant</p>
            </div>
          </section>

          <section className="d-flex">
            <div className="text-center p-3 font-weight-bold">
              <img
                src={fat}
                alt="speciality"
                className="w-100"
                style={{ height: '100px', width: '200px' }}
              />
              <p>Bariatric Surgery</p>
            </div>
            <div className="text-center p-3 font-weight-bold">
              <img
                src={radio}
                alt="speciality"
                className="w-100"
                style={{ height: '100px', width: '200px' }}
              />
              <p>Radiation Therapy</p>
            </div>
          </section>
        </Wrap>
        <Wrap>
          <section className="d-flex">
            <div className="text-center p-3 font-weight-bold">
              <img
                src={child}
                alt="speciality"
                className="w-100"
                style={{ height: '100px', width: '100px' }}
              />
              <p>Paediatric Cardiology</p>
            </div>
            <div className="text-center p-3 font-weight-bold">
              <img
                src={bone}
                alt="speciality"
                className="w-100"
                style={{ height: '100px', width: '100px' }}
              />
              <p>Bone Marrow Transplant</p>
            </div>
          </section>
        </Wrap>
      </div>
    </>
  )
}
