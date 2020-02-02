import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "./Layout.styles"
import Navbar from "../Navbar/Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
