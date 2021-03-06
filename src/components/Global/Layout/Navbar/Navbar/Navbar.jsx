import React, { useState } from "react"

import NavbarHeader from "../NavbarHeader/NavbarHeader"
import NavbarLinks from "../NavbarLinks/NavbarLinks"
import NavbarIcons from "../NavbarIcons/NavbarIcons"

import { NavbarWrapper } from "./Navbar.styles"

const Navbar = () => {
  const [state, setState] = useState({
    navbarOpen: false,
  })
  const handleNavbar = () => {
    setState({ ...state, navbarOpen: !navbarOpen })
  }

  const { navbarOpen } = state
  return (
    <NavbarWrapper>
      <NavbarHeader handleNavbar={handleNavbar} />
      <NavbarLinks navbarOpen={navbarOpen} />
      <NavbarIcons />
    </NavbarWrapper>
  )
}

export default Navbar
