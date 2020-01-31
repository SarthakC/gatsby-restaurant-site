import React from "react"

import { HeaderWrapper, FaAlignRightWrapper } from "./NavbarHeader.styles"
import { Link } from "gatsby"
import logo from "../../../../images/logo.svg"

const NavbarHeader = ({ handleNavbar }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logo} alt="company name" />
      </Link>
      <FaAlignRightWrapper onClick={handleNavbar} />
    </HeaderWrapper>
  )
}

export default NavbarHeader
