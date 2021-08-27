import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const Info = styled.div``

export default function Thank() {
  return (
    <>
      <Wrap>
        <Info>
          <p>Thank you for getting in touch.</p>
          <p>We will get back to you shortly</p>
          <p>
            <Link to="/">Return Home</Link>
          </p>
        </Info>
      </Wrap>
    </>
  )
}
