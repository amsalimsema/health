import React, { useState } from 'react'
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import logo from '../logo192.png'
import '../App.css'
import { ConsultBtnMob } from './Global'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Drawer,
} from './NavElements'
// import { Call, Envelope, Map } from './Contact'
import { GenLink } from './Global'

export default function NavTop() {
  // open and close drawer
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // change bg
  const [MobileNav, setMobileNav] = useState(false)
  const changebackground = () => {
    if (window.scrollY >= 50) {
      setMobileNav(true)
    } else {
      setMobileNav(false)
    }
  }
  window.addEventListener('scroll', changebackground)

  return (
    <>
      <div className={MobileNav ? 'MobileNav active' : 'MobileNav'}>
        <IconContext.Provider value={{ color: 'white' }}>
          <Nav>
            <NavbarContainer>
              <NavLogo to="/" onClick={closeMobileMenu}>
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: '60px', width: '60px' }}
                />
              </NavLogo>
              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>

              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <GenLink
                    to="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    HOME
                  </GenLink>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/#specialities"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    KEY SPECIALITIES
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/#services"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    SERVICES
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/#hospitals"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    HOSPITALS
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/#aboutus"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    ABOUT US
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/#address"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    FIND US
                  </NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks
                    href="tel:+256702891864"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    <FaPhoneAlt />
                    &nbsp;+256 702 891 864
                  </NavLinks>
                </NavItem>

                <Drawer>
                  <p>Talk to our service consultant in person</p>
                  <ConsultBtnMob>Make An Appointment</ConsultBtnMob>
                </Drawer>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </div>
    </>
  )
}
