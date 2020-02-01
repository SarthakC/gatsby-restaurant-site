import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "./Layout.styles"
import Navbar from "../Navbar/Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout