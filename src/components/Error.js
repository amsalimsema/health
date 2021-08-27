import React from 'react'
import { Wrap, Info } from './Thank'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
      <Wrap>
        <Info>
          <h2>404</h2>
          <p>We cannot find the page you're looking for</p>

          <p>
            <Link to="/">Return Home</Link>
          </p>
        </Info>
      </Wrap>
    </>
  )
}
