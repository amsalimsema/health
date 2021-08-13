import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import doc from '../images/doc.jpg'

// general link

export const GenLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0rem 1rem;
  &:hover {
    text-decoration: none;
    color: #5b92e5;
  }
`

// background attributes for hopes
export const Bg = styled.div`
  background-image: url(${doc});
  height: 50vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.8s ease-in-out;
`

// used in nav and navelements for hopes

export const Container = styled.div`
  z-index: 1;
  width: 80vw;
  margin-right: 10vw;
  margin-left: 10vw;
`

// landing button for hopes
export const ConsultBtn = styled(Button)`
  padding: 1rem 3rem;
  margin: 1rem auto;
  background-color: #003638;
  border: 0;
  &:hover {
    background-color: #5b92e5;
  }
  @media only screen and (max-width: 568px) {
    padding: 0.7rem 0rem;
    width: 100%;
  }
`
// mobile drawer button for hopes
export const ConsultBtnMob = styled(Button)`
  background-color: #5b92e5;
  border: 0;
  padding: 0.7rem 0.7rem;
`
