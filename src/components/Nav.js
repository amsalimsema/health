import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import logo from '../logo.svg'
import '../App.css'

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
                  <GenLink
                    to="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    SERVICES
                  </GenLink>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    KEY SPECIALITIES
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    ABOUT US
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    TEAM
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <GenLink
                    to="/news/local"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    NEWS
                  </GenLink>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/#contact"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    ADVERTISE
                  </NavLinks>
                </NavItem>

                <Drawer>
                  <p className="pt-1">
                    &nbsp; &nbsp;
                    <span>Studio Lines:</span>
                    <br />
                    <a
                      href="tel: 0776910350"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      0776910350
                    </a>
                    &nbsp;/ &nbsp;
                    <a
                      href="tel:  0794559220"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      0794559220
                    </a>
                  </p>
                  <p>
                    &nbsp; &nbsp;
                    <span>Email:</span>
                    <br />
                    <a
                      href="mailto:tembofm103.5@gmail.com 
                  "
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      tembofm103.5@gmail.com
                    </a>
                  </p>
                  <p>
                    &nbsp; &nbsp;
                    <span>Address:</span>
                    <br /> P-Star building at Hilltop Plot 25, Ogwok Road.
                  </p>
                </Drawer>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </div>
    </>
  )
}
