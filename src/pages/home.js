import React from 'react'
import Findus from '../components/Findus'
import Landing from '../components/Landing'
import Services from '../components/Services'
import Speciality from '../components/Speciality'

export default function home() {
  return (
    <div>
      <Landing />
      <Speciality />
      <Services />
      <Findus />
    </div>
  )
}
