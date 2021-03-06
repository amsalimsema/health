import React from 'react'
import Findus from '../components/Findus'
import Hospital from '../components/Hospital'
import Landing from '../components/Landing'
import Services from '../components/Services'
import Speciality from '../components/Speciality'
import AboutUs from '../components/AboutUs'

export default function home() {
  return (
    <div>
      <Landing />
      <div id="aboutus">
        <AboutUs />
      </div>
      <div id="specialities">
        <Speciality />
      </div>
      <div id="hospitals">
        <Hospital />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="address">
        <Findus />
      </div>
    </div>
  )
}
