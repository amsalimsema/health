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
// uniform spacing on top of all components to allow clarity after scroll

export const Space = styled.div`
  height: 80px;
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

// show details
export const Skirt = styled.div`
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
// show details title
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
  color: #fff;
  @media only screen and (min-width: 768px) {
    padding-top: 20rem;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 10rem;
  }
  @media only screen and (min-width: 2500px) {
    padding-top: 30rem;
  }
`

export const Container = styled.div`
  z-index: 1;
  width: 80vw;
  margin-right: 10vw;
  margin-left: 10vw;
`

// buttons for hopes
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
